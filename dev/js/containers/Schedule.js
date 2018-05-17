import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import SelectCountry from '../components/SelectCountry';
import DatePicker from 'material-ui/DatePicker';
import Landing from '../containers/LandingPage';
import Badge from 'material-ui/Badge';
import SelectCategory from '../components/SelectCategory';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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

const items = [];
for (let i = 0; i < 24; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}


const mins = [];
for (let j = 0; j < 64; j++) {
  mins.push(<MenuItem value={j} key={j} primaryText={`${j}`} />);
}


class Schedule extends Component {

  constructor(props) {
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
    this.state = {
      values: [],
      minDate: minDate,
      maxDate: maxDate,
      timeValue: 0,
      minValue: 0,
      account: '',
      stat:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.calendarSelect = this.calendarSelect.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    
    this.handleStatChange = this.handleStatChange.bind(this);
    this.handleAccountChange = this.handleAccountChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChangeTime(event, index, value) {
    this.setState({ timeValue: value });
  }

  handleChangeMin(event, index, value) {
    this.setState({ minValue: value });
  }


  handleChange(event, index, values) {
    this.setState({ values });
  }

  handleAccountChange(event, index, value) {
    this.setState({ account: value });
  }

  handleStatChange(event, index, value) {
    this.setState({ stat: value });
  }

  handleClick(event) {
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

    return (
      <div style={{ marginLeft: 100 }}>

        <text style={{ color: '#00bcd4', fontSize: 25 }}>Inventory Schedule</text>


        <MuiThemeProvider  >
          <div style={{ marginLeft: 170 }}>

            <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 50, paddingTop: 10, textAlign: 'center' }}>Country : </text>
              </div>
              <div>
                <SelectCountry />
              </div>
            </div>



            <div style={{ display: 'flex' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}> Date : </text>
              </div>
              <div>
                <DatePicker textFieldStyle={{ width: 500 }} style={{ width: 800, marginLeft: 22 }} onChange={this.calendarSelect} />
              </div>
            </div>


            <div style={{ display: 'flex', marginTop: 5 }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Fiscal Year : </text>
              </div>
              <div>
                <TextField style={{ marginLeft: 15, marginRight: 25, width: 510 }} />
              </div>
            </div>


            <div style={{ display: 'flex', marginTop: 5 }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Location Number : </text>
              </div>
              <div>
                <TextField style={{ marginLeft: 15, marginRight: 25, width: 510 }} />
              </div>
            </div>
            <br />

            <div style={{ display: 'flex', marginTop: 5 }}>
              <div style={{ width: 120, textAlign: 'right' }}>
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>City: </text>
              </div>
              <div>
                <text style={{ marginLeft: 10, fontSize: 18, marginTop: 40, paddingTop: 30 }}>BROWNSVILLE </text>
              </div>

              <div style={{ width: 100, textAlign: 'right' }}>
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>State : </text>
              </div>
              <div>
                <text style={{ marginLeft: 10, fontSize: 18, marginTop: 40, paddingTop: 30 }}>TX</text>
              </div>

              <div style={{ width: 130, textAlign: 'right' }}>
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Banner : </text>
              </div>
              <div>
                <text style={{ marginLeft: 10, fontSize: 18, marginTop: 40, paddingTop: 30 }}>Banner WM Supercenter </text>
              </div>
            </div>



            <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
              <div style={{ width: 190, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 50, paddingTop: 12, textAlign: 'right' }}>Time : </text>
              </div>
              <div>
                <SelectField style={{ margin: 8, }}
                  value={this.state.timeValue}
                  onChange={this.handleChangeTime}
                  maxHeight={190}
                >
                  {items}
                </SelectField>

                <SelectField style={{ margin: 8 }}
                  value={this.state.minValue}
                  onChange={this.handleChangeMin}
                  maxHeight={190}
                >
                  {mins}
                </SelectField>


              </div>
            </div>


            <div style={{ display: 'flex', paddingTop: 5 }}>
              <div style={{ width: 200, textAlign: 'right' }}>
                <text style={{ fontSize: 18, }}>Dept/Category Number: </text>
              </div>
              <div>
                <SelectCategory />
              </div>
            </div>


            <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Crew: </text>
              </div>
              <div>
                <SelectField
                  value={this.state.account}
                  onChange={this.handleAccountChange} style={{ marginLeft: 10, marginRight: 25, width: 525 }}
                >
                  <MenuItem value={"Onsite"} primaryText="Onsite" />
                  <MenuItem value={"Offsite"} primaryText="Offsite" />
                  <MenuItem value={"Staff"} primaryText="Staff" />
                </SelectField>
              </div>
            </div>


            <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Status: </text>
              </div>
              <div>
                <SelectField
                  value={this.state.stat}
                  onChange={this.handleStatChange} style={{ marginLeft: 10, marginRight: 25, width: 525 }}
                >
                  <MenuItem value={"Active"} primaryText="Active" />
                  <MenuItem value={"Inactive"} primaryText="Inactive" />
                  <MenuItem value={"Pending"} primaryText="Pending" />
                </SelectField>
              </div>
            </div>


            <div style={{ display: 'flex', marginTop: 5, marginLeft: 175 }}>

              <div style={{ width: 350, textAlign: 'left' }}>
                <Checkbox
                  label="Retrieve and Update SKU" labelStyle={{ color: '#b4b4b4', marginBottom: 10, }}
                />
              </div>
              <div style={{ width: 250, textAlign: 'left' }}>
                <Checkbox
                  label="Financial Count" labelStyle={{ color: '#b4b4b4', marginBottom: 10, }}
                />
              </div>
            </div>






            <div style={{ display: 'flex', marginTop: 5, marginLeft: 175 }}>

              <div style={{ width: 350, textAlign: 'left' }}>
                <Checkbox
                  label="Allow to post Financial adjustments" labelStyle={{ color: '#b4b4b4', marginBottom: 10, }}
                />
              </div>
              <div style={{ width: 250, textAlign: 'left' }}>
                <Checkbox
                  label="Clear Open Receiving" labelStyle={{ color: '#b4b4b4', marginBottom: 10, }}
                />
              </div>
            </div>





            <div style={{ display: 'flex', }}>
              <div style={{ width: 200, textAlign: 'right' }}><br />
                <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>Dept/Category Reason: </text>
              </div>
              <div style={{ width: 500, textAlign: 'right', marginLeft: 5, }}>
                <TextField style={{ width: 550, textAlign: 'right' }}


                  multiLine={true}
                  rows={2}
                />
              </div>
            </div>


            <div style={{ marginTop: 30, textAlign: 'center' }}>
              <RaisedButton label="Create" primary={true} style={{ width: 250, margin: 10 }}
                onClick={(event) => this.handleClick(event)} />

              <RaisedButton label="Upload" primary={true} style={{ width: 250, margin: 10 }}
                onClick={(event) => this.handleClick(event)} />
            </div>

          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default Schedule;
