import axios from 'axios';
import { HIEN_THI_CAC_KHU_NHA, LAY_KHU_NHA_ID, THEM_KHU_NHA, SUA_KHU_NHA, XOA_KHU_NHA} from './types';

export const hienThiCacKhuNha = () => dispatch => {
    axios.get('/api/khuNha',
        console.log("Hien thi cac khu nha trong ki tuc xa")
    ).then(
        res => dispatch(
            {
                type: HIEN_THI_CAC_KHU_NHA,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const layKhuNhaId = () => dispatch => {
    axios.get('/api/khuNha/:id',
        console.log("Lay khu nha theo id")
    ).then(
        res => dispatch(
            {
                type: LAY_KHU_NHA_ID,
                payload: res.data
            })
    ).catch(function (error) {
        console.log(error.response);
    });
}

export const themKhuNha = (tenKhuNha) => dispatch => {
    axios.post('/api/themKhuNha', {
        tenKhuNha: tenKhuNha
    }, 
        console.log("Them Khu Nha")
    ).then(
        res => dispatch({
            type: THEM_KHU_NHA,
            payload: res.data
        })
    ).catch(function(error) {
        console.log(error.response);
    });
}

export const suaKhuNhaThanhCong = (khuNhaId, tenKhuNha) => {
    console.log("SuaThanhCong");
    return{
        type: SUA_KHU_NHA,
        payload: {
            khuNhaId: khuNhaId,
            tenKhuNha: tenKhuNha
        }
    }
} 


export const suaKhuNha = (khuNhaId, tenKhuNha) => dispatch => {
    axios.put('/api/suaKhuNha', {
        khuNhaId: khuNhaId,
        tenKhuNha: tenKhuNha
    },
        console.log("Sua khu nha")
    ).then(
        () => dispatch(suaKhuNhaThanhCong(khuNhaId, tenKhuNha))
    ).catch(function(error) {
        console.log(error.response);
    });
}


export const xoaKhuNhaThanhCong = (khuNhaId) => {
    console.log("xoaThanhCong");
    return {
        type: XOA_KHU_NHA,
        payload: khuNhaId
    }
}

export const xoaKhuNha = (khuNhaId) => dispatch => {
    console.log(khuNhaId);
    axios.delete('/api/xoaKhuNha', {
        data: {khuNhaId: khuNhaId}
    },
        console.log("Xoa khu nha")
    ).then(
        () => dispatch(hienThiCacKhuNha())
    ).catch(function(error) {
        console.log(error.response);
    });
}