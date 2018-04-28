import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ReactDOM from 'react-dom';
import ReconLineConfig from '../containers/Reconsiliation';
import Schedule from '../containers/Schedule';
const styles = {
  customWidth: {
    width: 225,
    borderWidth:0,
    top:0,
    color:'white',
    backgroundColor: 'white',
    color:'blue',
      height:0
  },
};

export default class ScheduleMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value});
    console.log(this.state.value);
    if(value=='reconciliation'){
      console.log("inside if");
      ReactDOM.render(<ReconLineConfig />, document.getElementById('container'));
      this.setState({value:0});
    }
    if(value=='schedule'){
      console.log("inside if");
      ReactDOM.render(<Schedule />, document.getElementById('container'));
      this.setState({value:0});
    }
    this.setState({value:0});
  }

  render() {
    return (
      <div >
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false} labelStyle={{color:'white'}}
        >
        <MenuItem  value={0} primaryText="Inventory Schedule" style={styles.customWidth}/>
          <MenuItem value={'reconciliation'} primaryText="Inventory Reconciliation" />
          <MenuItem value={2} primaryText="Security" />
          <MenuItem value={3} primaryText="Department" />
          <MenuItem value={4} primaryText="Crew" />
          <MenuItem value={'schedule'} primaryText="Update Schedule" />
        </DropDownMenu>
      </div>
    );
  }
}
