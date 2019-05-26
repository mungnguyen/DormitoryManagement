import { HIEN_THI_CAC_KHU_NHA, LAY_KHU_NHA_ID, THEM_KHU_NHA, SUA_KHU_NHA, XOA_KHU_NHA, API_CALLING } from '../actions/types';

const initialState = {
  KhuNhas: [],
  callapidone: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case API_CALLING: {
      return {
          ...state,
          callapidone: false
      }
    }

    case HIEN_THI_CAC_KHU_NHA: {
      console.log("Hien thi cac khu nha ok")
      return {
        ...state,
        KhuNhas: action.payload
      };
    }

    case LAY_KHU_NHA_ID: {
        const khuNha = action.payload
        return {
          ...state,
          khuNha: khuNha,
          callapidone: true
        };
    }

    case THEM_KHU_NHA: {
      return {
        ...state,
        callapidone: true
      };
    }

    case SUA_KHU_NHA: {
      return {
        ...state,
        callapidone: true
      }
    }

    case XOA_KHU_NHA: {
      return {
        ...state, 
        callapidone: true
      }
    }

    default:
      return state;
  }
}
