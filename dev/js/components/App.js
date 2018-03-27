import React from 'react';
//import UserList from '../containers/user-list';
//import UserDetails from '../containers/user-detail';
import Login from '../containers/Login';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import UserLogin from '../containers/UserLogin';
require('../../scss/style.scss');

const App = () => (


  <MuiThemeProvider>
  <div>
      <Header />
      <div style={{ position: 'fixed',display: 'flex',marginLeft:'480',marginTop:'100', borderWidth:1,}}>
        <Login/>
      </div>

  </div>
 </MuiThemeProvider>

);

export default App;
