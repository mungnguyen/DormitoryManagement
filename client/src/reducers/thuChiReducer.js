import {
    API_CALLING, HIEN_THI_CAC_HOA_DON, THEM_HOA_DON_HOP_DONG, THEM_HOA_DON_DIEN_NUOC, THEM_HOA_DON
} from '../actions/types';

const iniState = {
    HoaDons: [],
    callapidone: false,
    themHoaDon: false
}

export default function quanLyDonRoiKTXReducer(state = iniState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false,
                themHoaDon: false
            }
        }

        case HIEN_THI_CAC_HOA_DON: {
            console.log("HIEN_THI_CAC_HOA_DON_OK");
            return {
                ...state,
                HoaDons: action.payload
            }
        }

        case THEM_HOA_DON_HOP_DONG: {
            console.log("THEM_HOA_DON_HOP_DONG_OK");
            return {
                ...state,
                callapidone: true,
                themHoaDon: true
            }
        }

        case THEM_HOA_DON_DIEN_NUOC: {
            console.log("THEM_HOA_DON_DIEN_NUOC_OK");
            return {
                ...state,
                callapidone: true,
                themHoaDon: true
            }
        }

        case THEM_HOA_DON: {
            console.log("THEM_HOA_DON_OK");
            return {
                ...state,
                callapidone: true,
                themHoaDon: true
            }
        }

        default: return state
    }
}