import {combineReducers} from 'redux';
import khuNhaListReducer from './khuNhaListReducer';
import khuNhaReducer from './khuNhaReducer';

const reducer = combineReducers({
    khuNhaListReducer: khuNhaListReducer,
    khuNhaReducer: khuNhaReducer
})
export default reducer
