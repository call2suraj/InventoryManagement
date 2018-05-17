import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import SelectCountry from '../components/SelectCountry';
import DatePicker from 'material-ui/DatePicker';
import Landing from '../containers/LandingPage';
import Badge from 'material-ui/Badge';
import SpikeChart from '../components/SpikeChart';
import LocalizedStrings from 'react-localization';
import areIntlLocalesSupported from 'intl-locales-supported';
//import persianUtils from 'material-ui-persian-date-picker-utils';


import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
require('../../scss/style.scss');

let DateTimeFormat;

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

const data = [
  { name: 'Inv A', uv: 400, pv: 200, amt: 100 },
  { name: 'Inv B', uv: 300, pv: 198, amt: 210 },
  { name: 'Inv C', uv: 200, pv: 750, amt: 130 },
  { name: 'Inv D', uv: 280, pv: 210, amt: 145 },
  { name: 'Inv E', uv: 190, pv: 300, amt: 66 },
  
];

if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}


let strings = new LocalizedStrings({
  en:{
    Country:"Country",
    Banner:'Banner',
    FromDate:'From Inventory Date',
    ToDate:'To Inventory Date',
   
  },
  it: {
    Country:"nazione",
    Banner:'bandiera',
    FromDate:'Dalla data di inventario',
    ToDate:'Alla data di inventario',
    
  },
  in:{
    Country:"देश",
    Banner:'बैनर',
    FromDate:'सूची तिथि से',
    ToDate:'सूची तिथि के लिए',
    
  }
});


class LandingPage extends Component {
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
      code:'en',
    };
    this.handleChange = this.handleChange.bind(this);
    this.calendarSelect = this.calendarSelect.bind(this);
    this.fromDate = this.fromDate.bind(this);
    this.toDate = this.toDate.bind(this);
    
  }

  onSetLanguageToItalian (){
    let code = this.props.locale || this.state.code
      strings.setLanguage(code);
    }

  handleChange(event, index, values) {
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

  fromDate(){
    console.log("in fromdate "+ this.props.locale);
    if(this.props.locale =='en' || this.props.locale == undefined|| this.props.locale == ''){
      return(<DatePicker textFieldStyle={{ width: 500 }} style={{ marginLeft: 22 }} onChange={this.calendarSelect}
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Cancel"
        locale="en"/>);
    }
    if(this.props.locale =='it'){
      return(<DatePicker textFieldStyle={{ width: 500 }} style={{ marginLeft: 22 }} onChange={this.calendarSelect}
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Annuler"
        locale="fr"/>);
    }
    
  }

  toDate(){
    console.log("in fromdate "+ this.props.locale);
    if(this.props.locale =='en' || this.props.locale == undefined|| this.props.locale == ''){
      return(<DatePicker textFieldStyle={{ width: 500 }} style={{ marginLeft: 22 }} minDate={this.state.minDate}
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Cancel"
        locale="en"/>);
    }
    if(this.props.locale =='it'){
      return(<DatePicker textFieldStyle={{ width: 500 }} style={{ marginLeft: 22 }} minDate={this.state.minDate}
        DateTimeFormat={DateTimeFormat}
        okLabel="OK"
        cancelLabel="Annuler"
        locale="fr"/>);
    }
  }

  calendarSelect(event, date) {
    this.setState({ minDate: date });
    console.log("========>calValue==>" + this.state.calValue);
  }

  render() {
    console.log("language in Landing Page "+this.props.locale);
    const { values } = this.state;
    return (


      <MuiThemeProvider  >
        <div style={{ marginLeft: 10 , marginTop:10}}>
          <Card style={{ width: 1350 }}>
            <div style={{ display: 'flex', marginLeft: 5 }} onload={this.onSetLanguageToItalian()}>
              {/* <Card style={{width:750}}> */}
              <div>
                <div style={{ display: 'flex', border: 2, borderColor: 'red' }}>
                  <div style={{ width: 200, textAlign: 'right' }}><br />
                    <text style={{ fontSize: 18, marginTop: 50, paddingTop: 10, textAlign: 'center' }}>{strings.Country} : </text>
                  </div>
                  <div>
                    <SelectCountry />
                  </div>
                </div>

                <div style={{ display: 'flex' }}>
                  <div style={{ width: 200, textAlign: 'right' }}><br />
                    <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>{strings.Banner} : </text>
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
                  <div style={{ width: 200, textAlign: 'right' }}><br />
                    <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>{strings.FromDate} : </text>
                  </div>
                  <div>
                    {/* <DatePicker textFieldStyle={{ width: 500 }} style={{ width: 800, marginLeft: 22 }} onChange={this.calendarSelect} /> */}
                  {this.fromDate()}
                  </div>
                </div>

                <div style={{ display: 'flex', marginTop: 5 }}>
                  <div style={{ width: 200, textAlign: 'right' }}><br />
                    <text style={{ fontSize: 18, marginTop: 40, paddingTop: 30 }}>{strings.ToDate} : </text>
                  </div>
                  <div>
                    {/* <DatePicker textFieldStyle={{ width: 500 }} style={{ marginLeft: 22 }} minDate={this.state.minDate}
                    /> */}
                      {this.toDate()}
                  </div>
                </div>
              </div>
              <div>
                <LineChart width={500} height={300} data={data}
                  margin={{ top: 10, right: 10, left: 80, bottom: 10 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </div>
              {/* </Card> <br/> */}

            </div>

           
          </Card >

          <br /><br />


          <Card style={{ display: 'flex', width: 1350, marginLeft: 1 }}>
            <div style={{ display: 'flex', marginTop: 5, }}>
              <CardText >
                Number of Inventories
                  </CardText>
              <Badge
                badgeContent={750}
                primary={true} style={{ paddingLeft: 682, paddingTop: 5, marginTop: 10 }}
              >
              </Badge>
            </div>
          </Card>


          <Card style={{ display: 'flex', width: 1350, marginLeft: 1 }}>
            <div style={{ display: 'flex', marginTop: 5, }}>
              <CardText >
              Completed
                  </CardText>
              {this.state.values == 'US-Walmart' ? <Badge
                badgeContent={100} badgeStyle={{ backgroundColor: 'gray' }}
                primary={true} style={{ paddingLeft: 750, paddingTop: 5, marginTop: 10 }}
              >
              </Badge>
                : <Badge
                  badgeContent={250} badgeStyle={{ backgroundColor: 'gray' }}
                  primary={true} style={{ paddingLeft: 750, paddingTop: 5, marginTop: 10 }}
                >
                </Badge>
              }

            </div>
          </Card>

          <Card style={{ display: 'flex', width: 1350, marginLeft: 1 }}>
            <div style={{ display: 'flex', marginTop: 5, }}>
              <CardText >
                In Progress
                  </CardText>

              {this.state.values == 'Virginia Andrews' ? <Badge
                badgeContent={750} badgeStyle={{ backgroundColor: 'green' }}
                primary={true} style={{ paddingLeft: 750, paddingTop: 5, marginTop: 10 }}
              >
              </Badge>
                : <Badge
                  badgeContent={300} badgeStyle={{ backgroundColor: 'green' }}
                  primary={true} style={{ paddingLeft: 745, paddingTop: 5, marginTop: 10 }}
                >
                </Badge>
              }



            </div>
          </Card>

          <Card style={{ display: 'flex', width: 1350, marginLeft: 1 }}>
            <div style={{ display: 'flex', marginTop: 5, }}>
              <CardText >
              Not Started
                  </CardText>
              {this.state.values == 'US-Super Ahorros' ? <Badge
                badgeContent={500}
                secondary={true} style={{ paddingLeft: 750, paddingTop: 5, marginTop: 10 }}
              >
              </Badge>
                : <Badge
                  badgeContent={200}
                  secondary={true} style={{ paddingLeft: 745, paddingTop: 5, marginTop: 10 }}
                >
                </Badge>
              }


            </div>
          </Card>

        </div>
      </MuiThemeProvider>






    );
  }
}

export default LandingPage;
