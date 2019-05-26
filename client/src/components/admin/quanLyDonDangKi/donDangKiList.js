import React, { Component } from 'react';
import dateFormat from 'dateformat';
import DateTimePicker from 'react-datetime-picker';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../style/khuNha.css';
import { hienThiCacDonDangKi, thayDoiTrangThaiDonDangKi, taoHopDong } from '../../../actions/quanLyDangKiAction';

class DonDangKiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiHienThi: "Đang chờ xử lý",
            trangThai: "",
            sinhVien: "",
            phong: "",
            khuNha: "",
            khuDangKi: "",
            phongDangKi: "",
            sinhVienDangKi: "",
            idDangKi: "",
            ngayBatDau: new Date,
            ngayBatDauKhongHopLe: false,
            ngayKetThuc: new Date,
            ngayKetThucKhongHopLe: false,
            tongSoTien: "",
            modalHopDong: false,
            modalHuyDangKi: false,
            modalHuyDon: false,
            id: ""
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacDonDangKi()
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.quanLyDangKi.taoHopDong && (nextProps.quanLyDangKi.taoHopDong != this.props.quanLyDangKi.taoHopDong)) {
            this.props.hienThiCacDonDangKi();
            this.props.history.push('/admin/home');
        } else if (nextProps.quanLyDangKi.thayDoiTrangThaiDon && (nextProps.quanLyDangKi.thayDoiTrangThaiDon != this.props.quanLyDangKi.thayDoiTrangThaiDon)) {
            this.props.hienThiCacDonDangKi();
        }
    }

    chonTrangThai = event => {
        this.setState({
            trangThaiHienThi: event.target.value
        })
    }

    xemThongTinSinhVien = (sinhVien) => {
        this.setState({
            sinhVien: sinhVien
        })
    }

    xemThongTinPhong = (phong, khuNha) => {
        this.setState({
            phong: phong,
            khuNha: khuNha
        });
    }

    chapNhanDangKi = (khu, phong, sinhVien, id) => {
        if (phong.soSinhVien < phong.soSinhVienMax) {
            this.setState({
                khuDangKi: khu,
                phongDangKi: phong,
                sinhVienDangKi: sinhVien,
                idDangKi: id,
                modalHopDong: true
            });
        } else {
            this.setState({
                modalHuyDangKi: true,
                idDangKi: id
            })
        }
    }

    thayDoiNgayBatDau = (ngayBatDau) => {
        this.setState({
            ngayKetThucKhongHopLe: false,
            ngayBatDauKhongHopLe: false
        });
        var now = dateFormat(new Date, "yyyy/mm/dd");
        if (now > dateFormat(ngayBatDau, "yyyy/mm/dd")) {
            this.setState({
                ngayBatDauKhongHopLe: true
            })
            this.setState({ ngayBatDau });
        } else {
            this.setState({ ngayBatDau });
        }
    }

    thayDoiNgayKetThuc = (ngayKetThuc) => {
        this.setState({
            ngayKetThucKhongHopLe: false,
            ngayBatDauKhongHopLe: false
        })
        var ngayBatDau = dateFormat(this.state.ngayBatDau, "yyyy/mm/dd");
        var ngayKT = dateFormat(ngayKetThuc, "yyyy/mm/dd");
        if (ngayBatDau > ngayKT) {
            this.setState({
                ngayKetThucKhongHopLe: true
            })
            this.setState({ ngayKetThuc });
        } else {
            this.setState({ ngayKetThuc });
        }
    }

    thayDoiTongSoTien = (event) => {
        this.setState({
            tongSoTien: event.target.value
        })
    }

    taoHopDong = () => {
        var ngayBatDau = dateFormat(this.state.ngayBatDau, "yyyy/mm/dd");
        var ngayKetThuc = dateFormat(this.state.ngayKetThuc, "yyyy/mm/dd");
        if (ngayBatDau > ngayKetThuc) {
            this.setState({
                ngayKetThucKhongHopLe: true
            })
        } else {
            this.props.thayDoiTrangThaiDonDangKi(this.state.idDangKi, "Đã chấp nhận");
            this.props.taoHopDong(ngayBatDau, ngayKetThuc, this.state.tongSoTien, this.state.sinhVienDangKi.sinhVienId, this.state.phongDangKi.phongId);
            this.setState({
                khuDangKi: "",
                phongDangKi: "",
                sinhVienDangKi: "",
                idDangKi: "",
                ngayBatDau: new Date,
                ngayKetThuc: new Date,
                ngayKetThucKhongHopLe: false,
                tongSoTien: "",
                modalHopDong: false
            })
        }
    }

    huyTaoHopDong = () => {
        this.setState({
            modalHopDong: false,
            khuDangKi: "",
            phongDangKi: "",
            sinhVienDangKi: "",
            idDangKi: "",
            ngayBatDau: new Date,
            ngayKetThuc: new Date,
            ngayKetThucKhongHopLe: false,
            tongSoTien: ""
        })
    }

    clickHuyDangKi = (id) => {
        this.setState({
            id: id,
            modalHuyDon: true
        })
    }

    huyDonDangKi = () => {
        if (this.state.modalHuyDangKi) {
            this.props.thayDoiTrangThaiDonDangKi(this.state.idDangKi, "Không chấp nhận");
            this.setState({
                idDangKi: "",
                id: "",
                modalHuyDon: false,
                modalHuyDangKi: false,
                khuDangKi: "",
                phongDangKi: "",
                sinhVienDangKi: ""
            })
        } else {
            this.props.thayDoiTrangThaiDonDangKi(this.state.id, "Không chấp nhận");
            this.setState({
                idDangKi: "",
                id: "",
                modalHuyDon: false,
                modalHuyDangKi: false,
                khuDangKi: "",
                phongDangKi: "",
                sinhVienDangKi: ""
            })
        }
    }

    thoatHuyDonDangKi = () => {
        this.setState({
            idDangKi: "",
            id: "",
            modalHuyDon: false,
            modalHuyDangKi: false,
            khuDangKi: "",
            phongDangKi: "",
            sinhVienDangKi: ""
        });
    }

    render() {
        return (
            <div className="row khu-nha">
                <div className="col-md-6" style={{ marginTop: "1em", marginRight: "0" }}>
                    <b for="object">Loại đơn: </b>
                    <select onChange={this.chonTrangThai} value={this.state.trangThaiHienThi}>
                        <option value="Đang chờ xử lý">Đang chờ xử lý</option>
                        <option value="Đã chấp nhận">Đã chấp nhận</option>
                        <option value="Không chấp nhận">Không chấp nhận</option>
                    </select>
                </div>

                <div className="row">
                    {this.state.trangThaiHienThi == "Đang chờ xử lý" ?
                        <table className="table">
                            <tr>
                                <th style={{ width: "5%" }}>STT</th>
                                <th style={{ width: "15%" }}>Tên sinh viên</th>
                                <th style={{ width: "15%" }}>Phòng đăng kí</th>
                                <th style={{ width: "10%" }}>Khu</th>
                                <th style={{ width: "15%" }}>Ngày đăng kí</th>
                                <th style={{ width: "15%" }}>Tình trạng đăng kí</th>
                                <th style={{ width: "10%" }}>Chấp nhận</th>
                                <th style={{ width: "5%" }}>Hủy</th>
                            </tr>
                            {this.props.quanLyDangKi.DonDangKis.length > 0 ? this.props.quanLyDangKi.DonDangKis.filter(
                                e => e.tinhTrangDangKi == this.state.trangThaiHienThi
                            ).map(
                                (item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td onClick={() => this.xemThongTinSinhVien(item.SinhVien)} style={{ cursor: "pointer" }}>
                                            {item.SinhVien.tenSinhVien}
                                        </td>
                                        <td onClick={() => this.xemThongTinPhong(item.Phong, item.Phong.KhuNha)} style={{ cursor: "pointer" }}>
                                            {item.Phong.tenPhong}
                                        </td>
                                        <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                        <td>{dateFormat(item.ngayDangKi, "dd/mm/yyyy")}</td>
                                        <td>{item.tinhTrangDangKi}</td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.chapNhanDangKi(item.Phong.KhuNha, item.Phong, item.SinhVien, item.donDangKiId)}>
                                            <i className="fas fa-check-circle"></i>
                                        </td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.clickHuyDangKi(item.donDangKiId)}>
                                            <i className="fas fa-minus-circle"></i>
                                        </td>
                                    </tr>
                            ) : null
                            }

                        </table>
                        :
                        <table className="table">
                            <tr>
                                <th style={{ width: "5%" }}>STT</th>
                                <th style={{ width: "15%" }}>Tên sinh viên</th>
                                <th style={{ width: "15%" }}>Phòng đăng kí</th>
                                <th style={{ width: "10%" }}>Khu</th>
                                <th style={{ width: "15%" }}>Ngày đăng kí</th>
                                <th style={{ width: "15%" }}>Tình trạng đăng kí</th>
                            </tr>
                            {this.props.quanLyDangKi.DonDangKis.length > 0 ? this.props.quanLyDangKi.DonDangKis.filter(
                                e => e.tinhTrangDangKi == this.state.trangThaiHienThi
                            ).map(
                                (item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td onClick={() => this.xemThongTinSinhVien(item.SinhVien)} style={{ cursor: "pointer" }}>
                                            {item.SinhVien.tenSinhVien}
                                        </td>
                                        <td onClick={() => this.xemThongTinPhong(item.Phong, item.Phong.KhuNha)} style={{ cursor: "pointer" }}>
                                            {item.Phong.tenPhong}
                                        </td>
                                        <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                        <td>{dateFormat(item.ngayDangKi, "dd/mm/yyyy")}</td>
                                        <td>{item.tinhTrangDangKi}</td>
                                    </tr>
                            ) : null
                            }
                        </table>
                    }
                    {/* Thông tin sing viên */}
                    <Modal isOpen={this.state.sinhVien} toggle={() => this.xemThongTinSinhVien("")} >
                        <ModalHeader>
                            <b>Thông tin sinh viên </b>
                        </ModalHeader>
                        <ModalBody>
                            <b>Tên sinh viên: </b> {this.state.sinhVien.tenSinhVien}
                            <hr />
                            <b>Email: </b> {this.state.sinhVien.emailSinhVien}
                            <hr />
                            <b>Giới tính: </b> {this.state.sinhVien.gioiTinh}
                        </ModalBody>
                    </Modal>

                    {/* Thông tin phòng  */}
                    <Modal isOpen={this.state.phong} toggle={() => this.xemThongTinPhong("", "")}>
                        <ModalHeader>
                            <b>Thông tin phòng</b>
                        </ModalHeader>
                        <ModalBody>
                            <b>Tên phòng: </b>{this.state.phong.tenPhong}
                            <hr />
                            <b>Loại phòng: </b>{this.state.phong.loaiPhong}
                            <hr />
                            <b>Số sinh viên tối đa: </b>{this.state.phong.soSinhVienMax}
                            <hr />
                            <b>Số sinh viên hiện tại: </b>{this.state.phong.soSinhVien}
                            <hr />
                            <b>Khu: </b>{this.state.khuNha.tenKhuNha}
                            <hr />
                            <b>Địa chỉ: </b>{this.state.khuNha.diaChi}
                            <hr />
                            <b>Người quản lý: </b>{this.state.khuNha.quanLyKhuNha}
                            <hr />
                            <b>Số điện thoại: </b>{this.state.khuNha.SDT}
                        </ModalBody>
                    </Modal>

                    {/* Tạo hợp đồng  */}
                    <Modal isOpen={this.state.modalHopDong} >
                        <ModalHeader>
                            <b>Tạo hợp đồng mới</b>
                        </ModalHeader>
                        <ModalBody>
                            <b>Tên sinh viên: </b> {this.state.sinhVienDangKi.tenSinhVien}
                            <hr />
                            <b>Phòng: </b> {this.state.phongDangKi.tenPhong}
                            <hr />
                            <b>Khu: </b> {this.state.khuDangKi.tenKhuNha}
                            <hr />
                            <b>Ngày bắt đầu: </b><DateTimePicker value={this.state.ngayBatDau} onChange={this.thayDoiNgayBatDau} />
                            {this.state.ngayBatDauKhongHopLe ?
                                <p style={{ color: "red" }} >
                                    <i className="fas fa-exclamation-circle"></i>{" "} Ngày bắt đầu không hợp lệ
                                </p>
                                : null
                            }
                            <hr />
                            <b>Ngày kết thúc: </b><DateTimePicker value={this.state.ngayKetThuc} onChange={this.thayDoiNgayKetThuc} />
                            {this.state.ngayKetThucKhongHopLe ?
                                <p style={{ color: "red" }} >
                                    <i className="fas fa-exclamation-circle"></i>{" "} Ngày kết thúc không hợp lệ
                                </p>
                                : null
                            }
                            <hr />
                            <b>Số tiền cần thanh toán </b> (đơn vị: nghìn đồng):
                            <Input type="number" value={this.state.tongSoTien} onChange={this.thayDoiTongSoTien}></Input>
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={this.huyTaoHopDong}>Thoát</Button>
                            <Button outline color="primary" onClick={this.taoHopDong}>Tạo</Button>
                        </ModalFooter>
                    </Modal>

                    {/* Không thể tạo hợp đồng */}
                    <Modal isOpen={this.state.modalHuyDangKi} >
                        <ModalHeader>
                            <b>Không thể tạo hợp đồng mới</b>
                        </ModalHeader>
                        <ModalBody>
                            <p>Phòng đã đầy, vui lòng hủy đơn đăng kí này</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={this.thoatHuyDonDangKi}>Thoát</Button>
                            <Button outline color="primary" onClick={this.huyDonDangKi}>Hủy đơn</Button>
                        </ModalFooter>
                    </Modal>

                    {/* Hủy đơn đăng kí */}
                    <Modal isOpen={this.state.modalHuyDon}>
                        <ModalHeader>
                            <b>Hủy đơn đăng kí</b>
                        </ModalHeader>
                        <ModalBody>
                            Bạn có chắc chắn muốn hủy đơn này
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={this.thoatHuyDonDangKi}>Thoát</Button>
                            <Button outline color="primary" onClick={this.huyDonDangKi}>Hủy đơn</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        quanLyDangKi: state.quanLyDangKi
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacDonDangKi: () => dispatch(hienThiCacDonDangKi()),
        thayDoiTrangThaiDonDangKi: (id, trangThai) => dispatch(thayDoiTrangThaiDonDangKi(id, trangThai)),
        taoHopDong: (ngayBatDau, ngayKetThuc, tongSoTien, sinhVienId, phongId) => dispatch(taoHopDong(ngayBatDau, ngayKetThuc, tongSoTien, sinhVienId, phongId))
    }
}

export default withRouter(connect(mapStatetoProps, mapActiontoProps)(DonDangKiList));