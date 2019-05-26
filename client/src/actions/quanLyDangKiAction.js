import {
    API_CALLING, HIEN_THI_CAC_DON_DANG_KI, THAY_DOI_TRANG_THAI_DON, HIEN_THI_CAC_HOP_DONG,
    TAO_HOP_DONG, THAY_DOI_TRANG_THAI_HOP_DONG
} from './types';
import axios from 'axios';

export const hienThiCacDonDangKi = () => dispatch => {
    console.log("HIEN_THI_CAC_DON_DANG_KI");

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicacdondangki').then(res => {
        dispatch({
            type: HIEN_THI_CAC_DON_DANG_KI,
            payload: res.data
        })
    })
}

export const thayDoiTrangThaiDonDangKi = (id, trangThai) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THAY_DOI_TRANG_THAI_DON_DANG_KI")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/thaydoitinhtrangdon/' + id, {
        tinhTrangDangKi: trangThai
    }).then (res => {
        dispatch({
            type: THAY_DOI_TRANG_THAI_DON,
            payload: res.data
        })
    })
}

export const hienThiCacHopDong = () => dispatch => {
    console.log("HIEN_THI_CAC_HOP_DONG");
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicachopdong').then(res => {
        dispatch({
            type: HIEN_THI_CAC_HOP_DONG,
            payload: res.data
        })
    })
}

export const taoHopDong = (ngayBatDau, ngayKetThuc, tongSoTien, sinhVienId, phongId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("TAO_HOP_DONG")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/taohopdong', {
        ngayBatDau: ngayBatDau,
        ngayKetThuc: ngayKetThuc,
        tongSoTien: tongSoTien,
        sinhVienId: sinhVienId,
        phongId: phongId
    }).then(res => {
        dispatch({
            type: TAO_HOP_DONG,
            payload: res.data
        })
    })
}

export const thayDoiThongTinHopDong = (id, trangThai) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THAY_DOI_THONG_TIN_HOP_DONG")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/thaydoitrangthaihopdong/' + id, {
        tinhTrangThanhToan: trangThai
    }).then(res => {
        dispatch({
            type: THAY_DOI_TRANG_THAI_HOP_DONG,
            payload: res.data
        })
    })
}