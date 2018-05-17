import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Menus from './Menu';
import ReportMenu from './ReportMenu';
import ConfigureMenu from './ConfigureMenu';
import ScheduleMenu from './ScheduleMenu';
import ReconMenu from './ReconMenu';
import SvgIcon from 'material-ui/SvgIcon';
import Ionicon from 'react-ionicons';
import Drawer from 'material-ui/Drawer';
import LanguageChange from './LanguageChange';
import ReactDOM from 'react-dom';
import App from './App';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import LocalizedStrings from 'react-localization';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Landing from '../containers/LandingPage';
import UserLogin from '../containers/UserLogin';
import AddLineLanding from '../containers/AddLine';
import { BrowserRouter } from 'react-router-dom'
import ReconSideMenu from './ReconSideMenu';
import ReportSideMenu from './ReportSideMenu';
import ConfigSideMenu from './ConfigurationSideMenu';
import InventoryScheduleSideMenu from './InventoryScheduleSideMenu';
import ClosingSideMenu from './ClosingSideMenu';

import {
  Icon_Flag_BG,
  Icon_Flag_US,
  Icon_Flag_CA,
  Icon_Flag_FR,
  Icon_Flag_IN,
  Icon_Flag_DE,
  Icon_Flag_MX
} from 'material-ui-country-flags';

let strings = new LocalizedStrings({
  en: {
    how: "How do you want your egg today?",
  },
  it: {
    how: "Come vuoi il tuo uovo oggi?",
  }
});


const iconStyles = {
  marginRight: 11,
  color: 'white',
  paddingTop: 15
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      languageChoice: 'en',
      openMenu: false,
      showSideMenu: false,
      showConfigSideMenu: false,
      showReportSideMenu: false,
      showCloseSideMenu: false,
      showInvSideMenu:false
    };
    this.goHome = this.goHome.bind(this);
    this.getHeaderMenu = this.getHeaderMenu.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSideMenu = this.handleSideMenu.bind(this);
    this.getSubMenus = this.getSubMenus.bind(this);

     this.handleInvSideMenu = this.handleInvSideMenu.bind(this);
    this.handleReportSideMenu = this.handleReportSideMenu.bind(this);
    this.handleCloseSideMenu = this.handleCloseSideMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.handleConfigSideMenu = this.handleConfigSideMenu.bind(this);
  }


  // sideSubmenuClick(){
  //   this.handleToggle;
  // }
  handleLogout() {
    ReactDOM.render((
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ), document.getElementById('root'))
  }
  handleToggle() {
    // alert("before"+this.state.openMenu)
    this.setState({ openMenu: !this.state.openMenu });
    //alert("after"+this.state.openMenu)
  }

  getHeaderMenu() {
    if (this.props.username == '' && this.props.password == '') {
      return (<AppBar

        title="Global Inventory System" titleStyle={{ fontSize: 18 }}

      >
        <LanguageChange showPage={"login"}/>
      </AppBar>)
    } else {
      return (<AppBar
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        title="Global Inventory System" titleStyle={{ fontSize: 18 }}
        onLeftIconButtonClick={this.handleToggle}
      >
        <ConfigureMenu style={{ borderColor: '#00bcd4', textColor: '#00bcd4' }} />
        <ScheduleMenu />
        <ReconMenu />
        <Menus />
        <ReportMenu />
        <Ionicon icon="md-home" style={{ paddingTop: 15, paddingRight: 15 }} fontSize="25px" onClick={this.goHome} color="white" />
        <LanguageChange showPage={"landing"}/>
        <Ionicon icon="md-log-out" onClick={this.handleLogout} style={{ paddingTop: 15 }} fontSize="25px" color="white" />
      </AppBar>)
    }
  }
  goHome(event) {
    event.preventDefault();
    ReactDOM.render(<Landing />, document.getElementById('container'));
  }

  handleSideMenu(event) {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  }

  handleConfigSideMenu(event) {
    this.setState({ showConfigSideMenu: !this.state.showConfigSideMenu });
  }
  handleInvSideMenu(event) {
    this.setState({ showInvSideMenu: !this.state.showInvSideMenu });
  }

  

  handleReportSideMenu(event) {
    this.setState({ showReportSideMenu: !this.state.showReportSideMenu });
  }

  handleCloseSideMenu(event) {
    this.setState({ showCloseSideMenu: !this.state.showCloseSideMenu });
  }

  getSubMenus() {
    return (<div style={{ paddingLeft: 15, marginTop: 5 }}>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-lock" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Recon Line Configuration</text>
      </MenuItem>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-basket" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }} >Add Line</text>
      </MenuItem>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-paper" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Recon Details</text>
      </MenuItem>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-build" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Reconsiliation</text>
      </MenuItem>

    </div>);
  }

  getClosingSubMenu() {
    return (<div style={{ paddingLeft: 15, marginTop: 5 }}>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-close-circle" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Line Close</text>
      </MenuItem>

      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-cart" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Recon Close</text>

      </MenuItem>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-clock" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Schedule Close</text>

      </MenuItem>
      <MenuItem onClick={this.handleClose}
        leftIcon={<Ionicon icon="md-stats" style={{ marginRight: 11 }}
          fontSize="25px" onClick={this.handleClick} color="#00bcd4" />}>
        <text style={{ color: '#546596' }}>Inventory Close</text>
      </MenuItem>
    </div>);
  }
  // getReportSubMenus(){
  //   return(<div style={{paddingLeft:15,marginTop:5}}>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-pie" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Line Schedule</text>
  //     </MenuItem>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-cog" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Security</text>
  //     </MenuItem>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-contact" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Department</text>
  //     </MenuItem>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-man" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Crew</text>
  //     </MenuItem>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-cube" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Shrink Provision Banner</text>
  //     </MenuItem>
  //     <MenuItem onClick={this.handleClose}
  //               leftIcon={<Ionicon icon="md-copy" style={{ marginRight: 11}}
  //                                  fontSize="25px" onClick={this.handleClick} color="#00bcd4"/>}>
  //       <text style={{color:'#546596'}}>Exception Management</text>
  //     </MenuItem>
  //   </div>);
  // }
  render() {
    console.log("in side render of header" + this.props.username);
    return (
      <div style={{ color: '#00bcd4' }}>
        <Drawer
          docked={false}
          width={280}
          open={this.state.openMenu} style={{ paddingTop: 0, marginTop: 0 }}
          onRequestChange={(openMenu) => this.setState({ openMenu })}
        >
          <div style={{ display: 'flex', height: 66, marginTop: 12 }}>
            <div style={{ backgroundColor: 'white', marginTop: 0 }}>

              <img src='../inventory.png' height="50" width="50" style={{ marginLeft: 6, paddingTop: 3 }} />

            </div>
            <div style={{ backgroundColor: 'white', marginTop: 0 }}>


              <text style={{ paddingLeft: 15, fontSize: 15, color: '#546596' }}>
                GLOBAL
                </text><br />
              <text style={{ paddingLeft: 15, fontSize: 15, color: '#546596' }}>

                INVENTORY
                </text><br />
              <text style={{ paddingLeft: 15, fontSize: 15, color: '#546596' }}>

                SYSTEM</text>
            </div>

          </div><br />
          <Divider />





          <div style={{ alignItems: 'left' }}>
            <FlatButton label="CONFIGURATION" onClick={this.handleConfigSideMenu} fullWidth={true} style={{ textAlign: 'left' }}
              labelStyle={{ fontSize: '15', fontFamily: 'sans-serif', color: '#546596' }}
              icon={<Ionicon icon="md-settings" style={{ marginRight: 30 }}
                fontSize="25px" onClick={this.handleClick} color="#00bcd4" />} />
          </div>

          {
            this.state.showConfigSideMenu ? <ConfigSideMenu /> : null
          }





          <div style={{ alignItems: 'left' }}>
            <FlatButton label="Recon" onClick={this.handleSideMenu} fullWidth={true} style={{ textAlign: 'left' }}
              labelStyle={{ fontSize: '15', fontFamily: 'sans-serif', color: '#546596' }}
              icon={<Ionicon icon="md-briefcase" style={{ marginRight: 30 }}
                fontSize="25px" onClick={this.handleClick} color="#00bcd4" />} />
          </div>

          {
            this.state.showSideMenu ? <ReconSideMenu /> : null
          }

          <div style={{ alignItems: 'left', marginTop: 5 }}>
            <FlatButton label="Report" onClick={this.handleReportSideMenu} fullWidth={true} style={{ textAlign: 'left' }}
              labelStyle={{ fontSize: '15', fontFamily: 'sans-serif', color: '#546596' }}
              icon={<Ionicon icon="md-clipboard" style={{ marginRight: 30 }}
                fontSize="25px" onClick={this.handleClick} color="#00bcd4" />} />
          </div>


          {
            this.state.showReportSideMenu ? <ReportSideMenu /> : null
          }

          <div style={{ alignItems: 'left', marginTop: 5 }}>
            <FlatButton label="CLOSING" onClick={this.handleCloseSideMenu} fullWidth={true} style={{ textAlign: 'left' }}
              labelStyle={{ fontSize: '15', fontFamily: 'sans-serif', color: '#546596' }}
              icon={<Ionicon icon="md-filing" style={{ marginRight: 30 }}
                fontSize="25px" onClick={this.handleClick} color="#00bcd4" />} />
          </div>


          {
            this.state.showCloseSideMenu ? <ClosingSideMenu /> : null
          }

          


          <div style={{ alignItems: 'left', marginTop: 5 }}>
            <FlatButton label="INVENTORY SCHEDULE" onClick={this.handleInvSideMenu} fullWidth={true} style={{ textAlign: 'left' }}
              labelStyle={{ fontSize: '15', fontFamily: 'sans-serif', color: '#546596' }}
              icon={<Ionicon icon="md-globe" style={{ marginRight: 30 }}
                fontSize="25px" onClick={this.handleClick} color="#00bcd4" />} />
          </div>

          {
            this.state.showInvSideMenu ? <InventoryScheduleSideMenu/> : null
          }
          

        </Drawer>
        {this.getHeaderMenu()}
      </div>
    );
  }
}

export default Header;
