import React, {Component} from 'react';
import {Input} from 'antd';
class Options1 extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0
        const panes = []
        const selectedKey = ""
        this.state = {
          value: 'ddd'
        };
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div>
                <Input onChange={this.change} />
            </div>
        )
    }
}
export default Options1;