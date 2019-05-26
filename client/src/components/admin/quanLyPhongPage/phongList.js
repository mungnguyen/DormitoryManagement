import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { hienThiCacKhuNha } from '../../../actions/khuNhaActions';
import { hienThiCacPhong, themPhong, suaPhong, xoaPhong } from '../../../actions/phongAction';
import '../../../style/khuNha.css';

class PhongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            tenPhong: "",
            loaiPhong: "Nam",
            tenKhuNha: "",
            idKhuNha: "",
            soSVMax: "8",
            themMoi: false,
            openAddModal: false,
            idDel: "",
            tenKhuNhaChoose: "Tất cả các khu nhà",
            selectNam: true
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
        this.props.hienThiCacPhong();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.phong.callapidone && (nextProps.phong.callapidone != this.props.phong.callapidone)) {
            this.props.hienThiCacKhuNha();
            this.props.hienThiCacPhong();
        }
    }

    chonKhuNha = (event) => {
        this.setState({
            tenKhuNhaChoose: event.target.value
        })
    }

    openModal = () => {
        if (!this.state.openAddModal)
            this.setState({
                openAddModal: !this.state.openAddModal,
                themMoi: true
            })
        else {
            this.setState({
                openAddModal: !this.state.openAddModal,
                themMoi: false,
                tenPhong: "",
                loaiPhong: "Nam",
                soSVMax: "8",
                tenKhuNha: "",
                idKhuNha: "",
                idDel: "",
                selectNam: true
            })
        }
    }

    thayDoiTenPhong = (event) => {
        this.setState({
            tenPhong: event.target.value
        });
    }

    chonGioiTinhNam = () => {
        this.setState({
            selectNam: true
        })
    }

    chonGioiTinhNu = () => {
        this.setState({
            selectNam: false
        })
    }

    thayDoiLoaiPhong = (event) => {
        this.setState({
            loaiPhong: event.target.value
        },
            () => {
                if (this.state.loaiPhong == "Nam") {
                    this.setState({
                        selectNam: true
                    })
                } else if (this.state.loaiPhong == "Nữ") {
                    this.setState({
                        selectNam: false
                    })
                }
            }
        );
    }

    thayDoiSoSinhVienMax = event => {
        this.setState({
            soSVMax: event.target.value
        });
    }

    thayDoiKhuNha = event => {
        this.setState({
            idKhuNha: event.target.value
        });
    }

    suaThongTin = (id, tenPhong, loaiPhong, soSVMax, idKhuNha, tenKhuNha) => {
        this.setState({
            id: id,
            tenPhong: tenPhong,
            loaiPhong: loaiPhong,
            soSVMax: soSVMax,
            idKhuNha: idKhuNha,
            tenKhuNha: tenKhuNha,
            openAddModal: true
        })
    }

    thayDoiPhong = () => {
        if (this.state.themMoi) {
            if (this.state.tenPhong && this.state.loaiPhong && this.state.soSVMax && this.state.idKhuNha) {
                this.props.themPhong(this.state.tenPhong, this.state.loaiPhong, this.state.soSVMax, this.state.idKhuNha);
                this.openModal();
            }
        } else {
            if (this.state.id && this.state.tenPhong && this.state.loaiPhong && this.state.soSVMax && this.state.idKhuNha) {
                this.props.suaPhong(this.state.id, this.state.tenPhong, this.state.loaiPhong, this.state.soSVMax, this.state.idKhuNha);
                this.openModal();
            }
        }
    }

    openDeleteModal = (id) => {
        this.setState({
            idDel: id
        })
    }

    clickXoaPhong = () => {
        if (this.state.idDel) {
            this.props.xoaPhong(this.state.idDel);
            this.setState({
                idDel: ""
            });
        }
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
                                <option value={item.name}>{item.tenKhuNha}</option>
                        ) : null}
                    </select>
                </div>
                <div className="col-md-6">
                    <Button className="add"
                        style={{ cursor: "pointer", marginLeft: "16.1em" }}
                        onClick={this.openModal}
                    >
                        <b>+ Thêm phòng</b>
                    </Button>
                </div>

                <div className="row">
                    <table className="table">
                        <tr>
                            <th style={{ width: "5%" }}>STT</th>
                            <th style={{ width: "15%" }}>Tên phòng</th>
                            <th style={{ width: "15%" }}>Loại phòng</th>
                            <th style={{ width: "10%" }}>Khu</th>
                            <th style={{ width: "15%" }}>Số sinh viên tối đa</th>
                            <th style={{ width: "15%" }}>Số sinh viên hiện tại</th>
                            <th style={{ width: "10%" }}>Chỉnh sửa</th>
                            <th style={{ width: "5%" }}>Xóa</th>
                        </tr>

                        {this.props.phong.Phongs.length > 0 && this.state.tenKhuNhaChoose == "Tất cả các khu nhà" ? this.props.phong.Phongs.map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.tenPhong}</td>
                                    <td>{item.loaiPhong}</td>
                                    <td>{item.KhuNha.tenKhuNha}</td>
                                    <td>{item.soSinhVienMax}</td>
                                    <td>{item.soSinhVien}</td>
                                    <td onClick={() => this.suaThongTin(item.phongId, item.tenPhong, item.loaiPhong, item.soSinhVienMax, item.KhuNha.khuNhaId, item.KhuNha.tenKhuNha)}>
                                        <span>
                                            <i className="far fa-edit"></i>
                                        </span>
                                    </td>
                                    <td>
                                        <span onClick={() => this.openDeleteModal(item.phongId)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </span>
                                    </td>
                                </tr>

                        ) : this.props.phong.Phongs.filter(
                            e => e.KhuNha.tenKhuNha == this.state.tenKhuNhaChoose
                        ).map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.tenPhong}</td>
                                    <td>{item.loaiPhong}</td>
                                    <td>{item.KhuNha.tenKhuNha}</td>
                                    <td>{item.soSinhVienMax}</td>
                                    <td>{item.soSinhVien}</td>
                                    <td onClick={() => this.suaThongTin(item.phongId, item.tenPhong, item.loaiPhong, item.soSinhVienMax, item.KhuNha.khuNhaId, item.KhuNha.tenKhuNha)}>
                                        <span>
                                            <i className="far fa-edit"></i>
                                        </span>
                                    </td>
                                    <td onClick={() => this.openDeleteModal(item.phongId)}>
                                        <span>
                                            <i className="fas fa-trash-alt"></i>
                                        </span>
                                    </td>
                                </tr>
                        )}
                    </table>


                    <Modal isOpen={this.state.openAddModal} >
                        <ModalHeader>
                            {this.state.themMoi ?
                                <b>Thêm một phòng mới</b>
                                :
                                <b>Sửa thông tin phòng</b>
                            }
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <i>Tên phòng:</i>
                                <Input type="text"
                                    value={this.state.tenPhong}
                                    onChange={this.thayDoiTenPhong}>
                                </Input>
                                <br />
                                <i>Loại Phòng: </i>
                                <select value={this.state.loaiPhong} onChange={this.thayDoiLoaiPhong}>
                                    {this.state.loaiPhong == "Nam" ?
                                        <option value="Nam">Nam</option>
                                        :
                                        <option value="Nữ">Nữ</option>
                                    }
                                    {this.state.loaiPhong != "Nam" ?
                                        <option value="Nam">Nam</option>
                                        :
                                        <option value="Nữ">Nữ</option>
                                    }
                                </select>

                                <br />
                                <br />
                                <i>Số sinh viên tối đa:</i>
                                <Input type="text"
                                    value={this.state.soSVMax}
                                    onChange={this.thayDoiSoSinhVienMax}
                                ></Input>
                                <br />
                                <i>Khu: </i>
                                {this.state.themMoi ?
                                    <select onChange={this.thayDoiKhuNha}>
                                        {this.props.khuNha.KhuNhas ? this.props.khuNha.KhuNhas.map(
                                            item =>
                                                <option value={item.khuNhaId}>{item.tenKhuNha}</option>
                                        ) : null}
                                    </select>
                                    :
                                    <select onChange={this.thayDoiKhuNha}>
                                        <option value={this.state.idKhuNha}>{this.state.tenKhuNha}</option>
                                        {this.props.khuNha.KhuNhas ? this.props.khuNha.KhuNhas.filter(
                                            e => e.khuNhaId != this.state.idKhuNha
                                        ).map(
                                            item =>
                                                <option value={item.khuNhaId}>{item.tenKhuNha}</option>
                                        ) : null}
                                    </select>}
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={this.openModal}>Cancel</Button>
                            <Button outline color="primary" onClick={this.thayDoiPhong}>Ok</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.idDel} >
                        <ModalBody>
                            Bạn chắc chắn muốn xóa phòng này?
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.openDeleteModal("")}>Cancel</Button>
                            <Button outline color="primary" onClick={this.clickXoaPhong}>Ok</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        khuNha: state.khuNha,
        phong: state.phong
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacKhuNha: () => dispatch(hienThiCacKhuNha()),
        hienThiCacPhong: () => dispatch(hienThiCacPhong()),
        themPhong: (tenPhong, loaiPhong, soSVMax, idKhuNha) => dispatch(themPhong(tenPhong, loaiPhong, soSVMax, idKhuNha)),
        suaPhong: (id, tenPhong, loaiPhong, soSVMax, idKhuNha) => dispatch(suaPhong(id, tenPhong, loaiPhong, soSVMax, idKhuNha)),
        xoaPhong: id => dispatch(xoaPhong(id))
    }
}

export default connect(mapStatetoProps, mapActiontoProps)(PhongList);