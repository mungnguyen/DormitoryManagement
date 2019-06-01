import {
    API_CALLING, HIEN_THI_CAC_HOA_DON, THEM_HOA_DON_HOP_DONG, THEM_HOA_DON_DIEN_NUOC, THEM_HOA_DON
} from './types';
import axios from 'axios';

export const hienThiCacHoaDon = () => dispatch => {
    console.log("HIEN_THI_CAC_HOA_DON");

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicachoadon').then(res => {
        dispatch({
            type: HIEN_THI_CAC_HOA_DON,
            payload: res.data
        })
    })
}

export const themHoaDonHopDong = (id, noiDung, tongTien, nguoiThucHien, ngayThucHien) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THEM_HOA_DON_HOP_DONG")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/taohoadonhopdong', {
        hopDongId: id,
        noiDung: noiDung,
        tongTien: tongTien,
        nguoiThucHien: nguoiThucHien,
        ngayThucHien: ngayThucHien,
    }).then (res => {
        dispatch({
            type: THEM_HOA_DON_HOP_DONG,
            payload: res.data
        })
    })
}

export const themHoaDonDienNuoc = (id, noiDung, tongTien, nguoiThucHien, ngayThucHien) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THEM_HOA_DON_DIEN_NUOC")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/taohoadondiennuoc', {
        dienNuocId: id,
        noiDung: noiDung,
        tongTien: tongTien,
        nguoiThucHien: nguoiThucHien,
        ngayThucHien: ngayThucHien,
    }).then (res => {
        dispatch({
            type: THEM_HOA_DON_DIEN_NUOC,
            payload: res.data
        })
    })
}

export const themHoaDon = (noiDung, tongTien, nguoiThucHien, ngayThucHien) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THEM_HOA_DON")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/taohoadon', {
        noiDung: noiDung,
        tongTien: tongTien,
        nguoiThucHien: nguoiThucHien,
        ngayThucHien: ngayThucHien,
    }).then (res => {
        dispatch({
            type: THEM_HOA_DON,
            payload: res.data
        })
    })
}