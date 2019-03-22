import React, {Component} from 'react'
import {Button} from 'antd'
class Counter extends Component {
    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {increment, decrement, count} = this.props;
        //渲染组件，包括一个数字，四个按钮
        return (
            <p>
                Clicked: {count} times
                {' '}
                <Button type="primary" onClick={increment}>+</Button>
                {' '}
                <Button type="primary" onClick={decrement}>-</Button>
                {' '}
            </p>
        )
    }
}
export default Counter