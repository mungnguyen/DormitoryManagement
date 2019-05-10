import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import LoginAdmin from './components/admin/loginPage';
import AdminHome from './components/admin/adminHome';
import ChangePassPage from './components/admin/changePassPage'


const PrivateRouteAdmin = ({component: Component, ...rest})=>(
<Route {...rest}
 render={props=> localStorage.getItem("signined") ? 
 <Component {...props} /> : <Redirect to="/"/>} 
 />
)

class App extends Component {
  render() {
    return (
      <div>
       <Router>
       <div>
       <Switch>
         <Route exact path='/admin' component={LoginAdmin}/>
         <PrivateRouteAdmin exact path='/admin/home' component={AdminHome}/>
         <PrivateRouteAdmin exact path='/admin/thay-doi-mat-khau' component={ChangePassPage}/>
         {/*
         <Route exact path='/contact' component={contactPage}/>
         <PrivateRoute exact path='/user' component={userInfo}/>
         <Route exact path='/detailpage' component={detailPage}/> */}
         </Switch>
         </div>
       </Router>
      </div>
    );
  }
}

export default App;