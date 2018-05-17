import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Ionicon from 'react-ionicons';
import LocalizedStrings from 'react-localization';
import App from '../components/App';
import UserLogin from '../containers/UserLogin';
import LandingPage from '../containers/LandingPage';
import {
  Icon_Flag_BG,
  Icon_Flag_US,
  Icon_Flag_CA,
  Icon_Flag_FR,
  Icon_Flag_IN,
  Icon_Flag_DE,
  Icon_Flag_MX
} from 'material-ui-country-flags';

let strings = new LocalizedStrings({
  en:{
    how:"How do you want your egg today?",
  },
  it: {
    how:"Come vuoi il tuo uovo oggi?",
  }
});

export default class LanguageChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      languageChoice:'en'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.onSetLanguageToItalian = this.onSetLanguageToItalian.bind(this);
    this.onSetLanguageToEnglish = this.onSetLanguageToEnglish.bind(this);
    this.onSetLanguageToIndian = this.onSetLanguageToIndian.bind(this);

  }

  onSetLanguageToItalian (){
    if(this.props.showPage == 'login'){
      ReactDOM.render(<App locale="it"/>, document.getElementById('root'));
    }else{
      ReactDOM.render(<LandingPage locale="it"/>, document.getElementById('container'));
    }
   
    strings.setLanguage('it');
    this.handleRequestClose();
  }
  onSetLanguageToEnglish (){
    if(this.props.showPage == 'login'){
      ReactDOM.render(<App locale="en"/>, document.getElementById('root'));
    }else{
      ReactDOM.render(<LandingPage locale="en"/>, document.getElementById('container'));
    }
    strings.setLanguage('en');
    this.handleRequestClose();
  }

  onSetLanguageToIndian(){
    if(this.props.showPage == 'login'){
      ReactDOM.render(<App locale="in"/>, document.getElementById('root'));
    }else{
      ReactDOM.render(<LandingPage locale="in"/>, document.getElementById('container'));
    }
    
    strings.setLanguage('in');
    this.handleRequestClose();
  }
  handleClick (event)  {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });

  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log("In language change "+this.props.showPage);
    return (
      <div>
          <Ionicon icon="md-settings" style={{paddingTop:15, marginRight: 11}} fontSize="25px" onClick={this.handleClick} color="white"/>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="English-US" leftIcon={<Icon_Flag_US />} onClick={this.onSetLanguageToEnglish}/>
            <MenuItem primaryText="Spanish-Argentina" leftIcon={<Icon_Flag_BG />} onClick={this.onSetLanguageToItalian}/>
            <MenuItem primaryText="French-Canada" leftIcon={<Icon_Flag_CA />}/>
            <MenuItem primaryText="Spanish-Costa Rica" leftIcon={<Icon_Flag_DE />}/>
            <MenuItem primaryText="Spanish-France" leftIcon={<Icon_Flag_FR />}/>
            <MenuItem primaryText="India" leftIcon={<Icon_Flag_IN />} onClick={this.onSetLanguageToIndian}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
