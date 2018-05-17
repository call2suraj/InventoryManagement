import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiTable from '../components/MuiTable';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  customWidth: {
    width: 150,
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 6,
  },

}
class AddLineLanding extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: '',
      banner:'',
      account:'',
      recon:'',
      type:'',
      name:''
    }
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleBannerChange = this.handleBannerChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.handleReconChange = this.handleReconChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleCountryChange (event, index, value){
    this.setState({country:value});
  }

  handleBannerChange (event, index, value){
    this.setState({banner:value});
  }
  handleAccountChange (event, index, value){
    this.setState({account:value});
  }
  handleReconChange (event, index, value){
    this.setState({recon:value});
  }
  handleTypeChange (event, index, value){
    this.setState({type:value});
  }
  handleNameChange (event, index, value){
    this.setState({name:value});
  }

  handleClick(){
    ReactDOM.render(<MuiTable />, document.getElementById('container'));
  }

  render() {

    return (
      <MuiThemeProvider  style={{width:1000, alignContent:'center'}}>
        <Card style={{marginLeft:215, width:1000, alignContent:'center'}}>
          <CardHeader
            title="Add Line"
            titleStyle={{fontSize:20, color:'#00bcd4'}}
          />
          <div >

            <Divider />
            <div style={{ display: 'flex', marginLeft:55}}>
              <SelectField
                floatingLabelText="Country"
                value={this.state.country}
                onChange={this.handleCountryChange} style={{marginLeft:10, marginRight:25}}
              >
                <MenuItem value={"Canada"} primaryText="Canada" />
                <MenuItem value={"India"} primaryText="India" />
                <MenuItem value={"Mexico"} primaryText="Mexico" />
                <MenuItem value={"UK"} primaryText="UK" />
                <MenuItem value={"USA"} primaryText="USA" />
              </SelectField>

              <SelectField
                floatingLabelText="Banner"
                value={this.state.banner}
                onChange={this.handleBannerChange} style={{marginLeft:25, marginRight:10}}
              >
                <MenuItem value={"CA-Wal-Mart"} primaryText="CA-Wal-Mart" />
                <MenuItem value={"IN-Wal-Mart"} primaryText="IN-Wal-Mart" />
                <MenuItem value={"Mx-Wal-Mart"} primaryText="Mx-Wal-Mart" />
                <MenuItem value={"UK-Wal-Mart"} primaryText="UK-Wal-Mart" />
                <MenuItem value={"USA-Wal-Mart"} primaryText="USA-Wal-Mart" />
              </SelectField>
            </div>



            <div style={{ display: 'flex', marginLeft:55}}>

              <SelectField
                floatingLabelText="Recon Accounting Method"
                value={this.state.account}
                onChange={this.handleAccountChange} style={{marginLeft:10, marginRight:25}}
              >
                <MenuItem value={"Cost"} primaryText="Cost" />
                <MenuItem value={"Retail"} primaryText="Retail" />
                <MenuItem value={"Margin"} primaryText="Margin" />
              </SelectField>

              <SelectField
                floatingLabelText="Type"
                value={this.state.recon}
                onChange={this.handleReconChange} style={{marginLeft:25, marginRight:10}}
              >
                <MenuItem value={"Schedule"} primaryText="Schedule" />
                <MenuItem value={"Deffer"} primaryText="Deffer" />
                <MenuItem value={"Rejected"} primaryText="Rejected" />
              </SelectField>
            </div>


            <div style={{ display: 'flex',marginLeft:55}}>
              <TextField
                floatingLabelText="Number" style={{marginLeft:10, marginRight:25}}
              />
              <TextField
                floatingLabelText="Tollarance Amount" style={{marginLeft:25, marginRight:10}}
              />
            </div>


            <div style={{ display: 'flex',marginLeft:55}}>
              <SelectField
                floatingLabelText="Name"
                value={this.state.type}
                onChange={this.handleTypeChange} style={{marginLeft:10, marginRight:25}}
              >
                <MenuItem value={"Schedule1"} primaryText="Open Receiving - Schedule 1" />
                <MenuItem value={"Schedule2"} primaryText="Open Receiving - Schedule 2" />
                <MenuItem value={"Schedule3"} primaryText="Open Receiving - Schedule 3" />


              </SelectField>



              <SelectField
                floatingLabelText="Recon Name"
                value={this.state.name}
                onChange={this.handleNameChange} style={{marginLeft:25, marginRight:10}}
              >
                <MenuItem value={"CanadaCostRecon"} primaryText="Canada Cost Recon-Walmart GM" />
                <MenuItem value={"IndiaCostRecon"} primaryText="India Cost Recon-Walmart GM" />
                <MenuItem value={"MexicoCostRecon"} primaryText="Mexico Cost Recon-Walmart GM" />
                <MenuItem value={"UKCostRecon"} primaryText="UK Cost Recon-Walmart GM" />
                <MenuItem value={"USACostRecon"} primaryText="USA Cost Recon-Walmart GM" />
              </SelectField>


            </div>

            <div style={{ display: 'flex',marginLeft:55}}>
              <TextField
                floatingLabelText="Multiplier" style={{marginLeft:10, marginRight:25}}
              />

              <DatePicker hintText="Effective Date" floatingLabelText="Effective Date" style={{width:100}} textFieldStyle={{marginLeft:25}}/>

            </div>
            <div style={{ display: 'flex',marginLeft:65, marginRight:15, marginTop:20, }}>
              <text style={{paddingTop:4, color:'#b4b4b4', fontSize:18}}>Line Accounting
                Method</text>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={{ display: 'flex' ,marginLeft:15,marginRight:18,
                color:'#b4b4b4', width:85,marginBottom:15}}>

                <RadioButton
                  value="Cost"
                  label="Cost"
                  labelStyle={{color:'#b4b4b4',marginRight:22 }}
                />
                <RadioButton
                  value="Retail"
                  label="Retail"
                  labelStyle={{color:'#b4b4b4',marginRight:25}}
                />
                <RadioButton
                  value="Margin"
                  label="Margin"
                  labelStyle={{color:'#b4b4b4',marginRight:22}}
                />

              </RadioButtonGroup>
            </div>
            <div style={{marginLeft:60}}>
              <Checkbox
                label="Allow Edit" labelStyle={{color:'#b4b4b4', marginBottom:10, }}
              />
            </div>

            <Divider />


          </div>
          <div style={{marginTop:30, marginBottom:30, textAlign:'center' }}>
            <RaisedButton label="Add" primary={true} style={{ width:330, }}
                          onClick={(event) => this.handleClick(event)}/>
          </div>
        </Card>

      </MuiThemeProvider>
    );
  }
}



export default AddLineLanding;
