import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Ionicon from 'react-ionicons';
import { FlagIcon } from "react-flag-kit";
import {
  Icon_Flag_BG,
  Icon_Flag_US,
  Icon_Flag_CA,
  Icon_Flag_FR,
  Icon_Flag_IN,
  Icon_Flag_DE,
  Icon_Flag_MX
} from 'material-ui-country-flags';
export default class LanguageChange extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
      this.handleClick = this.handleClick.bind(this);
      this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleClick (event)  {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>


          <Ionicon icon="md-settings" style={{paddingTop:15, marginRight: 11}} fontSize="25px" onClick={this.handleClick} color="white"/>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="English-US" leftIcon={<Icon_Flag_US />}/>
            <MenuItem primaryText="Spanish-Argentina" leftIcon={<Icon_Flag_BG />}/>
            <MenuItem primaryText="French-Canada" leftIcon={<Icon_Flag_CA />}/>
            <MenuItem primaryText="Spanish-Costa Rica" leftIcon={<Icon_Flag_DE />}/>
            <MenuItem primaryText="Spanish-France" leftIcon={<Icon_Flag_FR />}/>
            
            <MenuItem primaryText="India" leftIcon={<Icon_Flag_IN />}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
