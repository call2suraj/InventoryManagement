import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ReactDOM from 'react-dom';
import Reporting from '../containers/Reporting';
import ExceptionReport from '../containers/ExceptionReport';
const styles = {
  customWidth: {
    width: 200,
    borderWidth:0,
    top:0,
    textColor:'#00bcd4',
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
    color:'#00bcd4',
      height:0
  },
};

export default class ReportMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'reporting'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {

    this.setState({value});
    console.log(this.state.value);
    if(value=='reporting'){
      console.log("inside if");
      //ReactDOM.render(<Reporting />, document.getElementById('container'));
      this.setState({value:'reporting'});
    }
    if(value=='exception'){
      console.log("inside if");
      ReactDOM.render(<ExceptionReport />, document.getElementById('container'));
      this.setState({value:'reporting'});
    }
    if(value=='ereport'){
      console.log("inside if");
      ReactDOM.render(<Reporting />, document.getElementById('container'));
      this.setState({value:'reporting'});
    }
    this.setState({value:'reporting'});
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
        <MenuItem  value={'reporting'} primaryText="Reporting"/>
          <MenuItem value={1} primaryText="Line Schedule" />
          <MenuItem value={2} primaryText="Security" />
          <MenuItem value={3} primaryText="Department" />
          <MenuItem value={'ereport'} primaryText="Exception Reporting" />
          <MenuItem value={5} primaryText="Country" />

          <MenuItem value={6} primaryText="Shrink Provision Banner" />
          <MenuItem value={7} primaryText="Email Template" />
          <MenuItem value={8} primaryText="Line Schedule" />
          <MenuItem value={'exception'} primaryText="Exception Management" />
        </DropDownMenu>
      </div>
    );
  }
}
