import { API_CALLING, LOGIN_ADMIN, SUA_THONG_TIN_ADMIN } from './types';
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
    axios.post('/api/admin/suathongtin', {
        tenAdmin: tenAdmin,
        matKhauAdmin: matKhauAdmin
    }).then(response => dispatch({
        type: SUA_THONG_TIN_ADMIN,
        payload: response.data
    }))
}