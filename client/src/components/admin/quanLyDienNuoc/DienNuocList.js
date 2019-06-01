import React, { Component } from 'react';
import { Button, Fade, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input } from 'reactstrap';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { hienThiCacKhuNha } from '../../../actions/khuNhaActions';
import { hienThiCacPhong } from '../../../actions/phongAction';
import { hienThiCacHoaDonDienNuoc, taoDienNuoc, thayDoiThongTinDienNuoc } from '../../../actions/quanLyDienNuocAction';
import { themHoaDonDienNuoc } from '../../../actions/quanLyHoaDonAction';
import '../../../style/khuNha.css';

class DienNuocList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            khuNhaId: "Tất cả các khu nhà",
            phongId: "Tất cả các phòng",
            tinhTrang: "Chưa thanh toán",
            themHoaDon: false,
            khuId: "",
            phongID: "",
            chiSoCu: "",
            chiSoCuKhongHopLe: false,
            chiSoMoi: "",
            chiSoMoiKhongHopLe: false,
            giaDien: "",
            giaDienKhongHopLe: false,
            modalThanhToan: false,
            khu: "",
            phong: "",
            hoaDon: "",
            id: ""
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
        this.props.hienThiCacPhong();
        this.props.hienThiCacHoaDonDienNuoc();
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.dienNuoc.taoDienNuoc && (nextProps.dienNuoc.taoDienNuoc != this.props.dienNuoc.taoDienNuoc)) {
            this.props.hienThiCacHoaDonDienNuoc();
        } else if (nextProps.dienNuoc.thayDoiTrangThaiDon && (nextProps.dienNuoc.thayDoiTrangThaiDon != this.props.dienNuoc.thayDoiTrangThaiDon)) {
            this.props.hienThiCacHoaDonDienNuoc();
        }
        
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

    themKhuNha = (event) => {
        this.setState({
            khuId: event.target.value
        })
    }

    themPhong = (event) => {
        this.setState({
            phongID: event.target.value
        })
    }

    thayDoiChiSoCu = (event) => {
        this.setState({
            chiSoCu: event.target.value
        },
            () => {
                if (this.state.chiSoCu < 0) {
                    this.setState({
                        chiSoCuKhongHopLe: true,
                        chiSoCuKhongHopLe: false
                    })
                }
            })
    }

    thayDoiChiSoMoi = (event) => {
        this.setState({
            chiSoMoi: event.target.value,
            chiSoMoiKhongHopLe: false
        },
            () => {
                if (this.state.chiSoMoi < this.state.chiSoCu) {
                    this.setState({
                        chiSoMoiKhongHopLe: true
                    })
                }
            }
        )
    }

    thayDoiGiaDien = (event) => {
        this.setState({
            giaDien: event.target.value,
            giaDienKhongHopLe: false
        },
            () => {
                if (this.state.giaDien < 0) {
                    this.setState({
                        giaDienKhongHopLe: true
                    })
                }
            })
    }

    taoHoaDon = () => {
        this.props.taoDienNuoc(dateFormat(new Date, "yyyy/mm"), this.state.chiSoCu, this.state.chiSoMoi, this.state.giaDien, this.state.phongID);
        this.setState({
            themHoaDon: false,
            khuId: "",
            phongID: "",
            chiSoCu: "",
            chiSoCuKhongHopLe: false,
            chiSoMoi: "",
            chiSoMoiKhongHopLe: false,
            giaDien: "",
            giaDienKhongHopLe: false
        })
    }

    themHoaDon = (khuId, phongID) => {
        if (this.state.themHoaDon) {
            this.setState({
                themHoaDon: false,
                khuId: "",
                phongID: "",
                chiSoCu: "",
                chiSoCuKhongHopLe: false,
                chiSoMoi: "",
                chiSoMoiKhongHopLe: false,
                giaDien: "",
                giaDienKhongHopLe: false
            })
        } else {
            this.setState({
                themHoaDon: true,
                khuId: khuId,
                phongID: phongID
            })
        }
    }

    thayDoiTinhTrang = (event) => {
        this.setState({
            tinhTrang: event.target.value
        })
    }

    openModalThanhToan = (khu, phong, hoaDon) => {
        this.setState({
            khu: khu,
            phong: phong,
            hoaDon: hoaDon,
            modalThanhToan: !this.state.modalThanhToan
        })
    }

    xacNhanThanhToan = () => {
        this.props.thayDoiThongTinDienNuoc(this.state.hoaDon.dienNuocId, "Đã thanh toán");
        this.props.themHoaDonDienNuoc(this.state.hoaDon.dienNuocId, "Thêm hóa đơn điện nước",
        this.state.hoaDon.giaDien * (this.state.hoaDon.chiSoMoi - this.state.hoaDon.chiSoCu),
            localStorage.getItem('name'),
            dateFormat(new Date, "yyyy/mm/dd")
        );
        this.setState({
            khu: "",
            phong: "",
            hoaDon: "",
            modalThanhToan: !this.state.modalThanhToan
        })
    }

    clickHuyHoaDon = (id) => {
        this.setState({
            id: id
        })
    } 

    xacNhanHuyHoaDon = () => {
        this.props.thayDoiThongTinDienNuoc(this.state.id, "Đã hủy");
        this.setState({
            id: ""
        })
    }

    render() {
        return (
            <div className="row khu-nha">
                <div className="col-md-6" style={{ marginTop: "1em", marginRight: "0" }}>
                    <b for="object">Tình trạng thanh toán: </b>
                    {/* <input type="text"  onChange={this.handleChangeType}/> */}
                    <select onChange={this.thayDoiTinhTrang}>
                        <option value="Chưa thanh toán">Chưa thanh toán</option>
                        <option value="Đã thanh toán">Đã thanh toán</option>
                        <option value="Đã hủy">Đã hủy</option>

                    </select>
                    <br />
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
                        onClick={() => {
                            var khuId = this.props.khuNha.KhuNhas[0].khuNhaId;
                            var phongID = this.props.phong.Phongs.filter(e => e.khuNhaId == khuId)[0].phongId
                            this.themHoaDon(khuId, phongID)
                        }
                        }
                    >
                        <b>+ Thêm hóa đơn</b>
                    </Button>
                </div>

                <div className="row">
                    <table className="table">
                        <tr>
                            <th style={{ width: "5%" }}>STT</th>
                            <th style={{ width: "10%" }}>Phòng</th>
                            <th style={{ width: "5%" }}>Khu</th>
                            <th style={{ width: "5%" }}>Tháng</th>
                            <th style={{ width: "15%" }}>Chỉ số cũ</th>
                            <th style={{ width: "15%" }}>Chỉ số mới</th>
                            <th style={{ width: "10%" }}>Giá điện</th>
                            <th style={{ width: "10%" }}>Tống số tiền</th>
                            <th style={{ width: "20%" }}>Tình trạng Thanh toán</th>
                            {this.state.tinhTrang == "Chưa thanh toán" ?
                                <th style={{ width: "5%" }}>Xác nhận</th>
                                : null
                            }
                            {this.state.tinhTrang == "Chưa thanh toán" ?
                                <th style={{ width: "5%" }}>Hủy</th>
                                : null
                            }
                        </tr>
                        {this.state.khuNhaId == "Tất cả các khu nhà" ? this.props.dienNuoc.DienNuocs.filter(
                            e => e.tinhTrangThanhToan == this.state.tinhTrang
                        ).map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.Phong.tenPhong}</td>
                                    <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                    <td>{dateFormat(item.thangGhi, "mm/yyyy")}</td>
                                    <td>{item.chiSoCu}</td>
                                    <td>{item.chiSoMoi}</td>
                                    <td>{item.giaDien}</td>
                                    <td>{item.giaDien * (item.chiSoMoi - item.chiSoCu)}</td>
                                    <td>{item.tinhTrangThanhToan}</td>
                                    {this.state.tinhTrang == "Chưa thanh toán" ?
                                        <td style={{ cursor: "pointer" }} onClick={() => this.openModalThanhToan(item.Phong.KhuNha, item.Phong, item)}>
                                            <i class="far fa-circle"></i>
                                        </td>
                                        : null
                                    }
                                    {this.state.tinhTrang == "Chưa thanh toán" ?
                                        <td style={{ cursor: "pointer" }} onClick={() => this.clickHuyHoaDon(item.dienNuocId)}>
                                            <i className="fas fa-minus-circle"></i>
                                        </td>
                                        : null
                                    }
                                </tr>
                        )
                            : null}
                        {this.state.khuNhaId != "Tất cả các khu nhà" && this.state.phongId == "Tất cả các phòng" ? this.props.dienNuoc.DienNuocs.filter(
                            e => e.tinhTrangThanhToan == this.state.tinhTrang && e.Phong.KhuNha.khuNhaId == this.state.khuNhaId
                        ).map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.Phong.tenPhong}</td>
                                    <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                    <td>{dateFormat(item.thangGhi, "mm/yyyy")}</td>
                                    <td>{item.chiSoCu}</td>
                                    <td>{item.chiSoMoi}</td>
                                    <td>{item.giaDien}</td>
                                    <td>{item.giaDien * (item.chiSoMoi - item.chiSoCu)}</td>
                                    <td>{item.tinhTrangThanhToan}</td>
                                    {this.state.tinhTrang == "Chưa thanh toán" ?
                                        <td style={{ cursor: "pointer" }} onClick={() => this.openModalThanhToan(item.Phong.KhuNha, item.Phong, item)}>
                                            <i class="far fa-circle"></i>
                                        </td>
                                        : null
                                    }
                                    {this.state.tinhTrang == "Chưa thanh toán" ?
                                        <td style={{ cursor: "pointer" }} onClick={() => this.clickHuyHoaDon(item.dienNuocId)}>
                                            <i className="fas fa-minus-circle"></i>
                                        </td>
                                        : null
                                    }
                                </tr>
                        )
                            :
                            this.props.dienNuoc.DienNuocs.filter(
                                e => e.tinhTrangThanhToan == this.state.tinhTrang && e.Phong.phongId == this.state.phongId
                            ).map(
                                (item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.Phong.tenPhong}</td>
                                        <td>{item.Phong.KhuNha.tenKhuNha}</td>
                                        <td>{dateFormat(item.thangGhi, "mm/yyyy")}</td>
                                        <td>{item.chiSoCu}</td>
                                        <td>{item.chiSoMoi}</td>
                                        <td>{item.giaDien}</td>
                                        <td>{item.giaDien * (item.chiSoMoi - item.chiSoCu)}</td>
                                        <td>{item.tinhTrangThanhToan}</td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.openModalThanhToan(item.Phong.KhuNha, item.Phong, item)}>
                                            <i class="far fa-circle"></i>
                                        </td>
                                        <td style={{ cursor: "pointer" }} onClick={() => this.clickHuyHoaDon(item.dienNuocId)}>
                                            <i className="fas fa-minus-circle"></i>
                                        </td>
                                    </tr>
                            )}
                    </table>
                    <Modal isOpen={this.state.themHoaDon}>
                        <ModalHeader><b>Thêm hóa đơn mới</b></ModalHeader>
                        <ModalBody>
                            <b for="object">Khu nhà: </b>
                            {/* <input type="text"  onChange={this.handleChangeType}/> */}
                            <select onChange={this.themKhuNha}>
                                {this.props.khuNha.KhuNhas.length > 0 ? this.props.khuNha.KhuNhas.map(
                                    item =>
                                        <option value={item.khuNhaId}>{item.tenKhuNha}</option>
                                ) : null}
                            </select>
                            <br />

                            <b for="object">Phòng: </b>
                            <select onChange={this.themPhong}>
                                {this.props.phong.Phongs.length > 0 ? this.props.phong.Phongs.filter(
                                    e => e.khuNhaId == this.state.khuId
                                ).map(
                                    item =>
                                        <option value={item.phongId}>{item.tenPhong}</option>
                                ) : null}
                            </select>
                            <br />
                            <b>Chỉ số cũ: </b>
                            <Input type="number" onChange={this.thayDoiChiSoCu} value={this.state.chiSoCu} />
                            {this.state.chiSoCuKhongHopLe ?
                                <p style={{ color: "red" }} >
                                    <i className="fas fa-exclamation-circle"></i>{" "} Chỉ số cũ không hợp lệ
                                </p>
                                : null
                            }
                            <b>Chỉ số mới: </b>
                            <Input type="number" onChange={this.thayDoiChiSoMoi} value={this.state.chiSoMoi} />
                            {this.state.chiSoMoiKhongHopLe ?
                                <p style={{ color: "red" }} >
                                    <i className="fas fa-exclamation-circle"></i>{" "} Chỉ số mới không hợp lệ
                                </p>
                                : null
                            }
                            <b>Gía điện (đơn vị: đồng): </b>
                            <Input type="number" onChange={this.thayDoiGiaDien} value={this.state.giaDien} />
                            {this.state.GiaDienKhongHopLe ?
                                <p style={{ color: "red" }} >
                                    <i className="fas fa-exclamation-circle"></i>{" "} Giá điện không hợp lệ
                                </p>
                                : null
                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.themHoaDon("", "")}>Thoát</Button>
                            <Button outline color="primary" onClick={this.taoHoaDon}>Tạo hóa đơn</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modalThanhToan} >
                        <ModalHeader>
                            <b>Xác nhận thanh toán</b>
                        </ModalHeader>
                        <ModalBody>
                            <b>Phòng: </b>{this.state.phong.tenPhong}
                            <hr />
                            <b>Khu: </b> {this.state.khu.tenKhuNha}
                            <hr />
                            <b>Tháng Ghi: </b> {dateFormat(this.state.hoaDon.thangGhi, "mm/yyyy")}
                            <hr />
                            <b>Chỉ số cũ: </b> {this.state.hoaDon.chiSoCu}
                            <hr />
                            <b>Chỉ số mới: </b> {this.state.hoaDon.chiSoMoi}
                            <hr />
                            <b>Giá điện: </b>{this.state.hoaDon.giaDien} đồng/số
                            <hr />
                            <b>Số tiền cần thanh toán: </b> {this.state.hoaDon.giaDien * (this.state.hoaDon.chiSoMoi - this.state.hoaDon.chiSoCu)} đồng
                            <hr />
                            <b>Người thu: </b> {localStorage.getItem('name')}
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.openModalThanhToan("", "", "")}>Thoát</Button>
                            <Button outline color="primary" onClick={this.xacNhanThanhToan}>Xác nhận</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.id}>
                        <ModalHeader>
                            <b>Hủy hóa đơn</b>
                        </ModalHeader>
                        <ModalBody>
                            Bạn có chắc chắn muốn hủy hóa đơn này?
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="primary" onClick={() => this.clickHuyHoaDon("")}>Thoát</Button>
                            <Button outline color="primary" onClick={this.xacNhanHuyHoaDon}>Hủy</Button>
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
        phong: state.phong,
        dienNuoc: state.dienNuoc
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacKhuNha: () => dispatch(hienThiCacKhuNha()),
        hienThiCacPhong: () => dispatch(hienThiCacPhong()),
        hienThiCacHoaDonDienNuoc: () => dispatch(hienThiCacHoaDonDienNuoc()),
        taoDienNuoc: (thangGhi, chiSoCu, chiSoMoi, giaDien, phongId) => dispatch(taoDienNuoc(thangGhi, chiSoCu, chiSoMoi, giaDien, phongId)),
        thayDoiThongTinDienNuoc: (id, trangThai) => dispatch(thayDoiThongTinDienNuoc(id, trangThai)),
        themHoaDonDienNuoc: (id, noiDung, tongTien, nguoiThucHien, ngayThucHien) => dispatch(themHoaDonDienNuoc(id, noiDung, tongTien, nguoiThucHien, ngayThucHien))
    }
}

export default connect(mapStatetoProps, mapActiontoProps)(DienNuocList);