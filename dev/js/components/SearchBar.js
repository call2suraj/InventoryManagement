import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Products from '../components/Products';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {

    return (
      <div>

        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>
    );
  }
}

export default SearchBar;
