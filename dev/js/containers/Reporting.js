import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Ionicon from 'react-ionicons';
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
  { value: 'Classification', type: 'TextField', width: 200 },
  { value: 'Description', type: 'TextField', width: 200 },
  { value: 'Type', type: 'TextField', width: 100 },
  { value: 'Department', type: 'TextField', width: 200 },
  { value: 'Referance', type: 'TextField', width: 200 },
  { value: 'Date', type: 'DatePicker', width: 200 },

  { value: 'Retail Amount', type: 'TextField', width: 200 },
  { value: 'Status', type: 'Toggle', width: 80 },
  { value: 'Delete', type: 'ReadOnly', width: 20 }
]

let rows = [
  {"columns":[{"value":"Ho Journal","selected":true,"rowId":1,"id":0,"width":200,color:'blue' },
    {"value":"Ho Office Journal","selected":true,"rowId":1,"id":1,"width":200},
    {"value":"A","selected":true,"rowId":1,"id":2,"width":200},
    {"value":"62","selected":true,"rowId":1,"id":3,"width":200},
    {"value":"2123345","selected":true,"rowId":1,"id":4,"width":200},
    {"value":new Date,"selected":true,"rowId":1,"id":5,"width":200},
    {"value":"6.342","selected":true,"rowId":1,"id":3,"width":200},
    {"value":true,"selected":true,"rowId":1,"id":6,"width":200},
    {"selected":true,"rowId":1,"id":7,"width":40}],"selected":false,"id":1},

  {"columns":[{"value":"MTR Receiving","selected":true,"rowId":1,"id":0,"width":200},
    {"value":"Ho Office Journal","selected":true,"rowId":1,"id":1,"width":200},
    {"value":"B","selected":true,"rowId":1,"id":2,"width":200},
    {"value":"26","selected":true,"rowId":1,"id":3,"width":200},
    {"value":"2444345","selected":true,"rowId":1,"id":4,"width":200},
    {"value":new Date,"selected":true,"rowId":1,"id":5,"width":200},
    {"value":"55.42","selected":true,"rowId":1,"id":3,"width":200},
    {"value":true,"selected":true,"rowId":1,"id":6,"width":200},
    {"selected":false,"rowId":1,"id":7,"width":40}],"selected":false,"id":1},

  {"columns":[{"value":"WM Receiving","selected":true,"rowId":1,"id":0,"width":200},
    {"value":"Ho Office Journal","selected":true,"rowId":1,"id":1,"width":200},
    {"value":"C","selected":true,"rowId":1,"id":2,"width":200},
    {"value":"24","selected":true,"rowId":1,"id":3,"width":200},
    {"value":"1111345","selected":true,"rowId":1,"id":4,"width":200},
    {"value":new Date,"selected":true,"rowId":1,"id":5,"width":200},
    {"value":"25.42","selected":true,"rowId":1,"id":3,"width":200},
    {"value":true,"selected":true,"rowId":1,"id":6,"width":200},
    {"selected":false,"rowId":1,"id":7,"width":40}],"selected":false,"id":1},

]

const onChange = (row) => {
  console.log("------" + JSON.stringify(row));
  if(rows.id > 2){
    rows.push(row);
  }
}


class Reporting extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Card style={{margin:15}}>
            <CardHeader
              title="Exception Reporting"
              titleStyle={{fontSize:20, color:'#00bcd4'}}
            />


            <Ionicon icon="md-print" style={{paddingTop:15,paddingLeft:22, marginLeft: 1250, marginRight: 5,
              alignContent:'right', paddingRight:21, }}
                     fontSize="25px" onClick={this.handleOpen} color="#00bcd4"/>
            <Ionicon icon="md-download" style={{paddingTop:15, marginLeft: 5, marginRight: 5,
              alignContent:'right', paddingRight:21, }}
                     fontSize="25px" onClick={this.handleOpen} color="#00bcd4" />
            <Ionicon icon="md-refresh-circle" style={{paddingTop:15, marginLeft: 5, marginRight: 5,
              alignContent:'right', paddingRight:21, }}
                     fontSize="25px" onClick={this.handleOpen} color="#00bcd4" />


          </Card>
        </MuiThemeProvider>

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

export default Reporting;
