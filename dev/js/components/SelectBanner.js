import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class SelectBanner extends Component {


  constructor(props) {
    super(props);
    this.state = {
      values: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  //  this.selectionRenderer = this.selectionRenderer.bind(this);

  }


  handleChange (event, index, value) {
    this.setState({value});
  }



  render() {
    return (
      <SelectField floatingLabelText="Banner"
        value={this.state.value}
        onChange={this.handleChange} style={{width:500, marginLeft:22}}
      >
        <MenuItem value={1} primaryText="Pali - SoftDiscount" />
        <MenuItem value={2} primaryText="UK - SoftDiscount" />
        <MenuItem value={3} primaryText="Mx - SoftDiscount" />
        <MenuItem value={4} primaryText="In - SoftDiscount" />
        <MenuItem value={5} primaryText="CA - SoftDiscount" />
      </SelectField>
    );
  }
}
