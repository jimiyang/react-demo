import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../store/reduces/index.js';
import App from '../../store/app';
const store = createStore(reducer);
class Options1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'ssss',
          arr: [
            {id: 1, name: '北京'},
            {id: 2, name: '天津'},
            {id: 3, name: '河北'}
          ]   
        };
    }
    componentWillMount() {
        //store.subscribe((state) => this.setState(state));
    }
    change = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    commitClick = () => {
        //this.props.createAction(this.state.text);
    }
    render() {
        return (
            <Provider store={store}>
                <App />
                <div>
                    <div style={{marginBottom: '20px'}}>当前值为：{this.state.text}</div>
                    <Input onChange={this.change} value={this.state.text}/>
                    <Button onClick={this.commitClick.bind(this)} style={{marginTop: '20px'}}>确定</Button>
                </div>
            </Provider>
        )
    }
}
export default Options1;
