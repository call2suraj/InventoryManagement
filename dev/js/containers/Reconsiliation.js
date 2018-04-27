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
import SelectBanner from '../components/SelectBanner';

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
  enableSelectAll: false,
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

    };
    this.handleChange = this.handleChange.bind(this);
    this.menuItems = this.menuItems.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }
  handleChange(event, index, values) {
    this.setState({ values });
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
                title="Inventory Reconcilation"
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

          <Tabs>
            <Tab label="Retail" >
              <MuiDataTable config={retailConfig} footerStyle={{ margin: 8, textAlign: 'left', width: 55, }} onClick={this.handleRowClick} />
            </Tab>
            <Tab label="Cost">
              <MuiDataTable config={costConfig} footerStyle={{ margin: 8, textAlign: 'left', width: 55, }} onClick={this.handleRowClick} />
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}
