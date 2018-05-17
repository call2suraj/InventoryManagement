import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
import AddLineLanding from '../containers/AddLineLanding';
import ReactDOM from 'react-dom';
class ClosingSideMenu extends Component {

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
                    <FlatButton label="Line Close" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-close-circle" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Recon Close" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-cart" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>



                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Schedule Close" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-clock" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

                <div style={{ alignItems: 'left', marginTop: 5, marginLeft: 25 }}>
                    <FlatButton label="Inventory Close" onClick={this.handleOpen} fullWidth={true} style={{ textAlign: 'left' }}
                        labelStyle={{ fontSize: '12', fontFamily: 'sans-serif', color: '#546596' }}
                        icon={<Ionicon icon="md-stats" style={{ marginRight: 10 }}
                            fontSize="22px" color="#00bcd4" />} />
                </div>

            </div>
        );
    }
}

export default ClosingSideMenu;
