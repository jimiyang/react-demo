import React, {Component} from 'react';
import {Input} from 'antd';
class Option2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '我是第二个options2'
        }
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return(
            <div>
                <Input value={this.state.value} onChange={this.change} />
            </div>
        )
    }
};
export default Option2;