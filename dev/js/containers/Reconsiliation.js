import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiDataTable } from 'mui-data-table';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import AddLine from '../containers/AddLine';
import { orange500, blue500, gray500 } from 'material-ui/styles/colors';
import Ionicon from 'react-ionicons';
import SelectCountry from '../components/SelectCountry';
import MenuItem from 'material-ui/MenuItem';
import SelectBanner from '../components/SelectBanner';
import DatePicker from 'material-ui/DatePicker';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const data = [
  { id: 1, LineName: 'Costa Rica', RetailAmount: '2.00', CostAmount: '1.23' },
  { id: 2, LineName: 'India', RetailAmount: '-2.00', CostAmount: '1.23' },
  { id: 3, LineName: 'Canada', RetailAmount: '-1.00', CostAmount: '1.23' },
  { id: 4, LineName: 'India', RetailAmount: '-2.20', CostAmount: '-2.14' },
  { id: 5, LineName: 'USA', RetailAmount: '2.40', CostAmount: '-2.14' },
  { id: 6, LineName: 'UK', RetailAmount: '4.00', CostAmount: '1.23' },
  { id: 7, LineName: 'USA', RetailAmount: '-3.10', CostAmount: '-2.14' },
  { id: 8, LineName: 'Mexico', RetailAmount: '2.00', CostAmount: '1.23' },
  { id: 9, LineName: 'UK', RetailAmount: '-2.00', CostAmount: '-2.18' },
  { id: 10, LineName: 'India', RetailAmount: '2.20', CostAmount: '1.23' },
  { id: 11, LineName: 'UK', RetailAmount: '4.00', CostAmount: '-3.14' },
  { id: 12, LineName: 'USA', RetailAmount: '3.00', CostAmount: '1.23' },
  { id: 13, LineName: 'Mexico', RetailAmount: '-2.00', CostAmount: '1.23' },
  { id: 14, LineName: 'UK', RetailAmount: '-2.00', CostAmount: '1.23' },
  { id: 15, LineName: 'India', RetailAmount: '4.00', CostAmount: '1.23' },
];

const retailConfig = {
  paginated: true,

  rowsPerPage: false,

  data: data,
  adjustForCheckbox: true,
  enableSelectAll: true,
  columns: [
    { property: 'id', title: 'Line Id' },
    { property: 'LineName', title: 'Line Name' },
    { property: 'RetailAmount', title: 'Retail Amount' },
    { property: 'CostAmount', title: 'Cost Amount' },

  ],
  viewSearchBarOnload: false // set to true or false. Default it is set to false. Shows the search bar or not depending on the value set
};

const costConfig = {
  paginated: true,

  rowsPerPage: false,

  data: data,
  adjustForCheckbox: true,
  enableSelectAll: false,
  columns: [
    { property: 'id', title: 'Line Id' },
    { property: 'LineName', title: 'Line Name' },
    { property: 'CostAmount', title: 'Cost Amount' },

  ],
  viewSearchBarOnload: false // set to true or false. Default it is set to false. Shows the search bar or not depending on the value set
};

export default class Reconsiliation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      value: 1,
      deptValue: [1, 2],
      user: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.menuItems = this.menuItems.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleDeptChange = this.handleDeptChange.bind(this);


  }
  handleChange(event, index, values) {
    this.setState({ value: values });
  }

  handleDeptChange(event, index, values) {
    this.setState({ deptValue: values });
  }

  handleUserChange(event, index, values) {
    this.setState({ user: values });
  }

  handleRowClick(event, index, values) {
    this.setState({ values });
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
  render() {
    return (
      <MuiThemeProvider>
        <div style={{ overflowY: 'scroll', height: 740, marginRight: 10 }}>
          <div style={{ marginRight: 15 }}>
            <Card style={{ margin: 5, }}>
              <CardHeader
                title="Inventory Reconciliation"
                titleStyle={{ fontSize: 20, color: '#00bcd4' }}
              />
              <div style={{ display: 'flex', borderWidth: 2, borderColor: 'red' }}>
                <div>
                  <SelectCountry showflag="show" />
                </div>
                <div>
                  <TextField
                    floatingLabelText="Location Number *" style={{ marginLeft: 165, marginRight: 15 }}
                    floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  />
                </div>
                <div>
                  <TextField
                    floatingLabelText="Fiscal Year *" style={{ marginLeft: 30, marginRight: 15 }}
                    floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  />
                </div>
              </div>
              <div style={{ marginTop: 30, textAlign: 'center', marginBottom: 10 }}>
                <RaisedButton label="Search" primary={true} style={{ width: 330, marginBottom: 10 }}
                />
              </div>
            </Card>
          </div>
          <Card style={{ margin: 5, marginRight: 15 }}>
            <div style={{ display: 'flex', borderWidth: 2, borderColor: 'red', }}>
              <div style={{ width: 1100 }}>
                <Tabs>
                  <Tab label="Retail" >
                    <MuiDataTable config={retailConfig} footerStyle={{ textAlign: 'center', width: 175, }} onClick={this.handleRowClick} />
                  </Tab>
                  <Tab label="Cost">
                    <MuiDataTable config={costConfig} footerStyle={{ margin: 2, textAlign: 'left', width: 175, }} onClick={this.handleRowClick} />
                  </Tab>
                </Tabs>
              </div>
              <div style={{ width: 400 }}>
                <TextField
                  floatingLabelText="Location Number *" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="3083"
                />
                <TextField
                  floatingLabelText="Banner" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="WM Supercenter"
                />
                <TextField
                  floatingLabelText="Store Manager" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="Suraj Behera"
                />
                <DatePicker
                  style={{ marginLeft: 55, marginRight: 15 }}
                  autoOk={this.state.autoOk}
                  floatingLabelText="Inventory Date"
                  defaultDate={new Date} disabled={true}
                  disableYearSelection={true}
                />
                <TextField
                  floatingLabelText="Fiscal Year" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="2018"
                />
                <TextField
                  floatingLabelText="Reconciled" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="No"
                />

              </div>

              <div style={{ width: 400 }}>
                <SelectField
                  floatingLabelText="Division"
                  value={this.state.value}
                  onChange={this.handleChange} style={{ marginLeft: 55, marginRight: 15 }}
                >
                  <MenuItem value={1} primaryText="All" />
                  <MenuItem value={2} primaryText="Store" />
                  <MenuItem value={3} primaryText="Home Office" />
                  <MenuItem value={4} primaryText="Sams" />
                </SelectField>

                <TextField
                  floatingLabelText="City" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="Rogers"
                />

                <TextField
                  floatingLabelText="State" style={{ marginLeft: 55, marginRight: 15 }}
                  floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                  defaultValue="AR"
                />
                <SelectField
                  floatingLabelText="Dept/Category"
                  value={this.state.deptValue}
                  onChange={this.handleDeptChange}
                  style={{ marginLeft: 55, marginRight: 15 }}
                  multiple={true}
                >
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="2" />
                  <MenuItem value={3} primaryText="3" />
                  <MenuItem value={4} primaryText="4" />
                  <MenuItem value={5} primaryText="5" />
                </SelectField>

                <SelectField
                  floatingLabelText="User Id"
                  value={this.state.user}
                  onChange={this.handleUserChange}
                  style={{ marginLeft: 55, marginRight: 15 }}
                >
                  <MenuItem value={1} primaryText="Suraj" />
                  <MenuItem value={2} primaryText="Sam" />
                  <MenuItem value={3} primaryText="Arati" />
                  <MenuItem value={4} primaryText="Aaruj" />
                  <MenuItem value={5} primaryText="Diya" />
                </SelectField>

                <div style={{ marginTop: 30, textAlign: 'center', marginBottom: 10 }}>
                  <RaisedButton label="Save" primary={true} style={{ width: 80, marginBottom: 10 }}
                  />
                  <RaisedButton label="Support Document" primary={true} style={{ marginLeft: 8, width: 200, marginBottom: 10 }}
                  />
                </div>

              </div>
            </div>







          </Card>





        </div>
      </MuiThemeProvider>
    );
  }
}
