import {combineReducers} from 'redux';
import khuNhaListReducer from './khuNhaListReducer';
import adminReducer from './adminReducer';
import phongReducer from './phongReducer';

const reducer = combineReducers({
    khuNha: khuNhaListReducer,
    admin: adminReducer,
    phong: phongReducer
})
export default reducer
