import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, Button, Form, Input} from 'reactstrap';
import { connect } from 'react-redux';
import '../../css/adminLogin/util.css';
import '../../css/adminLogin/main.css';
import { loginAdmin } from '../../actions/adminAction';

class LoginAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taiKhoan: "",
            matKhau: "",
            openModal: false,
            login: false
        }
    }

    componentDidUpdate = () => {
        if(this.props.admin.success) {
            localStorage.setItem("signined", this.props.admin.acc.success)
            localStorage.setItem("userId", this.props.admin.acc.adminId);
            localStorage.setItem("taikhoan", this.props.admin.acc.tenAdmin)
            localStorage.setItem("token", this.props.admin.acc.token)

            if (this.props.admin.acc.matKhauAdmin == "12345") {
                this.props.history.push('/admin/thay-doi-mat-khau');
            } else {
                this.props.history.push('/admin/home');
            }
        } else {
            if (this.state.login) {
                this.setState({
                    openModal: true,
                    login: false
                });
            }
        }
    }

    nhapTaiKhoan = (event) => {
        this.setState({
            taiKhoan: event.target.value
        })
    }

    nhapMatKhau = (event) => {
        this.setState({
            matKhau: event.target.value
        })
    }

    dangNhap = () => {
        if (this.state.taiKhoan && this.state.matKhau) {
            this.props.loginAdmin(this.state.taiKhoan, this.state.matKhau);
            this.setState({
                login: true
            })
        }
    }

    closeModal = () => {
        this.setState({
            openModal: false
        })
    }

    render() {
        return(
            <div className="limiter">
                <div className="container-login100" style={{paddingTop: "0"}}>
                    <div className="wrap-login100" style={{marginTop: "0"}}>
                        <div className="login100-form-title">
                            <span class="login100-form-title-1">
                                Đăng nhập
                            </span>
                        </div>

                        <Form className="login100-form validate-form">
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Tên đăng nhập</span>
                                <Input className="input100" type="text" onChange={this.nhapTaiKhoan} placeholder="Nhập tên của bạn"></Input>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18">
                                <span className="label-input100">Mật khẩu</span>
                                <Input className="input100" type="password" onChange={this.nhapMatKhau} placeholder="Nhập mật khẩu"></Input>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">
                                    <Input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></Input>
                                    <label className="label-checkbox100" for="ckb1">
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" className="txt1">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <Button class="login100-form-btn" onClick={this.dangNhap}>
                                    Đăng nhập
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <Modal isOpen={this.state.openModal}>
                    <ModalBody>
                        Tài khoản hoặc mật khẩu không chính xác
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>
                            OK
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        admin: state.admin
    }
}

export default withRouter( connect (mapStatetoProps, { loginAdmin })( LoginAdmin ))