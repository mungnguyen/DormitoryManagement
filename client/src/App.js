import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import AdminHome from './components/admin/adminHome'


// const PrivateRoute = ({component: Component, ...rest})=>(
// <Route {...rest}
//  render={props=> localStorage.getItem("signined") ? 
//  <Component {...props} /> : <Redirect to="/"/>} 
//  />
// )
class App extends Component {
  render() {
    return (
      <div>
       <Router>
       <div>
       <Switch>
         <Route exact path='/' component={AdminHome}/>
         {/* <PrivateRoute exact path='/home' component={userPage}/>
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