import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginAdmin from './components/admin/loginPage';
import AdminHome from './components/admin/adminHome';
import QuanLyPhong from './components/admin/quanLyPhongPage';
import LoginSinhVien from './components/sinhvien/login';
import SinhVienHome from './components/sinhvien/home';
import QuanLyDonDangKi from './components/admin/quanLyDonDangKi';
import QuanLyHopDong from './components/admin/quanLyHopDong';
import QuanLySVTrongKTX from './components/admin/quanLySVTrongKTX';
import QuanLySVRoiKTX from './components/admin/quanLySVRoiKTX';
import QuanLyThietBi from './components/admin/quanLyThietBi';
import QuanLyThuChi from './components/admin/quanLyThuChi';
import QuanLyDienNuoc from './components/admin/quanLyDienNuoc';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => localStorage.getItem("signined") && (localStorage.getItem("role") == "admin") ?
      <Component {...props} /> : <Redirect to="/admin" />}
  />
)


const PrivateRouteStudent = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => localStorage.getItem("signined") && (localStorage.getItem("role") == "sinhvien")?
      <Component {...props} /> : <Redirect to="/" />}
  />
)

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/admin' component={LoginAdmin} />
              <PrivateRouteAdmin exact path='/admin/home' component={AdminHome} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-phong' component={QuanLyPhong} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-don-dang-ki' component={QuanLyDonDangKi} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-hop-dong' component={QuanLyHopDong} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-sinh-vien-trong-ktx' component={QuanLySVTrongKTX} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-sinh-vien-roi-ktx' component={QuanLySVRoiKTX} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-thiet-bi' component={QuanLyThuChi} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-thu-chi' component={QuanLyThietBi} />
              <PrivateRouteAdmin exact path='/admin/quan-ly-dien-nuoc' component={QuanLyDienNuoc} />

              {/* Sinh Vien */}
              <Route exact path='/' component={LoginSinhVien} />
              <PrivateRouteStudent exact path='/home' component={SinhVienHome} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;