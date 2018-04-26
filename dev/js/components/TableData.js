//======================
// IMPORT
//======================
import React, { Component } from 'react';
import Reactable from 'reactable';
import Divider from 'material-ui/Divider';

var Table = Reactable.Table,
  Thead = Reactable.Thead,
  Th = Reactable.Th;

//======================
// Define our table's data
// Imagine using information acquired from
// a database, like list of users
//======================
var sgTeams = [
  {name: "SG-1", leader: "Oneil", assignment: "Exploration", members: 4},
  {name: "SG-2", leader: "Kawalsky", assignment: "Search and Rescue", members: 5},
  {name: "SG-3", leader: "Reynolds", assignment: "Marine Combat", members: 10},
  {name: "SG-4", leader: "Howe", assignment: "Medical", members: 4},
  {name: "SG-5", leader: "Davis", assignment: "Marine Combat", members: 6},
  {name: "SG-6", leader: "Fischer", assignment: "Search and Rescue", members: 10},
  {name: "SG-7", leader: "Isaacs", assignment: "Scientific", members: 6},
  {name: "SG-8", leader: "Yip", assignment: "Medical", members: 6},
  {name: "SG-9", leader: "Winters", assignment: "Diplomatic", members: 7},
  {name: "SG-10", leader: "Colville", assignment: "Military Exploration", members: 5},
  {name: "SG-7", leader: "Isaacs", assignment: "Scientific", members: 6},
  {name: "SG-8", leader: "Yip", assignment: "Medical", members: 6},
  {name: "SG-9", leader: "Winters", assignment: "Diplomatic", members: 7},
  {name: "SG-10", leader: "Colville", assignment: "Military Exploration", members: 5}
];

export default class TableData extends Component {


//======================
// Render the table with all of the
// options included
//======================
  renderTable() {
    return (
      <Table className="table"
             filterable={['leader', 'assignment', 'members']}
             noDataText="No matching records found"
             itemsPerPage={10}
             currentPage={0}
             sortable={true}
             data={sgTeams} style={{backgroundColor:'white',textAlign:'left'}}>
        <Thead>

        <Th column="name" style={{color:'white',width:100,backgroundColor:'gray'}}>Away Team</Th>
        <Th column="leader" style={{color:'white',width:100,backgroundColor:'gray'}}>Leader</Th>
        <Th column="assignment" style={{color:'white',width:200,backgroundColor:'gray'}}>Mission</Th>
        <Th column="members" style={{color:'white',width:200,backgroundColor:'gray'}}>Team Members</Th>

        </Thead>

      </Table>
    )
  }


//======================
// Render our component
//======================

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    )
  }
}