import React, { Component } from 'react';
//import ProfileConfig from '../containers/P'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

//import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import SelectCountry from '../components/SelectCountry';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import ProfileTable from './ProfileTable';
const EditTable = require('material-ui-table-edit')
import Badge from 'material-ui/Badge';
import Landing from './LandingPage';
require('../../scss/style.scss');

const names = [
  'US-Walmart',
  'US-Other Support',
  'US-Real Estate',
  'US-RX Stand Alone',
  'US-Sam\'s Club',
  'US-samsclub.com',
  'US-Super Ahorros',
  'Bradley Wilkerson',
  'Virginia Andrews',
];

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginTop: 15,
    marginBottom: 16,
    color: 'white',
    borderColor: 'green'
  },

};



const headers = [
  { value: 'Country', type: 'TextField', width: 300 },
  { value: 'Banner', type: 'TextField', width: 300 },
  { value: 'Active', type: 'Toggle', width: 300 },
  { value: 'Delete', type: 'ReadOnly', width: 100 }
]

const rows = [
  {
    "columns": [
      { "value": "USA", "selected": true, "rowId": 0, "id": 0, "width": 200 },
      { "value": "Pali - Soft Discount", "selected": true, "rowId": 0, "id": 1, "width": 200 },
      { "selected": false, "rowId": 0, "id": 2, "width": 40 }
    ], "selected": false, "id": 3
  },

  {
    "columns": [
      { "value": "India", "selected": true, "rowId": 1, "id": 1, "width": 200 },
      { "value": "IN-Wal-Mart", "selected": true, "rowId": 1, "id": 2, "width": 200 },
      { "selected": true, "rowId": 1, "id": 3, "width": 40 }
    ], "selected": false, "id": 4
  },
  {
    "columns": [
      { "value": "UK", "selected": true, "rowId": 2, "id": 0, "width": 200 },
      { "value": "Pali - Soft Discount", "selected": true, "rowId": 2, "id": 1, "width": 200 },
      { "selected": false, "rowId": 2, "id": 2, "width": 40 }
    ], "selected": false, "id": 3
  }

]


const onChange = (row) => {
  console.log("------" + JSON.stringify(row));
  if(rows.id > 1){
    rows.push(row);

  }
}


class ProfileConfig extends Component {
  constructor(props) {
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
    this.state = {
      value: [],
      values: [],
      minDate: minDate,
      maxDate: maxDate,
      checked: false,
      rows:rows,
      open: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.calendarSelect = this.calendarSelect.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUnmount(){
    if((this.state.value =! '' && this.state.values == '') || (this.state.value == '' && this.state.values != '')) 
    {
     // this.setState({open: true});
     if (confirm("Are you sure you dont want to save you data ?")) {
       
     // this.render();
      
     }else{
      
      ReactDOM.render(<Landing />, document.getElementById('container'));
     }
    }
  }

  handleOpen  () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
    alert("going");
  };


  handleChanges(event, index, values) {
    this.setState({ values });
    console.log(this.state.values);
  }


  handleChange(event, index, value) {
    this.setState({ value });
    console.log(this.state.value);
  }
  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  


  handleClick(countrystr, bannerstr, selecstr){
    if(countrystr == '' || bannerstr == ''){
    alert("invalid data","wrong data");

    }else{
      console.log("----->>>>"+this.state.value+"-->"+this.state.values+"-->"+this.state.checked)
      const row = 
        {
          "columns": [
            { "value": this.state.value, "selected": true, "rowId": 0, "id": 0, "width": 200 },
            { "value": this.state.values, "selected": true, "rowId": 0, "id": 1, "width": 200 },
            { "selected": this.state.checked, "rowId": 0, "id": 5, "width": 40 }
          ], "selected": this.state.checked, "id": 0
        }
        console.log("---row---" + JSON.stringify(row));
      rows.push(row);
      console.log("---1---" + JSON.stringify(rows));
      this.setState({
        rows:rows,
        value: [],
        values: [],
      });
      console.log("---2---" + JSON.stringify(this.state.rows));
     
    }

  }

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  calendarSelect(event, date) {
    this.setState({ minDate: date });
    console.log("========>calValue==>" + this.state.calValue);
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];


    const { values } = this.state;
    console.log("--->"+this.state.value);
    console.log("--->>"+this.state.values);
    console.log("--c->>"+this.state.checked);
    
    return (
      <MuiThemeProvider  >
        <div >
          <Card style={{width:1200, marginLeft: 250, alignItems: 'center' }}>
            <text style={{ margin: 15, marginTop:10, paddingTop: 15, fontSize: 20, color: '#00bcd4' }}>Profile Configurations</text>
            <Divider style={{ margin: 5, display: 'flex', marginTop: 10, marginBottom: 10, }} />
            <div style={{ display: 'flex', marginLeft: 125, marginTop: 20, width: '600' }}>
              <div style={{ width: 80, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 50, paddingTop: 10, textAlign: 'center' }}>Name : </text>
              </div>
              <div >
                <TextField style={{ marginLeft: 22, width: 500 }}
                           disabled={true}
                           defaultValue="Global"
                />
              </div>
            </div>

            <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 50, paddingTop: 10, textAlign: 'center' }}>Country : </text>
              </div>
              <div>
                <SelectField
                  value={this.state.value} multiple={true}
                  onChange={this.handleChange} style={{ width: 500, marginLeft: 22 }}
                >
                  <MenuItem value={"United State"} primaryText="United State" />
                  <MenuItem value={"United Kingdom"} primaryText="United Kingdom" />
                  <MenuItem value={"Mexico"} primaryText="Mexico" />
                  <MenuItem value={"India"} primaryText="India" />
                  <MenuItem value={"Canada"} primaryText="Canada" />
                  <MenuItem value={"Brazil" } primaryText="Brazil" />
                  <MenuItem value={"Chile"} primaryText="Chile" />
                </SelectField>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Banner : </text>
              </div>
              <div>
                <SelectField
                  multiple={true}

                  value={values}
                  onChange={this.handleChanges} style={{ width: 500, marginLeft: 22 }}
                >
                  {this.menuItems(values)}
                </SelectField>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ width: 250, textAlign: 'right' }}>
                <Checkbox
                  label="Active" labelPosition="left" checked={this.state.checked}
                  style={styles.checkbox} onCheck={this.updateCheck.bind(this)}
                />
              </div>
              <div>

              </div>
            </div>
            <div style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', }}>
              <RaisedButton label="Save" primary={true} style={{ width: 330, marginBottom: 30,}}
                            onClick={(event) => this.handleClick(this.state.value, this.state.values,this.state.checked)} />
            </div>

          </Card>
          <div style={{ marginLeft: 250, marginTop: 15 }}>
          <div>

            <MuiThemeProvider>
              <EditTable
                onChange={onChange}
                rows={this.state.rows}
                headerColumns={headers}
                enableDelete={true}
              />
            </MuiThemeProvider>

          


          </div>
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default ProfileConfig;
