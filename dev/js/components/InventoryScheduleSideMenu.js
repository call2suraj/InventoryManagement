import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
import AddLineLanding from '../containers/AddLineLanding';
import Schedule from '../containers/Schedule';
import ReactDOM from 'react-dom';
import ReconLineConfig from '../containers/Reconsiliation';
class InventoryScheduleSideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openMenu: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleReconOpen = this.handleReconOpen.bind(this);
    }

    handleOpen() {
       // this.setState({ open: true });
        ReactDOM.render(<Schedule />, document.getElementById('container'));
    };

    handleReconOpen() {
       // this.setState({ open: false });
        ReactDOM.render(<ReconLineConfig />, document.getElementById('container'));
        
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
                    <FlatButton label="Crew" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-contacts" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Department" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-paper" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Security" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-lock" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Update Schedule" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-calendar" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Inventory cReconillation" onClick={this.handleReconOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="ios-people" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>
                
                

            </div>
        );
    }
}

export default InventoryScheduleSideMenu;
