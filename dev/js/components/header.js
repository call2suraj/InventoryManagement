import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Menus from './Menu';
import ReportMenu from './ReportMenu';
//import LeftDrawer from './LeftDrawer';
import ConfigureMenu from './ConfigureMenu';

import ScheduleMenu from './ScheduleMenu';
import ReconMenu from './ReconMenu';
class Header extends Component {
    render() {

        return (
            <div>
              <AppBar
                 iconClassNameRight="muidocs-icon-navigation-expand-more"
                 title="Inventory Managemnet System"
                 onLeftIconButtonClick={this.handleToggle}
                >

                <ConfigureMenu style={{borderColor: '#00bcd4',textColor:'#00bcd4', }}/>
                <ScheduleMenu />
                <ReconMenu />
                <Menus />
                <ReportMenu />
                </AppBar>


            </div>
        );
    }
}



export default Header;
