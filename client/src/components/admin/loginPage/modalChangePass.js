import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Button } from 'reactstrap'
import { doiMatKhauAdmin } from '../../../actions/adminAction';
import { withRouter, Redirect } from 'react-router-dom';

class ModalChangePass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matKhauMoi: "",
            matKhauMoiTrong: false,
            trungMatKhauCu: false,
            xacNhan: "",
            xacNhanTrong: false,
            trungNhau: true,
            loi: "false"
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.admin.doiMatKhau) {
            if (nextProps.admin.doiMatKhau.success) {
                console.log(nextProps.admin.doiMatKhau.message);
                this.props.history.push('/admin/home');
            } else {
                if (!this.state.loi)
                    this.setState({
                        loi: "true"
                    })
            }
        }
    }

    nhapMatKhauMoi = (event) => {
        this.setState({
            matKhauMoi: event.target.value
        },
            () => this.kiemTraMatKhauMoi()
        );
    }

    kiemTraMatKhauMoi = () => {
        this.setState({
            matKhauMoiTrong: this.state.matKhauMoi.length > 0 ? false : true,
            trungMatKhauCu: this.state.matKhauMoi == "12345" ? true : false
        });
    }

    xacNhanMatKhau = (event) => {
        this.setState({
            xacNhan: event.target.value
        },
            () => this.kiemTraXacNhan()
        )
    }

    kiemTraXacNhan = () => {
        this.setState({
            xacNhanTrong: this.state.xacNhan.length > 0 ? false : true,
            trungNhau: this.state.matKhauMoi.indexOf(this.state.xacNhan) == 0 ? true : false
        });
    }

    doiMatKhau = () => {
        if (this.state.matKhauMoi) {
            var matKhauCu = "12345"
            this.props.doiMatKhauAdmin(matKhauCu, this.state.matKhauMoi);
            this.setState({
                matKhauMoi: "",
                xacNhan: ""
            });
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.open}>
                <ModalHeader>
                    {!this.state.loi ?
                        <div>
                            <p>Bạn đã đăng nhập với tài khoản mặc định.</p>
                            <p>Vui lòng đổi mật khẩu</p>
                        </div>
                        :
                        <div>
                            <p>{this.props.admin.doiMatKhau.message}</p>
                            <p>Vui lòng nhập lại</p>
                        </div>}

                </ModalHeader>
                <ModalBody>
                    <Form>
                        <p>
                            <b>Mật khẩu mới</b>
                            <Input type="password" onChange={this.nhapMatKhauMoi}></Input>
                            {this.state.matKhauMoiTrong ?
                                <span style={{ color: "red", fontSize: "15px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span> Mật khẩu mới trống</span>
                                </span>
                                : null}

                            {this.state.trungMatKhauCu ?
                                <span style={{ color: "red", fontSize: "15px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span> Trùng mật khẩu mặc định</span>
                                </span>
                                : null}
                            <br />
                            <b>Xác nhận mật khẩu</b>
                            <Input type="password" onChange={this.xacNhanMatKhau}></Input>
                            {this.state.xacNhanTrong ?
                                <span style={{ color: "red", fontSize: "15px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span> Xác nhận mật khẩu trống</span>
                                </span>
                                : null}
                            {!this.state.trungNhau ?
                                <span style={{ color: "red", fontSize: "15px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span> Xác nhận không thành công</span>
                                </span>
                                : null}
                        </p>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={this.doiMatKhau}>OK</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStatetoProps = state => {
    return {
        admin: state.admin
    }
}

const mapActiontoProps = dispatch => {
    return {
        doiMatKhauAdmin: (matKhauCu, matKhauMoi) => dispatch(doiMatKhauAdmin(matKhauCu, matKhauMoi))
    }
}

export default withRouter(connect(mapStatetoProps, mapActiontoProps)(ModalChangePass));