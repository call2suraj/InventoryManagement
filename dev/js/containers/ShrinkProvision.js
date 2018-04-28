import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiDataTable } from 'mui-data-table';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import AddLine from '../containers/AddLine';
import {orange500, blue500,gray500} from 'material-ui/styles/colors';
import Ionicon from 'react-ionicons';
import SelectCountry from '../components/SelectCountry';
import SelectBanner from '../components/SelectBanner';
const data = [
  { id: 1, Recon: 'Costa Rica', Banner: 'Pali - Soft Discount', Method: '24', Tolerance: '2.00', LineMethod: '1.23', Date:'2.27',Type:'1.23' ,Multiplier:0.04},
  { id: 2, Recon: 'India', Banner: 'IN-Wal-Mart', Method: '25', Tolerance: '-2.00', LineMethod: '1.23' , Date:'2.27',Type:'1.23',Multiplier:0.02},
  { id: 3, Recon: 'Canada', Banner: 'CA-Wal-Mart', Method: '22', Tolerance: '-1.00', LineMethod: '1.23' , Date:'2.27',Type:'-2.14',Multiplier:0.01},
  { id: 4, Recon: 'India', Banner: 'IN-Wal-Mart', Method: '25', Tolerance: '-2.20', LineMethod: '-2.14' , Date:'2.27',Type:'-2.14',Multiplier:0.01},
  { id: 5, Recon: 'USA', Banner: 'UK-Wal-Mart', Method: '26', Tolerance: '2.40', LineMethod: '-2.14', Date:'1.27' ,Type:'1.23',Multiplier:0.02},
  { id: 6, Recon: 'UK', Banner: 'USA-Wal-Mart', Method: '22', Tolerance: '4.00', LineMethod: '1.23' , Date:'-1.27',Type:'1.23',Multiplier:0.01},
  { id: 7, Recon: 'USA', Banner: 'USA-Wal-Mart', Method: '23', Tolerance: '-3.10', LineMethod: '-2.14' , Date:'-2.27',Type:'1.23',Multiplier:0.03},
  { id: 8, Recon: 'Mexico', Banner: 'MX-Wal-Mart', Method: '24', Tolerance: '2.00', LineMethod: '1.23' , Date:'-1.27',Type:'-2.14',Multiplier:0.03},
  { id: 9, Recon: 'UK', Banner: 'UK-Wal-Mart', Method: '25', Tolerance: '-2.00', LineMethod: '-2.18' , Date:'2.27',Type:'-2.14',Multiplier:0.01},
  { id: 10, Recon: 'India', Banner: 'IN-Wal-Mart', Method: '22', Tolerance: '2.20', LineMethod: '1.23', Date:'1.27',Type:'-2.00' ,Multiplier:0.02},
  { id: 11, Recon: 'UK', Banner: 'UK-Wal-Mart', Method: '24', Tolerance: '4.00', LineMethod: '-3.14' , Date:'2.25',Type:'-2.00',Multiplier:0.04},
  { id: 12, Recon: 'USA', Banner: 'USA-Wal-Mart', Method: '26', Tolerance: '3.00', LineMethod: '1.23' , Date:'2.24',Type:'1.23',Multiplier:0.01},
  { id: 13, Recon: 'Mexico', Banner: 'MX-Wal-Mart', Method: '24', Tolerance: '-2.00', LineMethod: '1.23' , Date:'2.47',Type:'-2.00',Multiplier:0.02},
  { id: 14, Recon: 'UK', Banner: 'UK-Wal-Mart', Method: '25', Tolerance: '-2.00', LineMethod: '1.23' , Date:'-2.27',Type:'-2.00',Multiplier:0.01},
  { id: 15, Recon: 'India', Banner: 'IN-Wal-Mart', Method: '26', Tolerance: '4.00', LineMethod: '1.23', Date:'-2.27',Type:'-2.14' ,Multiplier:0.01},
];

const config = {
  paginated: true,

  rowsPerPage:false,

  data: data,
  adjustForCheckbox:true,
  enableSelectAll:false,
  columns: [

    { property: 'Recon', title: 'Country' },
    { property: 'Banner', title: 'Banner' },
    { property: 'Method', title: 'Dept/Category' },
    { property: 'Tolerance', title: 'New Store Cost Percent' },
    { property: 'Type', title: 'Existing Store Retail Percent' },
    { property: 'Date', title: 'Existing Store Above Max' },
    { property: 'LineMethod', title: 'Existing Store Above Min' },
    { property: 'Multiplier', title: 'Existing Store Below Max' },

  ],
  viewSearchBarOnload: false // set to true or false. Default it is set to false. Shows the search bar or not depending on the value set
};

export default class ShrinkProvision extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],

    };
    this.handleChange = this.handleChange.bind(this);
    this.menuItems = this.menuItems.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }
  handleChange (event, index, values){
    this.setState({values});
  }

  handleRowClick (event, index, values){
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
  render() {
    console.log("selected from country"+this.state.values);
    return (
      <MuiThemeProvider>
        <div style={{overflowY: 'scroll', height:740,marginRight:10}}>
          <div style={{ marginRight:15}}>

            <Card style={{margin:5, }}>
               <CardHeader
                 title="Dept/Category Shrink Provision Minimum And Maximum"
                 titleStyle={{fontSize:20, color:'#00bcd4'}}
               />

               <div style={{display: 'flex', borderWidth:2, borderColor:'red'}}>

                 <div>
                   <SelectCountry showflag="show"/>
                 </div>

                 <div>
                 <text style={{paddingTop:30, marginTop:30, color:'#b4b4b4',marginLeft:60, marginRight:15}}>
                    New Stores
                 </text>
                   <TextField
                     floatingLabelText="Cost Percent" style={{marginLeft:165, marginRight:15}}
                     floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                   />
                 </div>

                 <div>
                 <TextField
                   floatingLabelText="Retail Percent" style={{marginLeft:30, marginRight:15}}
                   floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                 />
                 </div>

               </div>

               <div style={{display: 'flex'}}>
                 <div>
                   <SelectBanner />
                 </div>

                 <div>
                 <text style={{paddingTop:30, marginTop:30, color:'#b4b4b4',marginLeft:60, marginRight:15}}>
                    Existing Store Above Minimum
                 </text>
                   <TextField
                     floatingLabelText="Cost Percent" style={{marginLeft:30, marginRight:15}}
                     floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                   />
                 </div>

                 <div>
                 <TextField
                   floatingLabelText="Retail Percent" style={{marginLeft:30, marginRight:15}}
                   floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                 />
                 </div>

               </div>

               <div style={{display: 'flex', marginLeft:12}}>
                 <div>
                   <TextField
                     floatingLabelText="Dept / Category Number" style={{marginLeft:10, marginRight:15, width:500}}
                     floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                   />
                 </div>

                 <div>
                 <text style={{paddingTop:30, marginTop:30, color:'#b4b4b4',marginLeft:45, marginRight:15}}>
                    Existing Store Below Minimum
                 </text>
                   <TextField
                     floatingLabelText="Cost Percent" style={{marginLeft:30, marginRight:15}}
                     floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                   />
                 </div>

                 <div>
                 <TextField
                   floatingLabelText="Retail Percent" style={{marginLeft:30, marginRight:15}}
                   floatingLabelFocusStyle={{color: 'gray', fontSize:20}}
                 />
                 </div>

               </div>
               <div style={{marginTop:30, textAlign:'center' , marginBottom:10}}>
                 <RaisedButton label="Save" primary={true} style={{ width:330, marginBottom:10}}
                               />
               </div>
             </Card>

          </div>
          <MuiDataTable config={config} footerStyle={{margin:8, textAlign:'left',width:55,}}  onClick={this.handleRowClick}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
