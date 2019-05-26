import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap';
import { loginSinhVien, signUpSinhVien } from '../../actions/sinhVienAction';
import '../../css/sinhVienLogin/style.css';

class LoginSinhVien extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tenSinhVien: "",
            tenTrong: false,
            email: "",
            emailTrong: false,
            gioiTinh: "Nam",
            matKhau: "",
            matKhauTrong: false,
            xacNhan: "",
            xacNhanTrong: false,
            trungNhau: true,
            signUpError: false,
            openErrorModal: false
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.sinhVien.callapidone) {
            if (nextProps.sinhVien.signUpSuccess) {
                console.log("SignUp Success");
                localStorage.setItem("signined", nextProps.sinhVien.acc.success)
                localStorage.setItem("userId", nextProps.sinhVien.acc.data.sinhVienId);
                localStorage.setItem("email", nextProps.sinhVien.acc.data.emailSinhVien);
                localStorage.setItem("tenSinhVien", nextProps.sinhVien.acc.data.tenSinhVien);
                localStorage.setItem("token", nextProps.sinhVien.acc.token);
                localStorage.setItem("gioiTinh", nextProps.sinhVien.acc.data.gioiTinh);
                localStorage.setItem("role", "sinhvien");
                this.props.history.push('/home');
            } else if (nextProps.sinhVien.loginSuccess){
                console.log("Login Success");
                localStorage.setItem("signined", nextProps.sinhVien.acc.success)
                localStorage.setItem("userId", nextProps.sinhVien.acc.data.sinhVienId);
                localStorage.setItem("email", nextProps.sinhVien.acc.data.emailSinhVien);
                localStorage.setItem("tenSinhVien", nextProps.sinhVien.acc.data.tenSinhVien);
                localStorage.setItem("token", nextProps.sinhVien.acc.token);
                localStorage.setItem("gioiTinh", nextProps.sinhVien.acc.data.gioiTinh);
                localStorage.setItem("role", "sinhvien");
                this.props.history.push('/home');
            } else {
                if (!this.state.signUpError) {
                    this.setState({
                        openErrorModal: true,
                        signUpError: true
                    })
                }
            }
        }
    }

    onClickSignUp = () => {
        this.refs.cont.classList.toggle('s--signup')
    }

    thayDoiTenSinhVien = event => {
        this.setState({
            tenSinhVien: event.target.value
        },
            () => this.setState({
                tenTrong: this.state.tenSinhVien.length > 0 ? false : true
            })
        )
    }

    thayDoiEmail = event => {
        this.setState({
            email: event.target.value
        },
            () => this.setState({
                emailTrong: this.state.email.length > 0 ? false : true
            })
        )
    }

    thayDoiGioiTinh = event => {
        this.setState({
            gioiTinh: event.target.value
        })
    }

    nhapMatKhau = event => {
        this.setState({
            matKhau: event.target.value
        },
            () => this.setState({
                matKhauTrong: this.state.matKhau.length > 0 ? false : true
            })
        )
    }

    xacNhanMatKhau = event => {
        this.setState({
            xacNhan: event.target.value
        },
            () => this.setState({
                xacNhanTrong: this.state.xacNhan.length > 0 ? false : true,
                trungNhau: this.state.matKhau.indexOf(this.state.xacNhan) == 0 ? true : false
            })
        )
    }

    dangKi = () => {
        if (this.state.tenSinhVien && this.state.email && this.state.matKhau && this.state.gioiTinh) {
            this.props.signUp(this.state.tenSinhVien, this.state.email, this.state.matKhau, this.state.gioiTinh)
        }
        this.setState({
            tenSinhVien: "",
            email: "",
            gioiTinh: "Nam",
            matKhau: "",
            xacNhan: ""
        })
    }

    dangNhap = () => {
        if (this.state.email && this.state.matKhau) {
            this.props.login(this.state.email, this.state.matKhau);
            this.setState({
                email: "",
                matKhau: ""
            })
        }
    }

    closeOpenErrorModal = () => {
        this.setState({
            openErrorModal: false,
            tenSinhVien: "",
            email: "",
            gioiTinh: "Nam",
            matKhau: "",
            xacNhan: ""
        })
    }

    render() {
        return (
            <div>
                <div className="cont" ref="cont">
                    <div className="form sign-in">
                        <label>
                            <span style={{ color: "black" }}>Email</span>
                            <input className="input" type="email" value={this.state.email} onChange={this.thayDoiEmail} />
                            {this.state.emailTrong ?
                                <span style={{ color: "red", fontSize: "10px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span style={{ color: "red", fontSize: "10px" }}> Email trống</span>
                                </span>
                                : null}
                        </label>
                        <label>
                            <span style={{ color: "black" }}>Mật khẩu</span>
                            <input className="input" type="password" value={this.state.matKhau} onChange={this.nhapMatKhau} />
                            {this.state.matKhauTrong ?
                                <span style={{ color: "red", fontSize: "10px" }} >
                                    <i className="fas fa-exclamation-circle"></i>
                                    <span style={{ color: "red", fontSize: "10px" }}> Mật khẩu trống</span>
                                </span>
                                : null}
                        </label>
                        <p className="forgot-pass" style={{ color: "black" }}>Quên mật khẩu?</p>
                        <button type="button" className="submit" onClick={this.dangNhap}><b>Đăng nhập</b></button>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2><b>HUST</b></h2>
                                <center>
                                    <p style={{ color: "white" }}>Một tình yêu - Một tương lai</p>
                                </center>
                            </div>
                            <div className="img__text m--in">
                                <h2>HUST</h2>
                                <center>
                                    <p style={{ color: "white" }}>Một tình yêu - Một tương lai</p>
                                </center>
                            </div>
                            <div className="img__btn" onClick={this.onClickSignUp}>
                                <span class="m--up" >Đăng kí</span>
                                <span class="m--in">Đăng nhập</span>
                            </div>
                        </div>
                        <div className="form sign-up" style={{ marginTop: "-0.5em" }}>
                            <label>
                                <span style={{ color: "black" }}>Họ và Tên</span>
                                <input className="input" type="text" value={this.state.tenSinhVien} onChange={this.thayDoiTenSinhVien} />
                                {this.state.tenTrong ?
                                    <span style={{ color: "red", fontSize: "10px" }} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span style={{ color: "red", fontSize: "10px" }}> Họ và tên trống</span>
                                    </span>
                                    : null}
                            </label>
                            <label>
                                <span style={{ color: "black" }}>Email</span>
                                <input className="input" type="email" value={this.state.email} onChange={this.thayDoiEmail} />
                                {this.state.emailTrong ?
                                    <span style={{ color: "red", fontSize: "10px" }} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span style={{ color: "red", fontSize: "10px" }}> Email trống</span>
                                    </span>
                                    : null}
                            </label>
                            <label>
                                <span style={{ color: "black" }}>Giới tính  </span>
                                <select onChange={this.thayDoiGioiTinh}>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </label>
                            <label>
                                <span style={{ color: "black" }}>Mật khẩu</span>
                                <input className="input" type="password" onChange={this.nhapMatKhau} />
                                {this.state.matKhauTrong ?
                                    <span style={{ color: "red", fontSize: "10px" }} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span style={{ color: "red", fontSize: "10px" }}> Mật khẩu trống</span>
                                    </span>
                                    : null}
                            </label>
                            <label>
                                <span style={{ color: "black" }}>Xác nhận mật khẩu</span>
                                <input className="input" type="password" onChange={this.xacNhanMatKhau} />
                                {this.state.xacNhanTrong ?
                                    <span style={{ color: "red", fontSize: "10px" }} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span style={{ color: "red", fontSize: "10px" }}> Xác nhận mật khẩu trống</span>
                                    </span>
                                    : null}
                                {!this.state.trungNhau ?
                                    <span style={{ color: "red", fontSize: "10px" }} >
                                        <i className="fas fa-exclamation-circle"></i>
                                        <span style={{ color: "red", fontSize: "10px" }}>Xác nhận không thành công</span>
                                    </span>
                                    : null}
                            </label>
                            <button type="button" className="submit" onClick={this.dangKi}><b>Đăng kí</b></button>

                        </div>
                        <Modal isOpen={this.state.openErrorModal} >
                            <ModalBody>
                                {this.props.sinhVien.message}
                            </ModalBody>
                            <ModalFooter>
                                <Button outline color="primary"
                                    onClick={this.closeOpenErrorModal}
                                    style={{ width: "50px" }}
                                >OK</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        sinhVien: state.sinhVien
    }
}

const mapActiontoProps = dispatch => {
    return {
        login: (email, pass) => dispatch(loginSinhVien(email, pass)),
        signUp: (tenSinhVien, email, pass, gioiTinh) => dispatch(signUpSinhVien(tenSinhVien, email, pass, gioiTinh))
    }
}

export default withRouter(connect(mapStatetoProps, mapActiontoProps)(LoginSinhVien))