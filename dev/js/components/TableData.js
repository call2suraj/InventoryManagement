import React, { Component } from 'react';
import Reactable from 'reactable';
import Divider from 'material-ui/Divider';

var Table = Reactable.Table,
  Thead = Reactable.Thead,
  Th = Reactable.Th,
 Td = Reactable.Td,
 Tr = Reactable.Tr;
 
var sgTeams = [
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

export default class TableData extends Component {

  renderTable() {
    return (
      <Table className="table"
        filterable={['country','name','leader', 'assignment', 'members']}
        noDataText="No matching records found"
        itemsPerPage={10}
        currentPage={0}
        sortable={true}
        data={sgTeams} style={{backgroundColor:'white',textAlign:'left'}} >
        <Thead>
        <Th column="country" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Country</Th>
        <Th column="banner" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Banner</Th>
        <Th column="name" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Group Name</Th>
        <Th column="leader" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Leader</Th>
        <Th column="assignment" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Department</Th>
        <Th column="members" style={{color:'white',height:35,width:200,backgroundColor:'#00bcd4'}}>Team Members</Th>

        </Thead>

      </Table>
    )
  }


  render() {
    return (
      <div>
        {this.renderTable()}
        
      </div>

    )
  }
}