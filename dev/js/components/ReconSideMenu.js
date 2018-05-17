import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
import AddLineLanding from '../containers/AddLineLanding';
import ReactDOM from 'react-dom';
class ReconSideMenu extends Component {

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
        this.setState({ open: true });
        ReactDOM.render(<AddLineLanding />, document.getElementById('container'));
    };

    handleClose() {
        this.setState({ open: false });
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
                    <FlatButton label="Add Line" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-basket" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Recon Details" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-paper" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Reconsiliation" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-build" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Recon Line Configuration" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-lock" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                


            </div>
        );
    }
}

export default ReconSideMenu;
