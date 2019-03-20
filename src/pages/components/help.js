import React, {Component} from 'react';
import {Input} from 'antd';
class Help extends Component {
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
                帮助中心
            </div>
        )
    }
}
export default Help;