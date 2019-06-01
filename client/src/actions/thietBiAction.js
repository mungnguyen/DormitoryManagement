import {
    API_CALLING, HIEN_THI_CAC_THIET_BI, THEM_THIET_BI, THEM_THIET_BI_VAO_PHONG, NHAP_THIET_BI
} from './types';
import axios from 'axios';

export const hienThiCacThietBi = () => dispatch => {
    console.log("HIEN_THI_CAC_THIET_BI");
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicacthietbi').then(res => {
        dispatch({
            type: HIEN_THI_CAC_THIET_BI,
            payload: res.data
        })
    })
}

export const themThietBi = (tenThietBi, giaTri) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("THEM_THIET_BI")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/themthietbi', {
        tenThietBi: tenThietBi,
        giaTri: giaTri
    }).then(res => {
        dispatch({
            type: THEM_THIET_BI,
            payload: res.data
        })
    })
}

export const nhapThietBi = (id, soLuong, ngayThucHien, nguoiThucHien) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("NHAP_THIET_BI")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/nhapthietbi', {
        thietBiId: id,
        soLuong: soLuong,
        nguoiThucHien: nguoiThucHien,
        ngayThucHien: ngayThucHien,
    }).then(res => {
        dispatch({
            type: NHAP_THIET_BI,
            payload: res.data
        })
    })
}

export const themThietBiVaoPhong = (id, soLuong, phongId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("NHAP_THIET_BI")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/nhapthietbi', {
        thietBiId: id,
        soLuong: soLuong,
        phongId: phongId
    }).then(res => {
        dispatch({
            type: THEM_THIET_BI_VAO_PHONG,
            payload: res.data
        })
    })
}

