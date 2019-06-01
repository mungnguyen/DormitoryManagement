import {
    API_CALLING, HIEN_THI_CAC_DON_ROI_KTX, THAY_DOI_TRANG_THAI_DON_ROI_KTX
} from './types';
import axios from 'axios';

export const hienThiCacDonRoiKTX = () => dispatch => {
    console.log("HIEN_THI_CAC_DON_ROI_KTX");

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicacdonroiktx').then(res => {
        dispatch({
            type: HIEN_THI_CAC_DON_ROI_KTX,
            payload: res.data
        })
    })
}

export const thayDoiTrangThaiDonRoiKTX = (id, trangThai) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THAY_DOI_TRANG_THAI_DON_ROI_KTX")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/thaydoitrangthaidonroiktx/' + id, {
        tinhTrangDon: trangThai
    }).then (res => {
        dispatch({
            type: THAY_DOI_TRANG_THAI_DON_ROI_KTX,
            payload: res.data
        })
    })
}