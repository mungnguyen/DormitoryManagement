import { HIEN_THI_CAC_KHU_NHA, LAY_KHU_NHA_ID, THEM_KHU_NHA, SUA_KHU_NHA, XOA_KHU_NHA} from '../actions/types';

const initialState = {
  KhuNhas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HIEN_THI_CAC_KHU_NHA: {
      return {
        ...state,
        KhuNhas: action.payload
      };
    }

    case LAY_KHU_NHA_ID: {
        const khuNha = action.payload
        return {...state, khuNha};
    }

    case THEM_KHU_NHA: {
      const khuNha = action.payload;
      return {
        ...state,
        ...khuNha
      };
    }

    case SUA_KHU_NHA: {
      // const khuNha = action.payload
      const khuNhas = state.khuNhas.filter(khuNha => khuNha.khuNhaId != action.payload.khuNhaId);
      return {
        ...state, khuNhas
      }
    }

    case XOA_KHU_NHA: {
      const khuNhas = state.khuNhas.filter(khuNha => khuNha.khuNhaId != action.payload);
      return {
        ...state, khuNhas
      }
    }

    default:
      return state;
  }
}
