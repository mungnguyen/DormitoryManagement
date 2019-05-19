import { HIEN_THI_CAC_PHONG, LAY_PHONG_ID, THEM_PHONG, SUA_PHONG, XOA_PHONG, API_CALLING } from '../actions/types';

const initialState = {
    Phongs: [],
    callapidone: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case API_CALLING: {
            return {
                ...state,
                callapidone: false
            }
        }

        case HIEN_THI_CAC_PHONG: {
            console.log("Hien thi cac phong ok");
            return {
                ...state,
                success: action.payload.success,
                Phongs: action.payload.data,
                callapidone: true
            };
        }

        case LAY_PHONG_ID: {
            return {
                ...state,
                success: action.payload.success,
                Phong: action.payload.data,
                callapidone: true
            };
        }

        case THEM_PHONG: {
            return {
                ...state,
                callapidone: true
            };
        }

        case SUA_PHONG: {
            return {
                ...state,
                callapidone: true
            }
        }

        case XOA_PHONG: {
            return {
                ...state,
                callapidone: true
            }
        }

        default:
            return state;
    }
}
