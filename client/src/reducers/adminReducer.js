import { API_CALLING, LOGIN_ADMIN, SUA_THONG_TIN_ADMIN } from '../actions/types';

const initState = {
    callapidone: false,
    acc: {} 
}

export const adminReducer = function(state = initState, action) {
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
    }
}