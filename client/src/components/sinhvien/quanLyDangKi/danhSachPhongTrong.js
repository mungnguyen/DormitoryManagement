import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Button } from 'reactstrap';
import dateFormat from 'dateformat';
import { hienThiCacKhuNha } from '../../../actions/khuNhaActions';
import { hienThiCacPhong } from '../../../actions/phongAction';
import { dangKiPhong, kiemTraSinhVienThuocKTX } from '../../../actions/sinhVienAction';

class DanhSachPhongTrong extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phong: "",
            khuNha: ""
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
        this.props.hienThiCacPhong();
        this.props.kiemTraSinhVienThuocKTX();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.sinhVien.tonTaiSV != this.props.sinhVien.tonTaiSV) {
            this.props.kiemTraSinhVienThuocKTX();
        }
    }

    clickPhong = (phong, khuNha) => {
        this.setState({
            phong: phong,
            khuNha: khuNha
        });
    }

    clickDangKiPhong = () => {
        const date = dateFormat(new Date(), "yyyy/mm/dd");
        this.props.dangKiPhong(this.state.phong.phongId, date);
        this.setState({
            phong: "",
            khuNha: ""
        })
    }

    render() {
        console.log(this.props.sinhVien.tonTaiSV);
        return (
            <div className="row" style={{ display: "block", clear: "both" }}>
                {this.props.khuNha.KhuNhas.length > 0 ? this.props.khuNha.KhuNhas.map(
                    item =>
                        <div style={{ marginBottom: "3em" }}>
                            <center className="ten-khu-nha">Khu {item.tenKhuNha}</center>
                            <div className="row">
                                {this.props.phong.Phongs.length > 0 ? this.props.phong.Phongs.filter(
                                    e => (e.KhuNha.khuNhaId == item.khuNhaId)
                                        && (e.loaiPhong == localStorage.getItem("gioiTinh"))
                                        && (e.soSinhVien < e.soSinhVienMax)
                                ).map(
                                    pItem =>
                                        <div className="col-md-3" onClick={() => this.clickPhong(pItem, pItem.KhuNha)}>
                                            <Card className="ten-phong"><center>Phòng {pItem.tenPhong}</center></Card>
                                        </div>
                                ) : null}
                            </div>
                        </div>
                ) : null}
                <Modal isOpen={this.state.phong} style={{ width: "40em" }}>
                    <ModalHeader>
                        <center>
                            <b>Phòng {this.state.phong.tenPhong}</b>
                        </center>
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md="6">
                                <p>
                                    <b> Loại phòng: </b>
                                    {this.state.phong.loaiPhong}
                                </p>
                                <p>
                                    <b> Số sinh viên hiện tại: </b>
                                    {this.state.phong.soSinhVien}
                                </p>
                                <p>
                                    <b> Số sinh viên tối đa: </b>
                                    {this.state.phong.soSinhVienMax}
                                </p>
                            </Col>
                            <Col md="6">
                                <p>
                                    <b> Khu: </b>
                                    {this.state.khuNha.tenKhuNha}
                                </p>
                                <p>
                                    <b>Địa chỉ: </b>
                                    {this.state.khuNha.diaChi}
                                </p>
                                <p>
                                    <b> Người quản lý: </b>
                                    {this.state.khuNha.quanLyKhuNha}
                                </p>
                                <p>
                                    <b> Số điện thoại: </b>
                                    {this.state.khuNha.SDT}
                                </p>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.sinhVien.tonTaiSV ?
                            <p>Bạn không thể đăng kí phòng này</p>
                            : null
                        }
                        <br/>
                        <Button outline color="primary" onClick={() => this.clickPhong("", "")}>Thoát</Button>
                        {!this.props.sinhVien.tonTaiSV ?
                            <Button outline color="primary" onClick={this.clickDangKiPhong}>Đăng kí phòng</Button>
                            : null
                        }
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        khuNha: state.khuNha,
        phong: state.phong,
        sinhVien: state.sinhVien
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacKhuNha: () => dispatch(hienThiCacKhuNha()),
        hienThiCacPhong: () => dispatch(hienThiCacPhong()),
        kiemTraSinhVienThuocKTX: () => dispatch(kiemTraSinhVienThuocKTX()),
        dangKiPhong: (phongId, date) => dispatch(dangKiPhong(phongId, date))
    }
}

export default connect(mapStatetoProps, mapActiontoProps)(DanhSachPhongTrong);