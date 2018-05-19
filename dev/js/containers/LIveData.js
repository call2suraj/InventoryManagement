import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import { getAlerts } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
const header =[{_id:'ID',Product:'Product',Location:'Location',Subject:'Description',AlertPriority:'Priority',AlertType:'Type',AlertStatus:'Status'}];
export default class LiveData extends React.Component {

    constructor() {
        super();
        this.getData();
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
        //this.renderComponet = this.renderComponet.bind(this);
    }

    handleClick(event,elem) {
        //ReactDOM.render(<MuiTable />, document.getElementById('container'));
        //alert(JSON.stringify(elem));
        this.deleterRecord(elem._id);
        this.getData();
    }

    deleterRecord(id){
        alert("Are you sure, you want to delte the record for id "+ id);
        const url = 'https://ns-wggmovyeol.now.sh/alert/'+id;
        axios.delete(url, {
            headers: {
                'Content-Type': 'application/json',
            },
           
        })
            .then((res) => {
                this.getData();
                this.setState({ delete: 'deleted' });
               
            })
            .catch((error) => {

            })
    }
    renderHeader(){

        return header.map((elem) =>
        <MuiThemeProvider style={{ width: 1300, alignContent: 'center' }}>
            <Card style={{ marginLeft: 215, width: 1300, alignContent: 'center', height: 70, margin: 10, textAlign: 'center', paddingTop: 15 }}>
                <div key={elem._id} style={{ display: 'flex', marginLeft: 55, margin: 10, }}>

                   <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.Product}
                            </text>


                        </div>
                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.Location}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.Subject}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.AlertPriority}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.AlertType}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text style={{color:'#00bcd4'}}>
                                {elem.AlertStatus}
                            </text>
                        </div>
                </div>
            </Card>
        </MuiThemeProvider>
        );
    }
    renderComponet(dataElement) {
       
        return dataElement.map((elem) =>
            <MuiThemeProvider style={{ width: 1300, alignContent: 'center' }}>
                <Card style={{ marginLeft: 215, width: 1300, alignContent: 'center', height: 70, margin: 10, textAlign: 'center', paddingTop: 15 }}>
                    <div key={elem._id} style={{ display: 'flex', marginLeft: 55, margin: 10, }}>
                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.Product}
                            </text>


                        </div>
                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.Location}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.Subject}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.AlertPriority}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.AlertType}
                            </text>
                        </div>

                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                            <text>
                                {elem.AlertStatus}
                            </text>
                        </div>
                        <div style={{ display: 'flex', marginLeft: 55, width: 100 }}>
                       

                    <RaisedButton label="Delete" primary={true} style={{ width: 30, marginLeft:5}}
                        onClick={(event) => this.handleClick(event,elem)} />
                        </div>

                    </div>
                    
                </Card>

            </MuiThemeProvider>
        );

    }
    getData() {
        axios.get('https://ns-idpovaimhn.now.sh/alert', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                AlertStatus: "all"
            }
        })
            .then((res) => {
                this.setState({ data: res.data });
            })
            .catch((error) => {

            })
    }


    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                {this.state.data ? this.renderHeader(this.state.data) : null}
               
                {this.state.data ? this.renderComponet(this.state.data) : null}
            </div>
        );
    }
}
