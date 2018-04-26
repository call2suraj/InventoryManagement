import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import TableComponent from '../components/TableComponent'

class Reporting extends Component {
  render() {

    return (
      <div>
        <h3>Reporting Page. This will be done by Sethu</h3>
        <TableComponent />
      </div>
    );
  }
}

export default Reporting;
