import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SelectCountry from '../components/SelectCountry';
import DatePicker from 'material-ui/DatePicker';
import Landing from '../containers/LandingPage';
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
      maxDate: maxDate
    };
    this.handleChange = this.handleChange.bind(this);
    this.calendarSelect = this.calendarSelect.bind(this);
  }


  handleChange (event, index, values){
    this.setState({values});
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

  calendarSelect(event, date){
    this.setState({minDate: date});
    console.log("========>calValue==>"+this.state.calValue);
  }

    render() {
      const {values} = this.state;
        return (


          <MuiThemeProvider  >
            <div style={{marginLeft:170}}>

              <div style={{display: 'flex', border:2, borderColor:'red'}}>
                <div style={{width:200, textAlign:'right'}}><br/>
                  <text style={{fontSize:18, marginTop:50, paddingTop:10,textAlign:'center'}}>Country : </text>
                </div>
                <div>
                  <SelectCountry />
                </div>
              </div>

                <div style={{display: 'flex'}}>
                  <div style={{width:200, textAlign:'right'}}><br/>
                    <text style={{fontSize:18, marginTop:40, paddingTop:30}}>Banner : </text>
                  </div>
                  <div>
                    <SelectField
                      multiple={true}

                      value={values}
                      onChange={this.handleChange} style={{width:500, marginLeft:22}}
                    >
                      {this.menuItems(values)}
                    </SelectField>
                  </div>
                </div>

              <div style={{display: 'flex'}}>
                <div style={{width:200, textAlign:'right'}}><br/>
                  <text style={{fontSize:18, marginTop:40, paddingTop:30}}>From Inventory Date : </text>
                </div>
                <div>
                  <DatePicker textFieldStyle={{width:500}} style={{width:800 , marginLeft:22}} onChange={this.calendarSelect}/>
                </div>
              </div>

              <div style={{display: 'flex', marginTop:5}}>
                <div style={{width:200, textAlign:'right'}}><br/>
                  <text style={{fontSize:18, marginTop:40, paddingTop:30}}>To Inventory Date : </text>
                </div>
                <div>
                  <DatePicker textFieldStyle={{width:500}} style={{marginLeft:22}} minDate={this.state.minDate}/>
                </div>
              </div>

              <br/><br/>


              <Card style={{ display: 'flex', width:500, marginLeft:220}}>
                <div style={{display: 'flex', marginTop:5,}}>
                  <CardText >
                    Number of Inventories
                  </CardText>
                  <Badge
                    badgeContent={4}
                    primary={true} style={{paddingLeft:250, paddingTop:5, marginTop:10}}
                  >
                  </Badge>
                </div>
              </Card>


              <Card style={{ display: 'flex', width:500, marginLeft:220}}>
                <div style={{display: 'flex', marginTop:5,}}>
                  <CardText >
                    Number of Inventories
                  </CardText>
                  <Badge
                    badgeContent={1} badgeStyle={{backgroundColor:'gray'}}
                    primary={true} style={{paddingLeft:250, paddingTop:5, marginTop:10}}
                  >
                  </Badge>
                </div>
              </Card>

              <Card style={{ display: 'flex', width:500, marginLeft:220}}>
                <div style={{display: 'flex', marginTop:5,}}>
                  <CardText >
                    Number of Inventories
                  </CardText>
                  <Badge
                    badgeContent={3} badgeStyle={{backgroundColor:'green'}}
                    primary={true} style={{paddingLeft:250, paddingTop:5, marginTop:10}}
                  >
                  </Badge>
                </div>
              </Card>

              <Card style={{ display: 'flex', width:500, marginLeft:220}}>
                <div style={{display: 'flex', marginTop:5,}}>
                  <CardText >
                    Number of Inventories
                  </CardText>
                  <Badge
                    badgeContent={2}
                    secondary={true} style={{paddingLeft:250, paddingTop:5, marginTop:10}}
                  >
                  </Badge>
                </div>
              </Card>

            </div>
          </MuiThemeProvider>






        );
    }
}

export default LandingPage;
