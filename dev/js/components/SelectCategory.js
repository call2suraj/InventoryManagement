import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
items.push(<MenuItem value={"SelectAll"} key={'all'} primaryText={`Select All`} />);
for (let i = 1; i < 26; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}


/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class SelectCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [],
            timeValue: 0,
            secTime :''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event, index, values) {
        console.log("values: " + values)
        if ((values.indexOf('SelectAll') >= 0 && this.state.secTime == '')) {
            this.setState({ timeValue: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25',
            secTime : 'mu;' }
             );
            
        } else {           
            if((values.indexOf('SelectAll') >= 0) && this.state.timeValue == '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25'){
                this.setState({ timeValue: 0 });
            }else if((values.indexOf('SelectAll') >= 0) && values.indexOf(this.state.timeValue) != ''){
                this.setState({ timeValue: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25',
                secTime : 'mu;' }
                 );
            }
            else{
                this.setState({ timeValue: values });
            }           
        }
    }



    render() {
        const { values } = this.state;
        return (
            <SelectField style={{ width: 520, marginLeft: 10 }}
                multiple={true}
                hintText="Select a name"
                value={this.state.timeValue}
                onChange={this.handleChange}
            >
                {items}
            </SelectField>
        );
    }
}