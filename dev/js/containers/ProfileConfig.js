import React, { Component } from 'react';
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
import Badge from 'material-ui/Badge';
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
      values: [],
      minDate: minDate,
      maxDate: maxDate
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.calendarSelect = this.calendarSelect.bind(this);
  }

  handleChanges(event, index, value) {
    this.setState({ value });
  }

  handleChange(event, index, values) {
    this.setState({ values });
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
    const { values } = this.state;
    return (


      <MuiThemeProvider  >
        <div >
          <div style={{ marginLeft: 170, border: '1px solid gray' }}>
            <text style={{ margin: 15, paddingTop: 15, fontSize: 20, color: '#00bcd4' }}>Profile Configurations</text>
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
                  value={this.state.values} multiple={true}
                  onChange={this.handleChange} style={{ width: 500, marginLeft: 22 }}
                >
                  <MenuItem value={1} primaryText="United State" />
                  <MenuItem value={2} primaryText="United Kingdom" />
                  <MenuItem value={3} primaryText="Mexico" />
                  <MenuItem value={4} primaryText="India" />
                  <MenuItem value={5} primaryText="Canada" />
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
                  onChange={this.handleChange} style={{ width: 500, marginLeft: 22 }}
                >
                  {this.menuItems(values)}
                </SelectField>
              </div>
            </div>


            <div style={{ display: 'flex' }}>
              <div style={{ width: 250, textAlign: 'right' }}>
                <Checkbox
                  label="Active" labelPosition="left"
                  style={styles.checkbox}
                />
              </div>
              <div>

              </div>
            </div>
            <div style={{ marginTop: 30, marginBottom: 30, textAlign: 'center', }}>
              <RaisedButton label="Save" primary={true} style={{ width: 330, }}
                onClick={(event) => this.handleClick(event)} />
            </div>

          </div>
          <div style={{ marginLeft: 170, marginTop: 15 }}>
            <ProfileTable />
          </div>
        </div>
      </MuiThemeProvider>






    );
  }
}

export default ProfileConfig;
