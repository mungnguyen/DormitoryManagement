import { API_CALLING, LOGIN_ADMIN, SUA_THONG_TIN_ADMIN, DOI_MAT_KHAU } from '../actions/types';

const initState = {
    callapidone: false,
    acc: {},
    doiMatKhau: {}
};

export default function adminReducer(state=initState, action) {
    switch(action.type){
        case API_CALLING: {
            return {
                ...state,
                callapidone: false
            }
        }

        case LOGIN_ADMIN: {
            console.log("LOGIN_AMIN_OK");
            return {
                ...state,
                acc: action.payload,
                callapidone: true
            }
        }

        case SUA_THONG_TIN_ADMIN: {
            console.log("SUA_THONG_TIN_ADMIN_OK");
            return {
                ...state,
                callapidone: true
            }
        }

        case DOI_MAT_KHAU: {
            console.log("DOI_MAT_KHAU_OK");
            return {
                ...state,
                callapidone: true,
                doiMatKhau: action.payload
            }
        }

        default: return state
    }
}