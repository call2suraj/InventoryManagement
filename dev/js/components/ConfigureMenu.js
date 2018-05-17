import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ReactDOM from 'react-dom';
import ReconLineConfig from '../containers/ReconLineConfig';
import ShrinkProvision from '../containers/ShrinkProvision';
import ProfileConfig from '../containers/ProfileConfig';
import Config from '../containers/Config';
const styles = {
  customWidth: {
    width: 190,
    borderWidth:0,
    top:0,
    textColor:'#00bcd4',
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
    color:'#00bcd4',
      height:0
  },
};

export default class ConfigureMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value});
    console.log(this.state.value);
    if(value=='line'){
      console.log("inside if");
      ReactDOM.render(<ReconLineConfig />, document.getElementById('container'));
      this.setState({value:0});
    }
    if(value=='shrink'){
      console.log("inside if");
      ReactDOM.render(<ShrinkProvision />, document.getElementById('container'));
      this.setState({value:0});
    }
    if(value=='crew'){
      console.log("inside if");
      ReactDOM.render(<ProfileConfig />, document.getElementById('container'));
      this.setState({value:0});
    }
    if(value=='config'){
      console.log("inside if");
      ReactDOM.render(<Config />, document.getElementById('container'));
      this.setState({value:0});
    }
    
    this.setState({value:0});
  }

  render() {
    return (
      <div style={styles.customWidth}>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth} labelStyle={{color:'white'}}
          autoWidth={false}
        >
        <MenuItem  value={0} primaryText="Configuration"/>
          <MenuItem value={'line'} primaryText="Line" />
          <MenuItem value={2} primaryText="Security" />
          <MenuItem value={3} primaryText="Department" />
          <MenuItem value={'crew'} primaryText="Profile Configuration" />
          <MenuItem value={'config'} primaryText="Config" />
          <MenuItem value={"shrink"} primaryText="Shrink Provision" />
          <MenuItem value={7} primaryText="Email Template" />
          <MenuItem value={8} primaryText="Line Schedule" />
        </DropDownMenu>
      </div>
    );
  }
}
