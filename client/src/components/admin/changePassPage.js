import React, { Component } from 'react';
import '../../css/adminLogin/vendor/animate/animate.css';
import '../../css/adminLogin/vendor/css-hamburgers/hamburgers.min.css';
import '../../css/adminLogin/vendor/animsition/css/animsition.min.css';
import '../../css/adminLogin/vendor/select2/select2.min.css';
import '../../css/adminLogin/vendor/daterangepicker/daterangepicker.css';
import '../../css/adminLogin/util.css';
import '../../css/adminLogin/main.css';

export default class ChangePass extends Component {
    render() {
        return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title">
                            <span class="login100-form-title-1">
                                Đổi Mật Khẩu
                            </span>
                        </div>

                        <form className="login100-form validate-form">
                            <div className="wrap-input100 validate-input m-b-26" data-validate="Không được phép trống">
                                <span className="label-input100">Mật Khẩu</span>
                                <input className="input100" type="password" name="username" placeholder="Mật khẩu" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18" data-validate = "Không được phép trống">
                                <span className="label-input100">Xác thực mật khẩu</span>
                                <input className="input100" type="password" name="pass" placeholder="" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-26" data-validate="Không được phép trống">
                                <span className="label-input100">Mật Khẩu mới</span>
                                <input className="input100" type="password" name="username" placeholder="Mật khẩu mới" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" for="ckb1">
                                        Remember me
                                    </label>
                                </div>

                                <div>
                                    <a href="#" class="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}