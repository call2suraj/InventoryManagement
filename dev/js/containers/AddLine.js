import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddLinePopup from '../components/AddLinePopup';
class AddLine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
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
            <text style={{fontSize: 20, color: '#00bcd4' ,paddingTop:10, paddingBottom:10, marginBottom: 15, alignItems:'left', paddingRight:21}}>Recon Line Config</text>
            <Ionicon icon="ios-add-circle" style={{marginLeft: 1345, paddingTop:20, alignContent: 'right'}}
                     fontSize="25px" onClick={this.handleOpen} color="#00bcd4"/>
            <Dialog
              actions={actions}
              modal={true}
              open={this.state.open}
            >
             <AddLinePopup />
            </Dialog>
          </div>
        );
    }
}

export default AddLine;
