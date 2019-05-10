import { API_CALLING, LOGIN_ADMIN, SUA_THONG_TIN_ADMIN } from '../actions/types';

const initState = {
    callapidone: false,
    success: false,
    acc: {}
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
                success: action.payload.success,
                acc: action.payload.data,
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

        default: return state
    }
}