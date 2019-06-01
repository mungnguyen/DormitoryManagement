import {
    API_CALLING, HIEN_THI_CAC_THIET_BI, THEM_THIET_BI, NHAP_THIET_BI, THEM_THIET_BI_VAO_PHONG
} from '../actions/types';

const iniState = {
    ThietBis: [],
    callapidone: false,
    nhapThietBi: false,
    themThietBi: false
}

export default function quanLyDonRoiKTXReducer(state = iniState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false,
                nhapThietBi: false,
                themThietBi: false
            }
        }

        case HIEN_THI_CAC_THIET_BI: {
            console.log("HIEN_THI_CAC_THIET_BI_OK");
            return {
                ...state,
                ThietBis: action.payload
            }
        }

        case THEM_THIET_BI: {
            console.log("THEM_THIET_BI_OK");
            return {
                ...state,
                callapidone: true,
                themThietBi: true
            }
        }

        case THEM_THIET_BI_VAO_PHONG: {
            console.log("THEM_THIET_BI_VAO_PHONG_OK");
            return {
                ...state,
                callapidone: true,
                themThietBi: true
            }
        }

        case NHAP_THIET_BI: {
            console.log("NHAP_THIET_BI_OK");
            return {
                ...state,
                callapidone: true,
                nhapThietBi: true
            }
        }

        default: return state
    }
}