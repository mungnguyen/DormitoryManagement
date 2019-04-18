import { SUA_KHU_NHA, XOA_KHU_NHA} from '../actions/types';

const initialState = {
  updateSucces: false,
  delete: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SUA_KHU_NHA: {
            return ({
                ...state, updateSucces: action.payload
            });
        }

        case XOA_KHU_NHA: {
            return ({
                ...state, delete: action.payload
            })
        }

        default:
        return state;
    }
}
