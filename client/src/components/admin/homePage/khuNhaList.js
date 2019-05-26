import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { hienThiCacKhuNha, themKhuNha, suaKhuNha, xoaKhuNha  } from '../../../actions/khuNhaActions';
import '../../../style/khuNha.css';

class KhuNhaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            tenKhuNha: "",
            diaChi: "",
            quanLyKhuNha: "",
            SDT: "",
            openAddModal: false,
            themMoi: false,
            idDel: ""
        }
    }

    componentDidMount = () => {
        this.props.hienThiCacKhuNha();
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.khuNha.callapidone && nextProps.khuNha.callapidone != this.props.khuNha.callapidone) {
            this.props.hienThiCacKhuNha();
        }
    }

    openModal = () => {
        if ( !this.state.openAddModal )
            this.setState({
                openAddModal: !this.state.openAddModal,
                themMoi: true      
            })
        else {
            this.setState({
                openAddModal: !this.state.openAddModal,
                themMoi: false,
                tenKhuNha: "",
                diaChi: "",
                quanLyKhuNha: "",
                SDT: ""
            })
        }
    }

    thayDoiTenKhuNha = (event) => {
        this.setState({
            tenKhuNha: event.target.value
        });
    }

    thayDoiDiaChi = event => {
        this.setState({
            diaChi: event.target.value
        });
    }

    thayDoiQuanLy = event => {
        this.setState({
            quanLyKhuNha: event.target.value
        });
    }

    thayDoiSDT = event => {
        this.setState({
            SDT: event.target.value
        });
    }

    suaThongTin = (id, tenKhuNha, diaChi, quanLyKhuNha, SDT) => {
        this.setState({
            id: id,
            tenKhuNha: tenKhuNha,
            diaChi: diaChi,
            quanLyKhuNha: quanLyKhuNha,
            SDT: SDT,
            openAddModal: true
        })
    }

    thayDoiKhuNha = () => {
        if(this.state.themMoi) {
            if(this.state.tenKhuNha && this.state.diaChi && this.state.quanLyKhuNha && this.state.SDT) {
                this.props.themKhuNha(this.state.tenKhuNha, this.state.diaChi, this.state.quanLyKhuNha, this.state.SDT);
                this.openModal();
            }
        } else {
            if(this.state.id && this.state.tenKhuNha && this.state.diaChi && this.state.quanLyKhuNha && this.state.SDT) {
                this.props.suaKhuNha(this.state.id, this.state.tenKhuNha, this.state.diaChi, this.state.quanLyKhuNha, this.state.SDT);
                this.openModal();
            }
        }
    }

    openDeleteModal = (id) => {
        this.setState({
            idDel: id
        })
    }

    clickXoaKhuNha = () => {
        if(this.state.idDel) {
            this.props.xoaKhuNha(this.state.idDel);
            this.setState({
                idDel: ""
            });
        }
    }

    render() {
        return (
            <div className="row khu-nha">
                <div>
                    <Button className="add" onClick={this.openModal} style={{cursor : "pointer"}}>
                        <b>+ Thêm khu nhà</b>
                    </Button>
                </div>

                <div>
                    <table className="table">
                        <tr>
                            <th>STT</th>
                            <th>Tên khu nhà</th>
                            <th>Địa chỉ</th>
                            <th>Người quản lý</th>
                            <th>Số điện thoại</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa</th>
                        </tr>

                        {this.props.khuNha.KhuNhas ? this.props.khuNha.KhuNhas.map(
                            (item, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>Khu {item.tenKhuNha}</td>
                                    <td>{item.diaChi}</td>
                                    <td>{item.quanLyKhuNha}</td>
                                    <td>{item.SDT}</td>
                                    <td style={{ cursor: "pointer" }}
                                        onClick={() => this.suaThongTin(item.khuNhaId, item.tenKhuNha, item.diaChi, item.quanLyKhuNha, item.SDT)}>
                                        <span>
                                            <i className="far fa-edit"></i>
                                        </span>
                                    </td>
                                    <td style={{ cursor: "pointer"}}
                                        onClick={() => this.openDeleteModal(item.khuNhaId)}
                                    >
                                        <span>
                                            <i className="fas fa-trash-alt"></i>
                                        </span>
                                    </td>
                                </tr>
                        ): null}
                    </table>

                    <Modal isOpen={this.state.openAddModal} >
                        <ModalHeader>
                            {this.state.themMoi ? 
                            <b>Thêm một khu nhà mới</b>
                            :
                            <b>Sửa thông tin khu nhà</b>
                            }
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <i>Tên khu nhà:</i>
                                <Input type="text" 
                                       value={this.state.tenKhuNha} 
                                       onChange={this.thayDoiTenKhuNha}>
                                </Input>
                                <br />
                                <i>Địa chỉ:</i>
                                <Input type="text"
                                       value={this.state.diaChi}
                                       onChange={this.thayDoiDiaChi}
                                ></Input>
                                <br />
                                <i>Người quản lý:</i>
                                <Input type="text"
                                       value={this.state.quanLyKhuNha}
                                       onChange={this.thayDoiQuanLy}
                                ></Input>
                                <br />
                                <i>Số điện thại:</i>
                                <Input type="text"
                                       value={this.state.SDT}
                                       onChange={this.thayDoiSDT}
                                ></Input>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color ="primary" onClick={this.openModal}>Cancel</Button>
                            <Button outline color ="primary" onClick={this.thayDoiKhuNha}>Ok</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.idDel} >
                        <ModalBody>
                            Bạn chắc chắn muốn xóa khu nhà này?
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color = "primary" onClick={() => this.openDeleteModal("")}>Cancel</Button>
                            <Button outline color = "primary" onClick={this.clickXoaKhuNha}>Ok</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        khuNha: state.khuNha
    }
}

const mapActiontoProps = dispatch => {
    return {
        hienThiCacKhuNha: () => dispatch(hienThiCacKhuNha()),
        themKhuNha: (tenKhuNha, diaChi, quanLyKhuNha, SDT) => dispatch(themKhuNha(tenKhuNha, diaChi, quanLyKhuNha, SDT)),
        suaKhuNha: (id, tenKhuNha, diaChi, quanLyKhuNha, SDT) => dispatch(suaKhuNha(id, tenKhuNha, diaChi, quanLyKhuNha, SDT)),
        xoaKhuNha: id => dispatch(xoaKhuNha(id))
    }
}

export default connect(mapStatetoProps, mapActiontoProps)(KhuNhaList);