import {
    API_CALLING, HIEN_THI_CAC_DON_DANG_KI, THAY_DOI_TRANG_THAI_DON, HIEN_THI_CAC_HOP_DONG,
    TAO_HOP_DONG, THAY_DOI_TRANG_THAI_HOP_DONG
} from '../actions/types';

const iniState = {
    DonDangKis: [],
    HopDongs: [],
    callapidone: false,
    thayDoiTrangThaiDon: false,
    taoHopDong: false
}

export default function quanLyDangKiReducer(state = iniState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false,
                thayDoiTrangThaiDon: false,
                taoHopDong: false
            }
        }

        case HIEN_THI_CAC_DON_DANG_KI: {
            console.log("HIEN_THI_CAC_DONG_DANG_KI_OK");
            return {
                ...state,
                DonDangKis: action.payload
            }
        }

        case THAY_DOI_TRANG_THAI_DON: {
            console.log("THAY_DOI_TRANG_THAI_DON_OK");
            return {
                ...state,
                callapidone: true,
                thayDoiTrangThaiDon: true
            }
        }

        case HIEN_THI_CAC_HOP_DONG: {
            console.log("HIEN_THI_CAC_HOP_DONG_OK");
            return {
                ...state,
                HopDongs: action.payload
            }
        }

        case TAO_HOP_DONG: {
            console.log("TAO_HOP_DONG_OK");
            return {
                ...state,
                callapidone: true,
                taoHopDong: true
            }
        }

        case THAY_DOI_TRANG_THAI_HOP_DONG: {
            console.log("THAY_DOI_TRANG_THAI_HOP_DONG_OK");
            return {
                ...state,
                callapidone: true
            }
        }

        default: return state
    }
}