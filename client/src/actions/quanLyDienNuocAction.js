import {
    API_CALLING, HIEN_THI_CAC_HOA_DON_DIEN_NUOC, TAO_DIEN_NUOC, THAY_DOI_TRANG_THAI_DIEN_NUOC
} from './types';
import axios from 'axios';

export const hienThiCacHoaDonDienNuoc = () => dispatch => {
    console.log("HIEN_THI_CAC_HOA_DON_DIEN_NUOC");
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicachoadondiennuoc').then(res => {
        dispatch({
            type: HIEN_THI_CAC_HOA_DON_DIEN_NUOC,
            payload: res.data
        })
    })
}

export const taoDienNuoc = (thangGhi, chiSoCu, chiSoMoi, giaDien, phongId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("TAO_DIEN_NUOC")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/taodiennuoc', {
        thangGhi: thangGhi,
        chiSoMoi: chiSoMoi,
        chiSoCu: chiSoCu,
        giaDien: giaDien,
        phongId: phongId
    }).then(res => {
        dispatch({
            type: TAO_DIEN_NUOC,
            payload: res.data
        })
    })
}

export const thayDoiThongTinDienNuoc = (id, trangThai) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THAY_DOI_THONG_TIN_DIEN_NUOC")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/thaydoitrangthaidiennuoc/' + id, {
        tinhTrangThanhToan: trangThai
    }).then(res => {
        dispatch({
            type: THAY_DOI_TRANG_THAI_DIEN_NUOC,
            payload: res.data
        })
    })
}