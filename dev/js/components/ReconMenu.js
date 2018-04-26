import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Reconsillation from '../containers/Reconsiliation';
import MuiTable from './MuiTable';
import ReactDOM from 'react-dom';

const styles = {
  customWidth: {
    width: 150,
    backgroundColor: '#00bcd4',
    borderColor: '#00bcd4',
    borderWidth:0,
    height:0
  },
};

export default class ReconMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'recon'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    console.log("inside handleChange");
    this.setState({value});
    console.log(this.state.value);
    if(value=='config'){
      console.log("inside if");
      ReactDOM.render(<MuiTable />, document.getElementById('container'));
      this.setState({value:'recon'});
    }
    if(value=='reconsiliation'){
      console.log("inside if");
      ReactDOM.render(<Reconsillation />, document.getElementById('container'));
      this.setState({value:'recon'});
    }
    this.setState({value:'recon'});
  }

  render() {
    return (
      <div>

        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth} labelStyle={{color:'white'}}
        >
          <MenuItem value={"recon"} primaryText="Recon" label="Recon" />
          <MenuItem value={"config"} primaryText="Recon Line Configuration" />
          <MenuItem value={"line"} primaryText="Add Line" />
          <MenuItem value={"details"} primaryText="Recon Details" />
          <MenuItem value={"reconsiliation"} primaryText="Reconsiliation" />
        </DropDownMenu>
      </div>
    );
  }
}
