import { API_CALLING, LOGIN_SINH_VIEN, SIGNUP_SINH_VIEN, SIGNUP_ERROR, LOGIN_ERROR } from './types';
import axios from 'axios';

export const loginSinhVien = (email, matKhauSinhVien) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("LOGIN_SINH_VIEN")
    )
    axios.post('/api/sinhvien/login', {
        emailSinhVien: email,
        matKhauSinhVien: matKhauSinhVien
    }).then(response => dispatch({
        type: LOGIN_SINH_VIEN,
        payload: response.data
    })).catch(err => {
        if( err.response.status == "401" ) {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    err: err.response.status,
                    message: "Email không tồn tại"
                }
            })
        } else if( err.response.status == "402" ) {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    err: err.response.status,
                    message: "Mật khẩu không chính xác"
                }
            })
        }
    })
}

export const signUpSinhVien = (tenSinhVien, email, matKhau, gioiTinh) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("SIGNUP_SINH_VIEN")
    )
    axios.post('/api/sinhvien/signup', {
        tenSinhVien: tenSinhVien,
        emailSinhVien: email,
        matKhauSinhVien: matKhau,
        gioiTinh: gioiTinh
    }).then(response => dispatch({
        type: SIGNUP_SINH_VIEN,
        payload: response.data
    })).catch(err => {
        if (err.response.status == "401") {
            dispatch({
                type: SIGNUP_ERROR,
                payload: {
                    err: err.response.status,
                    message: "Email đã có người sử dụng"
                }
            })
        }
    })
}