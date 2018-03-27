import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

  }

  handleChange (event, index, value) {

    this.setState({value});
    console.log(this.state.value);
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
          <MenuItem value={1} primaryText="Line" />
          <MenuItem value={2} primaryText="Security" />
          <MenuItem value={3} primaryText="Department" />
          <MenuItem value={4} primaryText="Crew" />
          <MenuItem value={5} primaryText="Country" />

          <MenuItem value={6} primaryText="Shrink Provision" />
          <MenuItem value={7} primaryText="Email Template" />
          <MenuItem value={8} primaryText="Line Schedule" />
        </DropDownMenu>
      </div>
    );
  }
}
