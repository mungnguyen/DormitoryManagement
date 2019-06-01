import React, { Component } from 'react';
import { Button, Fade, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { hienThiCacKhuNha } from '../../../actions/khuNhaActions';
import { hienThiCacPhong } from '../../../actions/phongAction';
import { hienThiCacHopDong } from '../../../actions/quanLyDangKiAction';
import '../../../style/khuNha.css';

class SinhVienList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            khuNhaId: "Tất cả các khu nhà",
            phongId: "Tất cả các phòng"
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
        this.props.hienThiCacPhong();
        this.props.hienThiCacHopDong();
    }

    componentWillReceiveProps = (nextProps) => {
        // if (nextProps.phong.callapidone && (nextProps.phong.callapidone != this.props.phong.callapidone)) {
        //     this.props.hienThiCacKhuNha();
        //     this.props.hienThiCacPhong();
        // }
    }

    chonKhuNha = (event) => {
        this.setState({
            khuNhaId: event.target.value,
            phongId: "Tất cả các phòng"
        })
    }

    chonPhong = (event) => {
        this.setState({
            phongId: event.target.value
        })
    }

    render() {
        return (
            <div className="row khu-nha">
                <div className="col-md-6" style={{ marginTop: "1em", marginRight: "0" }}>
                    <b for="object">Khu nhà: </b>
                    {/* <input type="text"  onChange={this.handleChangeType}/> */}
                    <select onChange={this.chonKhuNha}>
                        <option value="Tất cả các khu nhà">Tất cả các khu nhà</option>
                        {this.props.khuNha.KhuNhas.length > 0 ? this.props.khuNha.KhuNhas.map(
                            item =>
                                <option value={item.khuNhaId}>{item.tenKhuNha}</option>
                        ) : null}
                    </select>
                    <br />
                    <Fade in={this.state.khuNhaId != "Tất cả các khu nhà"} tag="div">
                        <b for="object">Phòng:    </b>
                        <select onChange={this.chonPhong}>
                            <option value="Tất cả các phòng">Tất cả các phòng</option>
                            {this.props.phong.Phongs.length > 0 ? this.props.phong.Phongs.filter(
                                e => e.khuNhaId == this.state.khuNhaId
                            ).map(
                                item =>
                                    <option value={item.phongId}>{item.tenPhong}</option>
                            ) : null}
                        </select>
                    </Fade>
                </div>
                <div className="col-md-6">
                    <Button className="add"
                        style={{ cursor: "pointer", marginLeft: "16.1em" }}
                        onClick={this.openModal}
                    >
                        <b>+ Thêm sinh viên</b>
                    </Button>
                </div>

                <div className="row">
                    <table className="table">
                        <tr>
                            <th style={{ width: "5%" }}>STT</th>
                            <th style={{ width: "15%" }}>Tên sinh viên</th>
                            <th style={{ width: "15%" }}>Email</th>
                            <th style={{ width: "10%" }}>Giới tính</th>
                            <th style={{ width: "15%" }}>Phòng</th>
                            <th style={{ width: "15%" }}>Khu</th>
                            <th style={{ width: "10%" }}>Ngày vào</th>
                        </tr>
                        {this.state.khuNhaId == "Tất cả các khu nhà" ? this.props.quanLyDangKi.HopDongs.filter(
                            e => e.tinhTrangThanhToan == "Đã thanh toán"
                        ).map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.SinhVien.tenSinhVien}</td>
                                    <td>{item.SinhVien.emailSinhVien}</td>
                                    <td>{item.SinhVien.gioiTinh}</td>
                                    <td>{item.Phong.tenPhong}</td>
                                    <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                    <td>12/12/2021</td>
                                </tr>
                        )
                            : null}
                        {this.state.khuNhaId != "Tất cả các khu nhà" && this.state.phongId == "Tất cả các phòng" ? this.props.quanLyDangKi.HopDongs.filter(
                            e => e.tinhTrangThanhToan == "Đã thanh toán" && e.Phong.KhuNha.khuNhaId == this.state.khuNhaId
                        ).map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.SinhVien.tenSinhVien}</td>
                                    <td>{item.SinhVien.emailSinhVien}</td>
                                    <td>{item.SinhVien.gioiTinh}</td>
                                    <td>{item.Phong.tenPhong}</td>
                                    <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                    <td>12/12/2021</td>
                                </tr>
                            )
                            :
                            this.props.quanLyDangKi.HopDongs.filter(
                                e => e.tinhTrangThanhToan == "Đã thanh toán" && e.Phong.phongId == this.state.phongId
                            ).map(
                                (item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.SinhVien.tenSinhVien}</td>
                                        <td>{item.SinhVien.emailSinhVien}</td>
                                        <td>{item.SinhVien.gioiTinh}</td>
                                        <td>{item.Phong.tenPhong}</td>
                                        <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                        <td>12/12/2021</td>
                                    </tr>
                            )}
                    </table>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        khuNha: state.khuNha,
        phong: state.phong,
        quanLyDangKi: state.quanLyDangKi
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacKhuNha: () => dispatch(hienThiCacKhuNha()),
        hienThiCacPhong: () => dispatch(hienThiCacPhong()),
        hienThiCacHopDong: () => dispatch(hienThiCacHopDong()),
    }
}

export default connect(mapStatetoProps, mapActiontoProps)(SinhVienList);