import {
    API_CALLING, HIEN_THI_CAC_HOA_DON_DIEN_NUOC, TAO_DIEN_NUOC, THAY_DOI_TRANG_THAI_DIEN_NUOC
} from '../actions/types';

const iniState = {
    DienNuocs: [],
    callapidone: false,
    thayDoiTrangThaiDon: false,
    taoDienNuoc: false
}

export default function quanLyDonRoiKTXReducer(state = iniState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false,
                thayDoiTrangThaiDon: false,
                taoDienNuoc: false
            }
        }

        case HIEN_THI_CAC_HOA_DON_DIEN_NUOC: {
            console.log("HIEN_THI_CAC_HOA_DON_DIEN_NUOC_OK");
            return {
                ...state,
                DienNuocs: action.payload
            }
        }

        case THAY_DOI_TRANG_THAI_DIEN_NUOC: {
            console.log("THAY_DOI_TRANG_THAI_DIEN_NUOC_OK");
            return {
                ...state,
                callapidone: true,
                thayDoiTrangThaiDon: true,
                taoDienNuoc: false
            }
        }

        case TAO_DIEN_NUOC: {
            console.log("TAO_DIEN_NUOC_OK");
            return {
                ...state,
                callapidone: true,
                thayDoiTrangThaiDon: false,
                taoDienNuoc: true
            }
        }

        default: return state
    }
}