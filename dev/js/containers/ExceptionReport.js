import React, { Component } from 'react';



import Shrink from '../containers/EditShrinkProvision';

// import { MuiDataTable } from 'mui-data-table';
// import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
// import AddLine from '../containers/AddLine';
// import {orange500, blue500,gray500} from 'material-ui/styles/colors';
// import Ionicon from 'react-ionicons';
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
    { value: 'Country', type: 'TextField', width: 200 },
    { value: 'Banner', type: 'TextField', width: 200 },
    { value: 'Dept', type: 'TextField', width: 200 },
    { value: 'Cost Percent', type: 'TextField', width: 200 },
    { value: 'Retail Percent', type: 'TextField', width: 200 },
    { value: 'Active', type: 'Toggle', width: 200 },
    { value: 'Delete', type: 'ReadOnly', width: 40 }
]

const rows = [
    {
        "columns": [
            { "value": "USA", "selected": true, "rowId": 0, "id": 0, "width": 200 },
            { "value": "Pali - Soft Discount", "selected": true, "rowId": 0, "id": 1, "width": 200 },
            { "value": "24", "selected": true, "rowId": 0, "id": 2, "width": 200 },
            { "value": "2.3", "selected": true, "rowId": 0, "id": 3, "width": 200 },
            { "value": "2.1", "selected": true, "rowId": 0, "id": 4, "width": 200 },
            { "selected": true, "rowId": 0, "id": 5, "width": 40 }
        ], "selected": false, "id": 0
    },

    {
        "columns": [
            { "value": "India", "selected": true, "rowId": 0, "id": 0, "width": 200 },
            { "value": "IN-Wal-Mart", "selected": true, "rowId": 0, "id": 1, "width": 200 },
            { "value": "25", "selected": true, "rowId": 0, "id": 2, "width": 200 },
            { "value": "2.2", "selected": true, "rowId": 0, "id": 3, "width": 200 },
            { "value": "2.5", "selected": true, "rowId": 0, "id": 4, "width": 200 },
            { "selected": true, "rowId": 0, "id": 5, "width": 40 }
        ], "selected": false, "id": 0
    }

]

const onChange = (row) => {
    console.log("------" + JSON.stringify(row));
    rows.push(row);
}


class ExceptionReport extends Component {
    render() {

        return (

            <div>
                <Shrink />
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

export default ExceptionReport;
