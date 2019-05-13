import { API_CALLING, LOGIN_ADMIN, SUA_THONG_TIN_ADMIN, DOI_MAT_KHAU } from './types';
import axios from 'axios';

export const loginAdmin = (tenAdmin, matKhauAdmin) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("LOGIN_ADMIN")
    )
    axios.post('/api/admin/login', {
        tenAdmin: tenAdmin,
        matKhauAdmin: matKhauAdmin
    }).then(response => dispatch({
        type: LOGIN_ADMIN,
        payload: response.data
    }))
}

export const suaThongTinAdmin = (tenAdmin, matKhauAdmin) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("SUA_THONG_TIN_ADMIN")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/suathongtin', {
        tenAdmin: tenAdmin,
        matKhauAdmin: matKhauAdmin
    }).then(response => dispatch({
        type: SUA_THONG_TIN_ADMIN,
        payload: response.data
    }))
}

export const doiMatKhauAdmin = (matKhauCu, matKhauMoi) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("DOI_MAT_KHAU_ADMIN")
    )

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/doimatkhau', {
        matKhauCu: matKhauCu,
        matKhauMoi: matKhauMoi
    }).then(response => dispatch({
        type: DOI_MAT_KHAU,
        payload: response.data
    }))
}