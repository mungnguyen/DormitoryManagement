import axios from 'axios';
import { HIEN_THI_CAC_KHU_NHA, LAY_KHU_NHA_ID, THEM_KHU_NHA, SUA_KHU_NHA, XOA_KHU_NHA, API_CALLING } from './types';

export const hienThiCacKhuNha = () => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Hien thi cac khu nha trong ki tuc xa")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicackhunha').then(
        res => dispatch(
            {
                type: HIEN_THI_CAC_KHU_NHA,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const layKhuNhaId = (id) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Lay khu nha theo id")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthikhuNhatheoid/' + id).then(
        res => dispatch(
            {
                type: LAY_KHU_NHA_ID,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const themKhuNha = (tenKhuNha, diaChi, quanLyKhuNha, SDT) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Lay khu nha theo id")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/themkhunha', {
        tenKhuNha: tenKhuNha,
        diaChi: diaChi,
        quanLyKhuNha: quanLyKhuNha,
        SDT: SDT
    }).then(
        res => dispatch({
            type: THEM_KHU_NHA,
            payload: res.data
        })
    ).catch(function (error) {
        console.log(error.response);
    });
}


export const suaKhuNha = (khuNhaId, tenKhuNha, diaChi, quanLyKhuNha, SDT) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Sua khu nha")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/suakhunha/' + khuNhaId, {
        tenKhuNha: tenKhuNha,
        diaChi: diaChi,
        quanLyKhuNha: quanLyKhuNha,
        SDT: SDT
    }).then(
        res => dispatch({
            type: SUA_KHU_NHA,
            payload: res.data
        })
    )
}

export const xoaKhuNha = (khuNhaId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Xoa khu")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.delete('/api/admin/xoakhunha/' + khuNhaId).then(
        res => dispatch({
            type: XOA_KHU_NHA,
            payload: res.data
        })
    ).catch(function (error) {
        console.log(error.response);
    });
}