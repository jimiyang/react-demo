import React, {Component} from 'react';
import {Input, Button} from 'antd';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../store/reduces/index.js';
import actions from '../../store/action/action.js';
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
          ],
          name: '',
          pwd: ''
        };
    }
    componentWillMount() {
		const arr=['react', 'vue', 'anglar'];
		//console.log(arr.includes('3333'));
    }
    change = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    commitClick = () => {
        //this.props.createAction(this.state.text);
    }
    changeEvent = (type, e) => {
        this.setState({[type]: e.target.value});
    }
    btnEvent = () => {
      console.log(`用户名：${this.state.name}，密码：${this.state.pwd}`);
    }
    render() {
        const {increment, decrement, count} = this.props;
        return (
            <Provider store={store}>
                <div>
                    Clicked: {count} times
                    <Button type="primary" onClick={increment} style={{marginLeft: '20px'}}>+</Button>
                    <div style={{marginBottom: '20px'}}>当前值为：{this.state.text}</div>
                    <Input onChange={this.change} value={this.state.text}/>
                    <Button onClick={this.commitClick.bind(this)} style={{marginTop: '20px'}}>确定</Button>
                    <div>
                        <p>用户名: <Input  onChange={this.changeEvent.bind(this, 'name')} value={this.state.name}/></p>
                        <p>用户名: <Input  onChange={this.changeEvent.bind(this, 'pwd')} value={this.state.pwd}/></p>
                        <Button type="primary" onClick={this.btnEvent.bind(this)}>确定确定确定</Button>
                    </div>
                </div>
            </Provider>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.todos.count
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args))
    }
};
Options1 = connect(mapStateToProps, mapDispatchToProps)(Options1);
export default Options1;