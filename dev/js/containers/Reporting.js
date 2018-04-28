import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Ionicon from 'react-ionicons';
import SelectCountry from '../components/SelectCountry';
import SelectBanner from '../components/SelectBanner';
import ReactToPrint from "react-to-print";
const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
const EditTable = require('material-ui-table-edit')
const container1 = document.createElement('div')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  ComponentToPring from '../components/ComponentToPrint';
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


class Reporting extends Component {
  render() {
    return (
      <div style={{ border: '0px solid red'}}>

        <MuiThemeProvider>
          <Card style={{margin:5, width:1500, border: '0px solid red'}}>
            <CardHeader
              title="Exception Reporting"
              titleStyle={{fontSize:20, color:'#00bcd4', border: '0px solid red'}}
            />
          <ComponentToPring />
          </Card>
        </MuiThemeProvider>


      </div>
    );
  }
}

export default Reporting;
