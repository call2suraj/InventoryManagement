import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

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
class UserLogin extends Component {
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
    value: 1,
  }
    this.handleChange = this.handleChange.bind(this);
 }

   handleChange (event, index, value){
     this.setState({value});
   }


render() {
    return (
      <div style={{textAlign:'left', backgroundColor:'whitesmoke',
        borderWidth:1,width:620,height:400, borderRadius: '16px'}}>

        <MuiThemeProvider>
          <div style={{marginLeft:2}}>
            <h2 style={{marginLeft:22,paddingTop:15}}>Login</h2>
            <Divider style={{margin:5}}/>

            <div style={{marginLeft:22 }}>
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username" style={{width:460}}
                onChange = {(event,newValue) => this.setState({username:newValue})}
                />
              <br/>
                <TextField
                  type="password"
                  hintText="Enter your Password" style={{width:460}}
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                <br/>
                <SelectField
                  floatingLabelText="Domain"
                  value={this.state.value}
                  onChange={this.handleChange} style={{width:460}}
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
                </SelectField>
                <Checkbox
                          label="Remember Me"
                          style={styles.checkbox} 
                        />

                <div style={{marginTop:15, textAlign:'center' }}>
                  <RaisedButton label="Login" primary={true} style={{ width:330, }}
                  onClick={(event) => this.handleClick(event)}/>
                </div>


                <br/>
                <br/>

            </div>

         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default UserLogin;
