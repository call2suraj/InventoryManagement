import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class SelectCountry extends Component {


  constructor(props) {
    super(props);
    this.state = {
      values: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showCountry = this.showCountry.bind(this);
  //  this.selectionRenderer = this.selectionRenderer.bind(this);

  }


  handleChange (event, index, value) {
    this.setState({value});
  }

showCountry(){

  if(this.props.showflag =="show"){
    return (<SelectField  floatingLabelText="Country"
      value={this.state.value}
      onChange={this.handleChange} style={{width:500, marginLeft:22}}
    >
      <MenuItem value={1} primaryText="United State" />
      <MenuItem value={2} primaryText="United Kingdom" />
      <MenuItem value={3} primaryText="Mexico" />
      <MenuItem value={4} primaryText="India" />
      <MenuItem value={5} primaryText="Canada" />
    </SelectField>);
  }else{
    return(<SelectField
      value={this.state.values}
      onChange={this.handleChange} style={{width:500, marginLeft:22}}
    >
      <MenuItem value={1} primaryText="United State" />
      <MenuItem value={2} primaryText="United Kingdom" />
      <MenuItem value={3} primaryText="Mexico" />
      <MenuItem value={4} primaryText="India" />
      <MenuItem value={5} primaryText="Canada" />
    </SelectField>);
  }

}

  render() {
    return (
      <div>
      {this.showCountry()}
      </div>


    );
  }
}
