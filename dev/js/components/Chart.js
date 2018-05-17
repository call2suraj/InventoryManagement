import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MuiTable from '../components/MuiTable';
 import TableData from './TableData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BarChartData from '../containers/BarChartData';
import SpikeChartData from '../containers/SpikeChartData';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SpikeChart from './SpikeChart';

const data = [
    { name: 'US', Stock: 4000, Store: 2400, amt: 2400 },
    { name: 'UK', Stock: 3000, Store: 1398, amt: 2210 },
    { name: 'MX', Stock: 2000, Store: 9800, amt: 2290 },
    { name: 'CA', Stock: 2780, Store: 3908, amt: 2000 },
    { name: 'IN', Stock: 1890, Store: 4800, amt: 2181 },
    { name: 'Pali', Stock: 2390, Store: 3800, amt: 2500 },
    { name: 'DM', Stock: 3490, Store: 4300, amt: 2100 },
];



import Divider from 'material-ui/Divider';


const styles = {
  customWidth: {
    width: 150,
  },
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 6,
  },

}
class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: '',
      banner:'',
      account:'',
      recon:'',
      type:'',
      name:''
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    ReactDOM.render(<MuiTable />, document.getElementById('container'));
  }

  render() {

    return (
      <MuiThemeProvider  style={{width:1400, alignContent:'center'}}>
        <Card style={{marginLeft:115, width:1400, alignContent:'center'}}>
          <CardHeader
            title="Inventory Report Summary"
            titleStyle={{fontSize:20, color:'#00bcd4'}}
          />
          <div >

            <Divider />
            <div style={{ display: 'flex', marginLeft:55}}>
              <Card style={{margin:15}}>
              <BarChart width={600} height={300} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Stock" fill="#8884d8" />
                        <Bar dataKey="Store" fill="#82ca9d" />
                    </BarChart>
            </Card>
              <Card style={{margin:15, marginLeft:20}}>
              <SpikeChart />
              </Card>



            </div>

            <div style={{ display: 'flex', marginLeft:55}}>

              <Card style={{margin:15, width:1060}}>
              <CardHeader
            title="Inventory Schedule"
            titleStyle={{fontSize:20, color:'#00bcd4'}}
          />
                <BarChartData />
              </Card>
              
              <Card style={{margin:15,width:1200}}>
              <CardHeader
            title="Inventory Reconciliation"
            titleStyle={{fontSize:20, color:'#00bcd4'}}
          />
              <SpikeChartData />
              </Card>
             

            </div>

          </div>

        </Card>

      </MuiThemeProvider>
    );
  }
}



export default Chart;
