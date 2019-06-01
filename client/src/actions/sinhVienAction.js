import {
    API_CALLING, LOGIN_SINH_VIEN, SIGNUP_SINH_VIEN, SIGNUP_ERROR, LOGIN_ERROR,
    DANG_KI_PHONG, KIEM_TRA_SINH_VIEN_THUOC_KTX, ROI_KTX
} from './types';
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
        if (err.response.status == "401") {
            dispatch({
                type: LOGIN_ERROR,
                payload: {
                    err: err.response.status,
                    message: "Email không tồn tại"
                }
            })
        } else if (err.response.status == "402") {
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

export const dangKiPhong = (phongId, ngayDangKi) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("DANG_KI_PHONG")
    );

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/sinhvien/themdondangki', {
        phongId: phongId,
        ngayDangKi: ngayDangKi
    }).then(res => {
        dispatch({
            type: DANG_KI_PHONG,
            payload: res.data
        }).catch(err => {
            if (err.response.status == "401") {
                dispatch({
                    type: DANG_KI_PHONG,
                    payload: {
                        success: false
                    }
                })
            }
        })
    })
}

export const kiemTraSinhVienThuocKTX = () => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("KIEM_TRA_SINH_VIEN_THUOC_KTX")
    );

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/sinhvien/kiemtrasinhvienthuocktx').then(res => {
        dispatch({
            type: KIEM_TRA_SINH_VIEN_THUOC_KTX,
            payload: res.data
        })
    }).catch(err => {
        if (err.response.status == "401") {
            dispatch({
                type: KIEM_TRA_SINH_VIEN_THUOC_KTX,
                payload: {
                    hasSV: true
                }
            })
        } else if (err.response.status == "402") {
            dispatch({
                type: KIEM_TRA_SINH_VIEN_THUOC_KTX,
                payload: {
                    hasSV: false
                }
            })
        }
    })
}


export const roiktx = () => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("ROI_KTX")
    )

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/sinhvien/roiktx', {
        ngayVietDon: new Date
    }).then(res => {
        dispatch({
            type: ROI_KTX,
            payload: res.data
        })
    })

}