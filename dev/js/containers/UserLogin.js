import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import LocalizedStrings from 'react-localization';
import ReactDOM from 'react-dom';
import Landing from './LandingPage';
import Login from '../containers/Login';
import App from '../components/App';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginTop:15,
    marginBottom: 16,
    color:'white',
    borderColor:'green'
  },

};

let strings = new LocalizedStrings({
  en:{
    Login:"Login",
    UserName:'User Name',
    Password:'Password',
    Domain:'Domain',
    Remember:'Remember Me',
    Enter:'Enter your Username',
    EnterPwd:'Enter your Password'
  },
  it: {
    Login:"El login",
    UserName:'Usuario',
    Password:'Contraseña',
    Domain:'Dominio',
    Remember:'Recuérdame',
    Enter:'Inserisci il tuo nome utente',
    EnterPwd:'Inserisci la tua password'
  },
  in:{
    Login:"लॉग इन करें",
    UserName:'प्रयोक्ता नाम',
    Password:'पारण शब्द',
    Domain:'डोमेन',
    Remember:'याद है',
    Enter:'अपने उपयोगकर्ता नाम दर्ज करें',
    EnterPwd:'अपना पासवर्ड डालें'
  }
});


class UserLogin extends Component {
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
    value: 1,
    code:'en',
    errorText: '',
    errorText1: ''
  }
    this.handleChange = this.handleChange.bind(this);
    this.returnDomain = this.returnDomain.bind(this);

 }



  onSetLanguageToItalian (){
  let code = this.props.locale || this.state.code
    strings.setLanguage(code);
  }

   handleChange (event, index, value){
     this.setState({value});
   }

  handleClick(event){
    this.setState({ errorText: '', errorText1: ''})
    console.log(this.state.username);
    console.log(this.state.password);


    if(this.state.username ==='ninja' && this.state.password ==='ninja'){
      ReactDOM.render(<App username="ninja" />, document.getElementById('root'));
    }else{

      if(this.state.username =='' ){
        this.setState({ errorText1: 'Invalid user name' })

      }
      if( this.state.password==''){
        this.setState({ errorText: 'Invalid password' })

      }
      if(this.state.username !='' && this.state.password !=''){
        this.setState({ errorText: 'Invalid User Name or Password' })
      }

    }
  }
returnDomain(){
     if(this.props.locale =='en'){
       return(<SelectField
         floatingLabelText={strings.Domain}
         value={this.state.value}
         onChange={this.handleChange} style={{width:460, fontSize:'20'}}
       >
         <MenuItem value={1} primaryText="AR" />
         <MenuItem value={2} primaryText="BR" />
         <MenuItem value={3} primaryText="CA" />
         <MenuItem value={4} primaryText="CN" />
         <MenuItem value={5} primaryText="CR" />
         <MenuItem value={6} primaryText="GT" />
         <MenuItem value={7} primaryText="HN" />
         <MenuItem value={8} primaryText="HomeOffice" />
         <MenuItem value={9} primaryText="IN" />
         <MenuItem value={10} primaryText="JP" />
         <MenuItem value={11} primaryText="K2" />
         <MenuItem value={12} primaryText="MX" />
       </SelectField>);
     }
  if(this.props.locale =='it'){
    return(<SelectField
      floatingLabelText={strings.Domain}
      value={this.state.value}
      onChange={this.handleChange} style={{width:460, fontSize:'20'}}
    >
      <MenuItem value={1} primaryText="Toronto" />
      <MenuItem value={2} primaryText="Rome" />
      <MenuItem value={3} primaryText="Paris" />
    </SelectField>);
  }
  if(this.props.locale =='in'){
    return(<SelectField
      floatingLabelText={strings.Domain}
      value={this.state.value}
      onChange={this.handleChange} style={{width:460, fontSize:'20'}}
    >
      <MenuItem value={1} primaryText="दिल्ली" />
      <MenuItem value={2} primaryText="बैंगलोर" />
      <MenuItem value={3} primaryText="हैदराबाद" />
    </SelectField>);
  }
}
render() {
  console.log("language in UserLogin Page "+this.props.locale);
    return (
      <MuiThemeProvider >
      <div style={{textAlign:'center'}}>

        <img src='../inventory.png' height="100" width="100" style={{marginLeft:400}}/><br/>
        <text style={{marginLeft:450, fontSize:31,color:'#2a6595'}}>Global Inventory System</text>
        <div style={{textAlign:'left', backgroundColor:'whitesmoke',
          borderWidth:1,width:620,height:450, borderRadius: '16px',marginLeft:'450'}} onload={this.onSetLanguageToItalian()}>

          <div >
            <div style={{marginLeft:2}}>
              <h2 style={{marginLeft:20,paddingTop:5,}}> {strings.Login}</h2>
              <Divider style={{margin:5}}/>

              <div style={{marginLeft:22 }}>
                <TextField
                  hintText={strings.Enter} errorText= {this.state.errorText1}
                  floatingLabelText={strings.UserName} style={{width:460}}
                  onChange = {(event,newValue) => this.setState({username:newValue})}
                />
                <br/>
                <TextField
                  type="password"
                  hintText={strings.EnterPwd} style={{width:460}} errorText= {this.state.errorText}
                  floatingLabelText={strings.Password}
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                {this.returnDomain()}

                <Checkbox
                  label={strings.Remember}
                  style={styles.checkbox}
                />
                <div style={{marginTop:30, textAlign:'center' }}>
                  <RaisedButton label={strings.Login} primary={true} style={{ width:330, }}
                                onClick={(event) => this.handleClick(event)}/>
                </div>

                <br/>
                <br/>

              </div>
            </div>
          </div>
        </div>
      </div>
      </MuiThemeProvider >
    );
  }
}
const style = {
 margin: 15,
};
export default UserLogin;
