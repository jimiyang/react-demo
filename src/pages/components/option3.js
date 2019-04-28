import React, {Component} from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {Input} from 'antd';
import reduces from '../../store/reduces/index';
import action from '../../store/action/action';
import store from '../../store/store';
console.log(store)
//let store = createStore(reduces);
class Option3 extends Component {
    constructor(props) {
        super(props);
        store.subscribe(() => {
            console.log('state状态改变了，新状态如下')
            console.log(store.getState())
            const state = store.getState()
            console.log(state)
        })
        this.state = {
            value: ''
        };
    }
    componentDidUpdate () {
        console.log(store.getState());
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return(
            <div>
                <Input value={this.state.value} onChange={this.change}/>
            </div>
        )
    }
};
export default Option3;
/*export default connect(
    // 这里的state，就是公共容器中的state，而不是当前组件的state。在这里定义了之后，在当前组件中，就可以通过this.props.music拿到该对象
    state => ({ count: state.count }),
)(Option3)*/