import { API_CALLING, LOGIN_SINH_VIEN, SIGNUP_SINH_VIEN, SIGNUP_ERROR, LOGIN_ERROR,
     DANG_KI_PHONG, KIEM_TRA_SINH_VIEN_THUOC_KTX } from '../actions/types';

const initState = {
    callapidone: false,
    loginSuccess: false,
    signUpSuccess: false,
    message: "",
    acc: {},
    dangKiPhong: false,
    tonTaiSV: false
};

export default function sinhVienReducer(state=initState, action) {
    switch(action.type){
        case API_CALLING: {
            return {
                ...state,
                callapidone: false
            }
        }

        case LOGIN_SINH_VIEN: {
            console.log("LOGIN_SINH_VIEN_OK");
            return {
                ...state,
                loginSuccess: action.payload.success,
                signUpSuccess: false,
                acc: action.payload,
                callapidone: true
            }
        }

        case LOGIN_ERROR: {
            console.log(action.payload.err);
            return {
                ...state,
                loginSuccess: false,
                signUpSuccess: false,
                message: action.payload.message,
                callapidone: true
            }
        }

        case SIGNUP_SINH_VIEN: {
            console.log("SIGNUP_SINH_VIEN_OK");
            return {
                ...state,
                signUpSuccess: action.payload.success,
                loginSuccess: false,
                acc: action.payload,
                callapidone: true
            }
        }

        case SIGNUP_ERROR: {
            console.log(action.payload.err);
            return {
                ...state,
                signUpSuccess: false,
                loginSuccess: false,
                message: action.payload.message,
                callapidone: true
            }
        }

        case DANG_KI_PHONG: {
            console.log("DANG_KI_PHONG_OK");
            return {
                ...state,
                dangKiPhong: action.payload.success,
                tonTaiSV: true,
                callapidone: true
            }
        }

        case KIEM_TRA_SINH_VIEN_THUOC_KTX : 
        console.log("KIEM_TRA_SINH_VIEN_OK");
        return {
            ...state,
            tonTaiSV: action.payload.hasSV,
            callapidone: true
        }
        default: return state
    }
}