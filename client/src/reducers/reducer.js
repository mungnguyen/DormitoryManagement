import {combineReducers} from 'redux';
import khuNhaListReducer from './khuNhaListReducer';
import adminReducer from './adminReducer';
import phongReducer from './phongReducer';
import sinhVienReducer from './sinhVienReducer';
import quanLyDangKiReducer from './quanLyDangKiReducer';
import quanLyDonRoiKTXReducer from './quanLyDonRoiKTXReducer';
import quanLyDienNuocReducer from './quanLyDienNuocReducer';
import thietBiReducer from './thietBiReducer';
import thuChiReducer from './thuChiReducer';

const reducer = combineReducers({
    khuNha: khuNhaListReducer,
    admin: adminReducer,
    phong: phongReducer,
    sinhVien: sinhVienReducer,
    quanLyDangKi: quanLyDangKiReducer,
    quanLyDonRoiKTX: quanLyDonRoiKTXReducer,
    dienNuoc: quanLyDienNuocReducer,
    thietBi: thietBiReducer,
    thuChi: thuChiReducer
})
export default reducer
