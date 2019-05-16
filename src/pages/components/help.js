import React, {Component} from 'react';
import {Table} from 'antd';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../store/reduces/index.js';
import actions from '../../store/action/action.js';
import router from 'umi/router';
import axios from '../../api/baseInstance.js';
//import Link from 'umi/link';
//<Link to="/list">Go to list page</Link>
const store = createStore(reducer);
class Help extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        data: []
      }
    }
    componentWillMount() {
      this.props.changeMenuType('false');
      axios.get("/api/tags").then(rs => {
        this.setState({data: rs.data.list});
      })
    }
    btnEvent = (index) => {
      axios.get('/api/cityList').then(rs => {
        console.log(rs);
      })
      this.props.changeMenuType('false');
      console.log(store.getState().todos);
      router.push({pathname: '/components/list', query: {value: index}});
    }
    render() {
        const {data} = this.state;
        const columns = [
          {
            title: 'value',
            dataIndex: 'value',
            key: 'value'
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: '编辑',
            dataIndex: '',
            key: '',
            render: (record) => (
              <a onClick={this.btnEvent.bind(this, record.value)}>编辑</a>
            )
          }
        ]
        return (
          <Provider store={store}>
            <div>
              <Table rowKey={record => record.value} columns={columns} dataSource={data} />
            </div>
          </Provider>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    routerType: state.todos.routerType
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMenuType: (...args) => dispatch(actions.changeMenuType(...args))
  }
};
Help = connect(mapStateToProps, mapDispatchToProps)(Help);
export default Help;