import React, { Component } from 'react';
import Shrink from '../containers/EditShrinkProvision';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectCountry from '../components/SelectCountry';
import SelectBanner from '../components/SelectBanner';
const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const EditTable = require('material-ui-table-edit')
const container1 = document.createElement('div')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
document.body.appendChild(container1)
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
      { "selected": true, "rowId": 0, "id": 5, "width": 40 }
    ], "selected": false, "id": 0
  },

  {
    "columns": [
      { "value": "India", "selected": true, "rowId": 0, "id": 0, "width": 200 },
      { "value": "IN-Wal-Mart", "selected": true, "rowId": 0, "id": 1, "width": 200 },
      { "selected": true, "rowId": 0, "id": 5, "width": 40 }
    ], "selected": false, "id": 0
  }

]

const onChange = (row) => {
  console.log("------" + JSON.stringify(row));
  if(rows.id > 1){
    rows.push(row);

  }
}


class ProfileTable extends Component {
  render() {

    return (

      <div>

        <MuiThemeProvider>
          <EditTable
            onChange={onChange}
            rows={rows}
            headerColumns={headers}
            enableDelete={true}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ProfileTable;
