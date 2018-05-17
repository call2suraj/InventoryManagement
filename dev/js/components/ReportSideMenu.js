import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
import AddLineLanding from '../containers/AddLineLanding';

import Reporting from '../containers/Reporting';
import ExceptionReport from '../containers/ExceptionReport';

import ReactDOM from 'react-dom';
class ReportSideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openMenu: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        //this.setState({ open: true });
        ReactDOM.render(<Reporting />, document.getElementById('container'));
    };

    handleClose() {
        ReactDOM.render(<ExceptionReport />, document.getElementById('container'));
    };

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
                    <FlatButton label="Reports"  fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="ios-archive-outline" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Inventory Report" fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="logo-buffer" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Department Report"  fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-man" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Exception Reporting" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-filing" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Exception Management" onClick={this.handleClose} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-copy" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>


            </div>
        );
    }
}

export default ReportSideMenu;
