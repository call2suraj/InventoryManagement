import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
import AddLineLanding from '../containers/AddLineLanding';
import ProfileConfig from '../containers/ProfileConfig';
import ReconLineConfig from '../containers/ReconLineConfig';
import ShrinkProvision from '../containers/ShrinkProvision';
import Config from '../containers/Config';
import ReactDOM from 'react-dom';
class ConfigSideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openMenu: false,
        };
        this.handleLine = this.handleLine.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleShrinkProvision = this.handleShrinkProvision.bind(this);
    }

    handleLine() {
       // this.setState({ open: true });
        ReactDOM.render(<AddLineLanding />, document.getElementById('container'));
    };

    handleConfig() {
        // this.setState({ open: true });
         ReactDOM.render(<Config />, document.getElementById('container'));
     };

    
    handleProfile() {
        //this.setState({ open: false });
        ReactDOM.render(<ProfileConfig />, document.getElementById('container'));
    };

    handleReconLineConfig(){
        ReactDOM.render(<ReconLineConfig />, document.getElementById('container'));
    }

    handleShrinkProvision(){
        ReactDOM.render(<ShrinkProvision />, document.getElementById('container'));
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div >
                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Line" onClick={this.handleLine} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-pie" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


<div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="config" onClick={this.handleConfig} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="ios-cog-outline" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Security" onClick={this.handleSecurity} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-key" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Department" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-contact" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Line Schedule" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-copy" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Shrink Provision" onClick={this.handleShrinkProvision} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-cube" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Profile Configuration" onClick={this.handleProfile} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-cog" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

            </div>
        );
    }
}

export default ConfigSideMenu;
