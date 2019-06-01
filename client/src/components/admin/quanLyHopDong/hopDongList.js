import React, { Component } from 'react';
import dateFormat from 'dateformat';
import DateTimePicker from 'react-datetime-picker';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../style/khuNha.css';
import { thayDoiThongTinHopDong, hienThiCacHopDong } from '../../../actions/quanLyDangKiAction';
import { themHoaDonHopDong } from '../../../actions/quanLyHoaDonAction';

class HopDongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiHienThi: "Chưa thanh toán",
            sinhVien: "",
            khuNha: "",
            phong: "",
            modalThanhToan: false,
            sinhVienDangKi: "",
            phongDangKi: "",
            khuDangKi: "",
            hopDongDangKi: "",
            nguoiThucHien: "",
            id: ""
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacHopDong();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.quanLyDangKi.callapidone && nextProps.quanLyDangKi.callapidone != this.props.quanLyDangKi.callapidone) {
            this.props.hienThiCacHopDong()
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

    xemThongTinPhong = (khu, phong) => {
        this.setState({
            khuNha: khu,
            phong: phong
        })
    }

    xacNhanThanhToan = (khu, phong, sinhVien, hopDong) => {
        this.setState({
            khuDangKi: khu,
            phongDangKi: phong,
            sinhVienDangKi: sinhVien,
            hopDongDangKi: hopDong,
            modalThanhToan: !this.state.modalThanhToan
        })
    }

    thayDoiNguoiThucHien = event => {
        this.setState({
            nguoiThucHien: event.target.value
        })
    }

    taoHoaDon = () => {
        this.props.themHoaDonHopDong(this.state.hopDongDangKi.hopDongId, "Thêm hợp đồng", this.state.hopDongDangKi.tongSoTien, localStorage.getItem("name"), dateFormat(new Date, "yyyy/mm/dd"));
        this.props.thayDoiThongTinHopDong(this.state.hopDongDangKi.hopDongId, "Đã thanh toán");
        this.setState({
            khuDangKi: "",
            phongDangKi: "",
            sinhVienDangKi: "",
            hopDongDangKi: "",
            modalThanhToan: !this.state.modalThanhToan
        })
    }

    clickHuyHopDong = (id) => {
        this.setState({
            id: id
        })
    }

    xacNhanHuyHopDong = () => {
        this.props.thayDoiThongTinHopDong(this.state.id, "Đã hủy");
        this.setState({
            id: ""
        })
    }

    render() {
        return (
            <div className="row khu-nha">
                <div className="col-md-6" style={{ marginTop: "1em", marginRight: "0" }}>
                    <b for="object">Loại đơn: </b>
                    <select onChange={this.chonTrangThai} value={this.state.trangThaiHienThi}>
                        <option value="Chưa thanh toán">Chưa thanh toán</option>
                        <option value="Đã thanh toán">Đã thanh toán</option>
                        <option value="Đã hủy">Đã hủy</option>
                        <option value="Đã kết thúc">Đã kết thúc</option>
                    </select>
                </div>

                <div className="row">
                    {this.state.trangThaiHienThi == "Chưa thanh toán" ?
                        <table className="table">
                            <tr>
                                <th style={{ width: "5%" }}>STT</th>
                                <th style={{ width: "10%" }}>Tên sinh viên</th>
                                <th style={{ width: "10%" }}>Phòng đăng kí</th>
                                <th style={{ width: "10%" }}>Khu</th>
                                <th style={{ width: "10%" }}>Ngày bắt đầu</th>
                                <th style={{ width: "10%" }}>Ngày kết thúc</th>
                                <th style={{ width: "10%" }}>Số tiền thu</th>
                                <th style={{ width: "15%" }}>Tình trạng thanh toán</th>
                                <th style={{ width: "10%" }}>Xác nhận</th>
                                <th style={{ width: "5%" }}>Hủy</th>
                            </tr>
                            {this.props.quanLyDangKi.HopDongs.length > 0 ? this.props.quanLyDangKi.HopDongs.filter(
                                e => e.tinhTrangThanhToan == this.state.trangThaiHienThi
                            ).map(
                                (item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td onClick={() => this.xemThongTinSinhVien(item.SinhVien)} style={{ cursor: "pointer" }}>
                                            {item.SinhVien.tenSinhVien}
                                        </td>
                                        <td onClick={() => this.xemThongTinPhong(item.Phong.KhuNha, item.Phong)} style={{ cursor: "pointer" }}>
                                            {item.Phong.tenPhong}
                                        </td>
                                        <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                        <td>{dateFormat(item.ngayBatDau, "dd/mm/yyyy")}</td>
                                        <td>{dateFormat(item.ngayKetThuc, "dd/mm/yyyy")}</td>
                                        <td>{item.tongSoTien * 1000} đồng</td>
                                        <td>{item.tinhTrangThanhToan}</td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.xacNhanThanhToan(item.Phong.KhuNha, item.Phong, item.SinhVien, item)}>
                                            <i class="far fa-circle"></i>
                                        </td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.clickHuyHopDong(item.hopDongId)}>
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
                                <th style={{ width: "10%" }}>Tên sinh viên</th>
                                <th style={{ width: "10%" }}>Phòng đăng kí</th>
                                <th style={{ width: "10%" }}>Khu</th>
                                <th style={{ width: "15%" }}>Ngày bắt đầu</th>
                                <th style={{ width: "15%" }}>Ngày kết thúc</th>
                                <th style={{ width: "15%" }}>Số tiền thu</th>
                                <th style={{ width: "15%" }}>Tình trạng hợp đồng</th>
                                {this.state.trangThaiHienThi == "Đã hủy" ?
                                    <th style={{ width: "10%" }}>Tạo mới</th>
                                    : null
                                }
                            </tr>
                            {this.props.quanLyDangKi.HopDongs.length > 0 ? this.props.quanLyDangKi.HopDongs.filter(
                                e => e.tinhTrangThanhToan == this.state.trangThaiHienThi
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
                                        <td>{dateFormat(item.ngayBatDau, "dd/mm/yyyy")}</td>
                                        <td>{dateFormat(item.ngayKetThuc, "dd/mm/yyyy")}</td>
                                        <td>{item.tongSoTien * 1000} đồng</td>
                                        <td>{item.tinhTrangThanhToan}</td>

                                        {this.state.trangThaiHienThi == "Đã hủy" ?
                                            <td>
                                                <i className="fas fa-plus-circle"></i>
                                            </td>
                                            : null
                                        }
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
                    <Modal isOpen={this.state.modalThanhToan} >
                        <ModalHeader>
                            <b>Xác nhận thanh toán</b>
                        </ModalHeader>
                        <ModalBody>
                            <b>Tên sinh viên: </b>{this.state.sinhVienDangKi.tenSinhVien}
                            <hr />
                            <b>Phòng: </b> {this.state.phongDangKi.tenPhong}
                            <hr />
                            <b>Khu: </b> {this.state.khuDangKi.tenKhuNha}
                            <hr />
                            <b>Ngày bắt đầu: </b> {dateFormat(this.state.hopDongDangKi.ngayBatDau, "dd/mm/yyyy")}
                            <hr />
                            <b>Ngày kết thúc: </b> {dateFormat(this.state.hopDongDangKi.ngayKetThuc, "dd/mm/yyyy")}
                            <hr />
                            <b>Số tiền cần thanh toán </b> (đơn vị: nghìn đồng): {this.state.hopDongDangKi.tongSoTien * 1000} đồng
                            <hr />
                            <b>Người thu: </b> {localStorage.getItem('name')}
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.xacNhanThanhToan("", "", "", "")}>Thoát</Button>
                            <Button outline color="primary" onClick={this.taoHoaDon}>Tạo hóa đơn</Button>
                        </ModalFooter>
                    </Modal>

                    {/* Hủy hợp đồng */}
                    <Modal isOpen={this.state.id}>
                        <ModalHeader>
                            <b>Hủy hợp đồng</b>
                        </ModalHeader>
                        <ModalBody>
                            Bạn có chắc chắn muốn hủy hợp đồng này
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.clickHuyHopDong("")}>Thoát</Button>
                            <Button outline color="primary" onClick={this.xacNhanHuyHopDong}>Hủy</Button>
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
        hienThiCacHopDong: () => dispatch(hienThiCacHopDong()),
        thayDoiThongTinHopDong: (id, trangThai) => dispatch(thayDoiThongTinHopDong(id, trangThai)),
        themHoaDonHopDong: (id, noiDung, tongTien, NguoiThucHien, ngayThucHien) => dispatch(themHoaDonHopDong(id, noiDung, tongTien, NguoiThucHien, ngayThucHien))
    }
}

export default withRouter(connect(mapStatetoProps, mapActiontoProps)(HopDongList));