import React from "react";
import ReactToPrint from "react-to-print";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const EditTable = require('material-ui-table-edit')
import ReconLineConfig from '../containers/ReconLineConfig';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';

import Ionicon from 'react-ionicons';
const headers = [
  { value: 'Classification', type: 'TextField', width: 200 },
  { value: 'Description', type: 'TextField', width: 200 },
  { value: 'Type', type: 'TextField', width: 100 },
  { value: 'Department', type: 'TextField', width: 200 },
  { value: 'Referance', type: 'TextField', width: 200 },
  { value: 'Date', type: 'DatePicker', width: 200 },

  { value: 'Retail Amount', type: 'TextField', width: 165 },
  { value: 'Status', type: 'Toggle', width: 80 },
  { value: 'Delete', type: 'ReadOnly', width: 20 }
]

let rows = [
  {
    "columns": [{ "value": "Ho Journal", "selected": true, "rowId": 1, "id": 0, "width": 200, color: 'blue' },
    { "value": "Ho Office Journal", "selected": true, "rowId": 1, "id": 1, "width": 200 },
    { "value": "A", "selected": true, "rowId": 1, "id": 2, "width": 200 },
    { "value": "62", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": "2123345", "selected": true, "rowId": 1, "id": 4, "width": 200 },
    { "value": new Date, "selected": true, "rowId": 1, "id": 5, "width": 200 },
    { "value": "6.342", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": true, "selected": true, "rowId": 1, "id": 6, "width": 200 },
    { "selected": true, "rowId": 1, "id": 7, "width": 40 }], "selected": false, "id": 1
  },

  {
    "columns": [{ "value": "MTR Receiving", "selected": true, "rowId": 1, "id": 0, "width": 200 },
    { "value": "Ho Office Journal", "selected": true, "rowId": 1, "id": 1, "width": 200 },
    { "value": "B", "selected": true, "rowId": 1, "id": 2, "width": 200 },
    { "value": "26", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": "2444345", "selected": true, "rowId": 1, "id": 4, "width": 200 },
    { "value": new Date, "selected": true, "rowId": 1, "id": 5, "width": 200 },
    { "value": "55.42", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": true, "selected": true, "rowId": 1, "id": 6, "width": 200 },
    { "selected": false, "rowId": 1, "id": 7, "width": 40 }], "selected": false, "id": 1
  },

  {
    "columns": [{ "value": "WM Receiving", "selected": true, "rowId": 1, "id": 0, "width": 200 },
    { "value": "Ho Office Journal", "selected": true, "rowId": 1, "id": 1, "width": 200 },
    { "value": "C", "selected": true, "rowId": 1, "id": 2, "width": 200 },
    { "value": "24", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": "1111345", "selected": true, "rowId": 1, "id": 4, "width": 200 },
    { "value": new Date, "selected": true, "rowId": 1, "id": 5, "width": 200 },
    { "value": "25.42", "selected": true, "rowId": 1, "id": 3, "width": 200 },
    { "value": true, "selected": true, "rowId": 1, "id": 6, "width": 200 },
    { "selected": false, "rowId": 1, "id": 7, "width": 40 }], "selected": false, "id": 1
  },

]

const onChange = (row) => {
  console.log("------" + JSON.stringify(row));
  if (rows.id > 2) {
    rows.push(row);
  }
}



class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 25, border: '0px solid blue', marginRight:15 }}>
        <MuiThemeProvider >
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

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const actions1 = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,

    ];

    return (
      <div style={{ margin: 25, width: 1470, border: '0px solid red' }} >
      <Ionicon icon="md-refresh-circle" style={{
          paddingTop: 20, marginRight: 5, marginTop: 33,
          alignContent: 'right', paddingRight: 21,marginLeft: 1200
        }}
          fontSize="25px" color="#00bcd4" />

        <Ionicon icon="md-copy" style={{
          paddingTop: 20, marginLeft: 5, marginRight: 5,
          alignContent: 'right', paddingRight: 21,
        }}
          fontSize="25px" onClick={this.handleOpen} color="#00bcd4" />
        <ReactToPrint
          trigger={() => 

            <Ionicon icon="md-print" style={{
              paddingLeft: 2, marginLeft: 10, marginRight: 5,
              alignContent: 'right', paddingRight: 21,
            }}
              fontSize="25px" color="#00bcd4" />
          }
          content={() => this.componentRef}
        />
        

        <ComponentToPrint ref={el => (this.componentRef = el)} />
        <Dialog style={{ width: 1700, height: 300, margin: 2 }}
          actions={actions1}
          modal={true}
          open={this.state.open}
        >
          <ReconLineConfig />

        </Dialog>
      </div>
    );
  }
}