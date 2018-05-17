import React, { Component } from 'react';
import { connect } from 'react-redux';
import BootStrapTableExample from '../components/BootStrapTableExample';
import TableComponent from '../components/TableComponent';
import TableData from '../components/TableData';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import SelectCountry from '../components/SelectCountry';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectBanner from '../components/SelectBanner';

import MenuItem from 'material-ui/MenuItem';
import Reactable from 'reactable';
import Divider from 'material-ui/Divider';


var Table = Reactable.Table,
  Thead = Reactable.Thead,
  Th = Reactable.Th,
 Td = Reactable.Td,
 Tr = Reactable.Tr;
 
const sgTeams = [
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


class Config extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: [],
          banvalues: [],
          teamvalue:'',
          leadervalue:'',
          grpvalue:'',
          deptvalue:'',
          sgTeams:sgTeams
        };
        this.handleChange = this.handleChange.bind(this);
        this.banHandleChange = this.banHandleChange.bind(this);
    
        this.handleDeptChange =  this.handleDeptChange.bind(this);
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleLeaderChange = this.handleLeaderChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        
      }
    
      banHandleChange (event, index, value) {
        this.setState({banvalues: value});
      }
      handleChange (event, index, value) {
        this.setState({value:value});
      }

      

      handleDeptChange (event, index, value) {
        this.setState({
            deptvalue: event.target.value,
          });
      }

      handleTeamChange(event){
        this.setState({
            teamvalue: event.target.value,
          });
      }

      handleLeaderChange(event){
        this.setState({
            leadervalue: event.target.value,
          });
      }

      handleGroupChange(event){
        this.setState({
            grpvalue: event.target.value, 
          });
      }

      handleClick(values, banvalues,leadervalue,teamvalue, grpvalue,deptvalue){
        if(values == '' || banvalues == '' || leadervalue == '' || teamvalue == '' || grpvalue == '' || deptvalue == ''){
        alert("invalid data","wrong data");
    
        }else{
            var newData = 
                {country:values, banner:banvalues, name: grpvalue, leader: leadervalue, assignment: deptvalue, members: teamvalue}
            
            console.log("inside data store"+JSON.stringify(sgTeams));
          sgTeams.push(newData);
          this.setState({
            sgTeams:sgTeams
          });
          console.log("state data store"+JSON.stringify(this.state.sgTeams));
        }
        this.setState ({
            value: [],
            banvalues: [],
            teamvalue:'',
            leadervalue:'',
            grpvalue:'',
            deptvalue:'',
            sgTeams:sgTeams
          });
      }



    renderTable() {
        return (
          <Table className="table"
            filterable={['country','name','leader', 'assignment', 'members']}
            noDataText="No matching records found"
            itemsPerPage={10}
            currentPage={0}
            sortable={true}
            data={this.state.sgTeams} style={{backgroundColor:'white',textAlign:'left'}} >
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
            <MuiThemeProvider style={{marginLeft: 55,}}>
                <div style={{marginLeft: 105,}}>
                    <div style={{ marginRight: 5 }}>
                        <Card style={{ margin: 5, }}>
                            <CardHeader
                                title="Team Configuration"
                                titleStyle={{ fontSize: 20, color: '#00bcd4' }}
                            />
                            <div style={{ display: 'flex', borderWidth: 2, borderColor: 'red' }}>
                                <div>
                                <SelectField  floatingLabelText="Country"
                                    value={this.state.value}
                                    onChange={this.handleChange} style={{width:500, marginLeft:22}}
                                    >
                                    <MenuItem value={"United State"} primaryText="United State" />
                                    <MenuItem value={"United Kingdom"} primaryText="United Kingdom" />
                                    <MenuItem value={"Mexico"} primaryText="Mexico" />
                                    <MenuItem value={"India"} primaryText="India" />
                                    <MenuItem value={"Canada"} primaryText="Canada" />
                                    </SelectField>
                                </div>
                                <div>
                                    <TextField
                                        floatingLabelText="Department" style={{ marginLeft: 65, marginRight: 15 }}
                                        floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }}
                                        value={this.state.deptvalue}
                                        onChange={this.handleDeptChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        floatingLabelText="Group Name" style={{ marginLeft: 30, marginRight: 15 }}
                                        floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }} 
                                        value={this.state.grpvalue}
                                        onChange={this.handleGroupChange}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', borderWidth: 2, borderColor: 'red' }}>
                                <div>
                                <SelectField floatingLabelText="Banner"
                                    value={this.state.banvalues}
                                    onChange={this.banHandleChange} style={{width:500, marginLeft:22}}
                                >
                                    <MenuItem value={"Pali - SoftDiscount"} primaryText="Pali - SoftDiscount" />
                                    <MenuItem value={"UK - SoftDiscount"} primaryText="UK - SoftDiscount" />
                                    <MenuItem value={"Mx - SoftDiscount"} primaryText="Mx - SoftDiscount" />
                                    <MenuItem value={"In - SoftDiscount"} primaryText="In - SoftDiscount" />
                                    <MenuItem value={"CA - SoftDiscount"} primaryText="CA - SoftDiscount" />
                                </SelectField>
                                </div>
                                <div>
                                    <TextField
                                        floatingLabelText="Team Member" style={{ marginLeft: 65, marginRight: 15 }}
                                        floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }} 
                                        value={this.state.teamvalue}
                                        onChange={this.handleTeamChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        floatingLabelText="Leader" style={{ marginLeft: 30, marginRight: 15 }}
                                        floatingLabelFocusStyle={{ color: 'gray', fontSize: 20 }} 
                                        value={this.state.leadervalue}
                                        onChange={this.handleLeaderChange}
                                    />
                                </div>
                            </div>

                            <div style={{ marginTop: 30, textAlign: 'center', marginBottom: 10 }}>
                                <RaisedButton label="Save" primary={true} style={{ width: 330, marginBottom: 10 }} 
                                onClick={(event) => this.handleClick(
                                    this.state.value, 
                                    this.state.banvalues,
                                    this.state.leadervalue,
                                    this.state.teamvalue, 
                                    this.state.grpvalue,
                                    this.state.deptvalue)} 
                                />
                            </div>
                        </Card>
                    </div>
                    {/* <TableComponent /> */}
                    {/* <BootStrapTableExample/> */}
                    {/* <TableData /> */}

                    <div>
                        {this.renderTable()}
                        
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default Config;
