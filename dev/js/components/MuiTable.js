import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiDataTable } from 'mui-data-table';
import AddLine from '../containers/AddLine';
import Ionicon from 'react-ionicons';

const data = [
  { id: 1, Recon: 'Canada Cost Recon-Walmart GM', Banner: 'CA-Wal-Mart', Method: 'Cost', Tolerance: '$2.00', LineMethod: 'Data Feed', Date:'1/1/2018',Type:'Schedule' ,Multiplier:0.04},
  { id: 2, Recon: 'India Cost Recon-Walmart GM', Banner: 'IN-Wal-Mart', Method: 'Retail', Tolerance: '$2.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Schedule',Multiplier:0.02},
  { id: 3, Recon: 'Canada Cost Recon-Walmart GM', Banner: 'CA-Wal-Mart', Method: 'Cost', Tolerance: '$1.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Rejected',Multiplier:0.01},
  { id: 4, Recon: 'India Cost Recon-Walmart GM', Banner: 'IN-Wal-Mart', Method: 'Retail', Tolerance: '$2.00', LineMethod: 'Data Feed' , Date:'1/1/2018',Type:'Deffer',Multiplier:0.01},
  { id: 5, Recon: 'USA Cost Recon-Walmart GM', Banner: 'UK-Wal-Mart', Method: 'Cost', Tolerance: '$2.00', LineMethod: 'Data Feed', Date:'1/1/2018' ,Type:'Schedule',Multiplier:0.02},
  { id: 6, Recon: 'UK Cost Recon-Walmart GM', Banner: 'USA-Wal-Mart', Method: 'Retail', Tolerance: '$4.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Schedule',Multiplier:0.01},
  { id: 7, Recon: 'USA Cost Recon-Walmart GM', Banner: 'USA-Wal-Mart', Method: 'Margin', Tolerance: '$3.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Rejected',Multiplier:0.03},
  { id: 8, Recon: 'Mexico Cost Recon-Walmart GM', Banner: 'MX-Wal-Mart', Method: 'Cost', Tolerance: '$2.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Deffer',Multiplier:0.03},
  { id: 9, Recon: 'UK Cost Recon-Walmart GM', Banner: 'UK-Wal-Mart', Method: 'Margin', Tolerance: '$2.00', LineMethod: 'Data Feed' , Date:'1/1/2018',Type:'Schedule',Multiplier:0.01},
  { id: 10, Recon: 'India Cost Recon-Walmart GM', Banner: 'IN-Wal-Mart', Method: 'Margin', Tolerance: '$2.00', LineMethod: 'Schedule', Date:'1/1/2018',Type:'Schedule' ,Multiplier:0.02},
  { id: 11, Recon: 'UK Cost Recon-Walmart GM', Banner: 'UK-Wal-Mart', Method: 'Retail', Tolerance: '$4.00', LineMethod: 'Data Feed' , Date:'1/1/2018',Type:'Deffer',Multiplier:0.04},
  { id: 12, Recon: 'USA Cost Recon-Walmart GM', Banner: 'USA-Wal-Mart', Method: 'Margin', Tolerance: '$3.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Rejected',Multiplier:0.01},
  { id: 13, Recon: 'Mexico Cost Recon-Walmart GM', Banner: 'MX-Wal-Mart', Method: 'Cost', Tolerance: '$2.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Schedule',Multiplier:0.02},
  { id: 14, Recon: 'UK Cost Recon-Walmart GM', Banner: 'UK-Wal-Mart', Method: 'Enugu', Tolerance: '$2.00', LineMethod: 'Schedule' , Date:'1/1/2018',Type:'Schedule',Multiplier:0.01},
  { id: 15, Recon: 'India Cost Recon-Walmart GM', Banner: 'IN-Wal-Mart', Method: 'Cost', Tolerance: '$4.00', LineMethod: 'Schedule', Date:'1/1/2018',Type:'Rejected' ,Multiplier:0.01},
];

const config = {
  paginated: true,
  search: 'Recon',
  rowsPerPage:false,

  data: data,
  adjustForCheckbox:true,
  enableSelectAll:false,
  columns: [

    { property: 'Recon', title: 'Recon'},
    { property: 'Banner', title: 'Banner' },
    { property: 'Method', title: 'Method' },
    { property: 'Tolerance', title: 'Tolerance Amount' },
    { property: 'Type', title: 'Type' },
    { property: 'Date', title: 'Date' },
    { property: 'LineMethod', title: 'Line Type' },
    { property: 'Multiplier', title: 'Multiplier' },

  ],
  viewSearchBarOnload: true // set to true or false. Default it is set to false. Shows the search bar or not depending on the value set
};

export default class MuiTable extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{overflowY: 'scroll', height:500,marginRight:10}}>
          <div style={{textAlign:'right', marginRight:10}}>
            <AddLine />
          </div>

          <MuiDataTable config={config} footerStyle={{margin:8, textAlign:'left',width:55}}/>

        </div>

      </MuiThemeProvider>
    );
  }
}

