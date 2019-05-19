import {combineReducers} from 'redux';
import khuNhaListReducer from './khuNhaListReducer';
import adminReducer from './adminReducer';
import phongReducer from './phongReducer';
import sinhVienReducer from './sinhVienReducer';

const reducer = combineReducers({
    khuNha: khuNhaListReducer,
    admin: adminReducer,
    phong: phongReducer,
    sinhVien: sinhVienReducer
})
export default reducer
