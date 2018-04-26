import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 190,
    height:0,
    color:'white'
  },
};

export default class Menus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {

    this.setState({value});
    console.log(this.state.value);
      this.setState({value:1});
  }

  render() {
    return (
      <div style={{color:'white'}}>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth} labelStyle={{color:'white'}}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Closing" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    );
  }
}
