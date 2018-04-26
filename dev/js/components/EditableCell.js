import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Products from '../components/Products';

class EditableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  //  this.selectionRenderer = this.selectionRenderer.bind(this);
  }
  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }
}

export default EditableCell;
