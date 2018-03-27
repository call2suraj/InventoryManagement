import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Menus from './Menu';
import ReportMenu from './ReportMenu';
//import LeftDrawer from './LeftDrawer';
import ConfigureMenu from './ConfigureMenu';
import ScheduleMenu from './ScheduleMenu';
import ReconMenu from './ReconMenu';
import SvgIcon from 'material-ui/SvgIcon';
import Ionicon from 'react-ionicons';
import LanguageChange from './LanguageChange';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';
const iconStyles = {
  marginRight: 11,
  color:'white',
  paddingTop:15
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

class Header extends Component {
    render() {

        return (
            <div style={{color:'white'}}>
              <AppBar
                 iconClassNameRight="muidocs-icon-navigation-expand-more"
                 title="Global Inventory System" titleStyle={{fontSize:18}}
                 onLeftIconButtonClick={this.handleToggle}
                >
                <ConfigureMenu style={{borderColor: '#00bcd4',textColor:'#00bcd4' }}/>
                <ScheduleMenu />
                <ReconMenu />
                <Menus />
                <ReportMenu />
                <HomeIcon style={iconStyles} />
                  <LanguageChange />
                  <Ionicon icon="md-log-out" style={{paddingTop:15}} fontSize="25px" onClick={() => console.log('Hi!')} color="white"/>
                </AppBar>



            </div>
        );
    }
}



export default Header;
