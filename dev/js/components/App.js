import React, {Component} from 'react';
import Login from '../containers/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import AddLine from '../containers/AddLine';
import UserLogin from '../containers/UserLogin';
import LocalizedStrings from 'react-localization';
import TableComponent from './TableComponent';
import ReactTables from './ReactTables';
import BootStrapTableExample from './BootStrapTableExample';
import Landing from '../containers/LandingPage';
require('../../scss/style.scss');

let strings = new LocalizedStrings({
  en:{
    how:"How do you want your egg today?",
  },
  it: {
    how:"Come vuoi il tuo uovo oggi?",
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      code:'en',
      username:'',
      password:'',
    }
    this.onSetLanguage = this.onSetLanguage.bind(this);
  }

  onSetLanguage (){
    let code = this.props.locale || this.state.code
    strings.setLanguage(code);
  }


  render() {
    this.onSetLanguage();
    return (
      <MuiThemeProvider >
        <div >

          {this.props.username ? <Header username={this.props.username} password={this.state.password}/>:<Header username={this.state.username} password={this.state.password}/>}
          <div id='container' style={{ position: 'center',display: 'flex',marginLeft:'65',marginTop:'10', borderWidth:1,}}>
            {this.props.username == null ? <UserLogin locale={this.props.locale || 'en'} /> : <Landing locale={this.props.locale || 'en'}/>}

            {/*<Login locale={this.props.locale}/>*/}
            {/*<ReactTables />*/}
            {/*<TableComponent />*/}
            {/*<BootStrapTableExample/>*/}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;