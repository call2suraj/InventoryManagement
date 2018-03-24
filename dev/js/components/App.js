import React from 'react';
//import UserList from '../containers/user-list';
//import UserDetails from '../containers/user-detail';
import Login from '../containers/Login';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
require('../../scss/style.scss');

const App = () => (


  <MuiThemeProvider>
  <div>
<Header />
      <Login />

  </div>
 </MuiThemeProvider>

);

export default App;
