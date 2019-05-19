import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginAdmin from './components/admin/loginPage';
import AdminHome from './components/admin/adminHome';
import QuanLyPhong from './components/admin/quanLyPhongPage';
import LoginSinhVien from './components/sinhvien/login';
import SinhVienHome from './components/sinhvien/home';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => localStorage.getItem("signined") ?
      <Component {...props} /> : <Redirect to="/" />}
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
              {/*
         <Route exact path='/contact' component={contactPage}/>
         <PrivateRoute exact path='/user' component={userInfo}/>
         <Route exact path='/detailpage' component={detailPage}/> */}
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