import {combineReducers} from 'redux';
import khuNhaListReducer from './khuNhaListReducer';
import khuNhaReducer from './khuNhaReducer';
import adminReducer from './adminReducer';

const reducer = combineReducers({
    khuNhaListReducer: khuNhaListReducer,
    khuNhaReducer: khuNhaReducer,
    admin: adminReducer
})
export default reducer
