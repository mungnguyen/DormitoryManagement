import {
    API_CALLING, HIEN_THI_CAC_DON_ROI_KTX, THAY_DOI_TRANG_THAI_DON_ROI_KTX
} from '../actions/types';

const iniState = {
    DonRoiKTXKis: [],
    callapidone: false,
    thayDoiTrangThaiDon: false
}

export default function quanLyDonRoiKTXReducer(state = iniState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false,
                thayDoiTrangThaiDon: false
            }
        }

        case HIEN_THI_CAC_DON_ROI_KTX: {
            console.log("HIEN_THI_CAC_DON_ROI_KTX_OK");
            return {
                ...state,
                DonRoiKTXKis: action.payload
            }
        }

        case THAY_DOI_TRANG_THAI_DON_ROI_KTX: {
            console.log("THAY_DOI_TRANG_THAI_DON_ROI_KTX_OK");
            return {
                ...state,
                callapidone: true,
                thayDoiTrangThaiDon: true
            }
        }

        default: return state
    }
}