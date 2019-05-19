import axios from 'axios';
import { HIEN_THI_CAC_PHONG, LAY_PHONG_ID, THEM_PHONG, SUA_PHONG, XOA_PHONG, API_CALLING} from './types';

export const hienThiCacPhong = () => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Hien thi cac phong trong ki tuc xa")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthicacphong/').then(
        res => dispatch(
            {
                type: HIEN_THI_CAC_PHONG,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const layPhongId = (id) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Lay phong theo id")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.get('/api/admin/hienthiphongtheoid/' + id).then(
        res => dispatch(
            {
                type: LAY_PHONG_ID,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const themPhong = (tenPhong, loaiPhong, soSinhVienMax, khuNhaId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Them Phong")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('/api/admin/themphong', {
        tenPhong: tenPhong,
        loaiPhong: loaiPhong,
        soSinhVienMax: soSinhVienMax,
        khuNhaId: khuNhaId
    }).then(
        res => dispatch({
            type: THEM_PHONG,
            payload: res.data
        })
    ).catch(function (error) {
        console.log(error.response);
    });
}


export const suaPhong = (id, tenPhong, loaiPhong, soSinhVienMax, khuNhaId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Sua phong")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('/api/admin/suaphong/' + id, {
        tenPhong: tenPhong,
        loaiPhong: loaiPhong,
        soSinhVienMax: soSinhVienMax,
        khuNhaId: khuNhaId
    }).then(
        res => dispatch({
            type: SUA_PHONG,
            payload: res.data
        })
    )
}

export const xoaPhong = (phongId) => dispatch => {
    dispatch({
        type: API_CALLING
    },
        console.log("Xoa phong")
    )
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.delete('/api/admin/xoaphong/' + phongId).then(
        res => dispatch({
            type: XOA_PHONG,
            payload: res.data
        })
    ).catch(function (error) {
        console.log(error.response);
    });
}