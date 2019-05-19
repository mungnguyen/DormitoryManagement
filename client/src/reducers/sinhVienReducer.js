import { API_CALLING, LOGIN_SINH_VIEN, SIGNUP_SINH_VIEN, SIGNUP_ERROR, LOGIN_ERROR } from '../actions/types';

const initState = {
    callapidone: false,
    loginSuccess: false,
    signUpSuccess: false,
    message: "",
    acc: {}
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
                acc: action.payload,
                callapidone: true
            }
        }

        case LOGIN_ERROR: {
            console.log(action.payload.err);
            return {
                ...state,
                loginSuccess: false,
                message: action.payload.message,
                callapidone: true
            }
        }

        case SIGNUP_SINH_VIEN: {
            console.log("SIGNUP_SINH_VIEN_OK");
            return {
                ...state,
                signUpSuccess: action.payload.success,
                acc: action.payload,
                callapidone: true
            }
        }

        case SIGNUP_ERROR: {
            console.log(action.payload.err);
            return {
                ...state,
                signUpSuccess: false,
                message: action.payload.message,
                callapidone: true
            }
        }

        default: return state
    }
}