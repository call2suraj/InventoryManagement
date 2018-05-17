import React from "react";
import ReactExport from "react-data-export";
import Reactable from 'reactable';
import ReactDataSheet from 'react-datasheet';
import TableData from './TableData';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

var Table = Reactable.Table,
  Thead = Reactable.Thead,
  Th = Reactable.Th,
 Td = Reactable.Td,
 Tr = Reactable.Tr;

var dataSet1 = [
    {country:'USA', banner:'WMT', name: "SG-1", leader: "Oneil", assignment: "Exploration", members: 4},
    {country:'IN',banner:'WMT',name: "SG-2", leader: "Kawalsky", assignment: "Search and Rescue", members: 5},
    {country:'UK',banner:'SAMS',name: "SG-3", leader: "Reynolds", assignment: "Marine Combat", members: 10},
    {country:'USA',banner:'WMT',name: "SG-4", leader: "Howe", assignment: "Medical", members: 4},
    {country:'MX',banner:'HOMEOFFICE',name: "SG-5", leader: "Davis", assignment: "Marine Combat", members: 6},
    {country:'CA',banner:'SAMS',name: "SG-6", leader: "Fischer", assignment: "Search and Rescue", members: 10},
    {country:'IN',banner:'WMT',name: "SG-7", leader: "Isaacs", assignment: "Scientific", members: 6},
    {country:'MX',banner:'SAMS',name: "SG-8", leader: "Yip", assignment: "Medical", members: 6},
    {country:'USA',banner:'HOMEOFFICE',name: "SG-9", leader: "Winters", assignment: "Diplomatic", members: 7},
    {country:'IN',banner:'WMT',name: "SG-10", leader: "Colville", assignment: "Military Exploration", members: 5},
    {country:'USA',banner:'HOMEOFFICE',name: "SG-7", leader: "Isaacs", assignment: "Scientific", members: 6},
    {country:'USA',banner:'WMT',name: "SG-8", leader: "Yip", assignment: "Medical", members: 6},
    {country:'IN',banner:'WMT',name: "SG-9", leader: "Winters", assignment: "Diplomatic", members: 7},
    {country:'UK',banner:'HOMEOFFICE',name: "SG-10", leader: "Colville", assignment: "Military Exploration", members: 5}
  ];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16,
        costpercent:4,
        retailpercent:5,
        store:100
    },
    {
        name: "Suraj",
        total: 25,
        remainig: 7,
        costpercent:5,
        retailpercent:8,
        store:400
    },
    {
        name: "Arati",
        total: 22,
        remainig: 17,
        costpercent:15,
        retailpercent:18,
        store:800
    }
];

export default class ExcelComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          grid: [
            [{value:  1}, {value:  3}],
            [{value:  2}, {value:  4}]
          ]
        }
      }

      renderTable() {
        return (
          <Table className="table"
            filterable={['country','name','leader', 'assignment', 'members']}
            noDataText="No matching records found"
            itemsPerPage={10}
            currentPage={0}
            sortable={true}
            data={dataSet2} style={{backgroundColor:'white',textAlign:'left'}} >
            <Thead>
            <Th column="name" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Team Leader Name</Th>
            <Th column="total" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Department Number</Th>
            <Th column="remainig" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Cost</Th>
            <Th column="costpercent" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Cost Percent</Th>
            <Th column="retailpercent" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Retail Percent</Th>
            <Th column="store" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Store</Th>
    
            </Thead>
    
          </Table>
        )
      }


    render() {
        return (
            <div>
            <ExcelFile>
                <ExcelSheet data={dataSet1} name="Inventory">
                    <ExcelColumn label="Name" value="country"/>
                    <ExcelColumn label="Wallet Money" value="banner"/>
                    <ExcelColumn label="Gender" value="name"/>
                    <ExcelColumn label="Gender" value="leader"/>
                    <ExcelColumn label="Gender" value="assignment"/>
                    <ExcelColumn label="Gender" value="members"/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Department">
                    <ExcelColumn label="Team Leader Name" value="name"/>
                    <ExcelColumn label="Department Number" value="total"/>
                    <ExcelColumn label="Cost" value="remaining"/>
                    <ExcelColumn label="Cost Percent" value="costpercent"/>
                    <ExcelColumn label="Retail Percent" value="retailpercent"/>
                    <ExcelColumn label="Store" value="store"/>
                </ExcelSheet>
            </ExcelFile>
            <div>
            <TableData />
            </div>
            <div>
                {this.renderTable()}
            
            </div>
            </div>
        );
    }
}