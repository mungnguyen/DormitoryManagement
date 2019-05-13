import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input} from 'reactstrap';
import { connect } from 'react-redux';
import ModalChangePass from './loginPage/modalChangePass'
import '../../css/adminLogin/util.css';
import '../../css/adminLogin/main.css';
import { loginAdmin } from '../../actions/adminAction';

class LoginAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taiKhoan: "",
            taiKhoanRong: false,
            matKhauRong: false,
            matKhau: "",
            openModal: false,
            doiMatKhau: false,
            flagChangePass: false,
            flagError: false
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.admin.callapidone) {
            if(nextProps.admin.acc.success) {
                console.log("LOGIN_SUCCESS")
                localStorage.setItem("signined", nextProps.admin.acc.success)
                localStorage.setItem("userId", nextProps.admin.acc.data.adminId);
                localStorage.setItem("taikhoan", nextProps.admin.acc.data.tenAdmin)
                localStorage.setItem("token", nextProps.admin.acc.token)
                console.log(nextProps.admin.acc.data.matKhauAdmin == "12345");

                if (nextProps.admin.acc.data.matKhauAdmin == "12345" && (!this.state.flagChangePass)) {
                    this.setState({
                        doiMatKhau: true,
                        flagChangePass: true
                    })
                } else {
                    this.props.history.push('/admin/home');
                }
            } else {
                console.log("LOGIN_FALSE");
                if (!this.state.flagError) {
                    this.setState({
                        openModal: true,
                        flagError: true
                    });
                }
            }
        }
    }
    

    nhapTaiKhoan = (event) => {
        this.setState({
            taiKhoanRong: false,
            matKhauRong: false,
            taiKhoan: event.target.value
        },
            () => this.kiemTraNhapTaiKhoan()
        );
    }

    kiemTraNhapTaiKhoan = () => {
        this.setState({
            taiKhoanRong: this.state.taiKhoan.length > 0 ? null : true
        })
    }

    nhapMatKhau = (event) => {
        this.setState({
            taiKhoanRong: false,
            matKhauRong: false,
            matKhau: event.target.value
        },
            () => this.kiemTraNhapMatKhau()
        );
    }
       

    kiemTraNhapMatKhau = () => {
        this.setState({
            matKhauRong: this.state.matKhau.length > 0 ? null : true
        });
    }

    dangNhap = () => {
        if (this.state.taiKhoan && this.state.matKhau) {
            this.props.loginAdmin(this.state.taiKhoan, this.state.matKhau)
            this.setState({
                taiKhoan: "",
                matKhau: "",
            });
        }
    }

    closeModal = () => {
        this.setState({
            openModal: false,
            taiKhoan: "",
            matKhau: ""
        })
    }

    doiMatKhau = () => {
        this.setState({
            doiMatKhau: false
        });
    }

    render() {
        return(
            <div className="limiter">
                <div className="container-login100" style={{paddingTop: "0"}}>
                    <div className="wrap-login100" style={{marginTop: "0"}}>
                        <div className="login100-form-title">
                            <span class="login100-form-title-1">
                                <b>Đăng nhập</b>
                            </span>
                        </div>

                        <Form className="login100-form validate-form">
                            <div className="wrap-input100 validate-input m-b-26">
                                <span className="label-input100">Tên đăng nhập</span>
                                <input className="input100" 
                                       value={this.state.taiKhoan} 
                                       type="text" 
                                       onChange={this.nhapTaiKhoan} 
                                       placeholder="Nhập tên của bạn" />
                                <span className="focus-input100"></span>
                            </div>
                            <span>
                            { this.state.taiKhoanRong ?
                                    <span style={{ color: "red", fontSize: "15px"}} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span> Tên đăng nhập trống</span>
                                    </span>
                                    :null}
                            </span>

                            <div className="wrap-input100 validate-input m-b-18">
                                <span className="label-input100">Mật khẩu</span>
                                <input className="input100" 
                                       type="password" 
                                       value={this.state.matKhau} 
                                       onChange={this.nhapMatKhau} 
                                       placeholder="Nhập mật khẩu" />
                                <span className="focus-input100"></span>
                            </div>
                            <span>
                            { this.state.matKhauRong ?
                                    <span style={{ color: "red", fontSize: "15px"}} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span> Mật khẩu trống</span>
                                    </span>
                                    :null}
                            </span>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
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
                                <Button class="login100-form-btn" onClick={this.dangNhap} style={{marginLeft: "5.5em", backgroundColor:"blue"}}>
                                    Đăng nhập
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                {/* Thong bao loi */}
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

                {/* Doi mat khau */}
                <ModalChangePass open={this.state.doiMatKhau}
                                 doiMatKhau={this.doiMatKhau}
                />
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        admin: state.admin
    }
}

const mapActiontoProps = dispatch => {
    return {
        loginAdmin: (name, pass) => (dispatch(loginAdmin(name, pass)))
    }
}

export default withRouter( connect (mapStatetoProps, mapActiontoProps)( LoginAdmin ))