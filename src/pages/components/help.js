import React, {Component} from 'react';
import {Table} from 'antd';
import router from 'umi/router';
import axios from '../../api/baseInstance.js';
//import Link from 'umi/link';
//<Link to="/list">Go to list page</Link>
class Help extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        data: []
      }
    }
    componentWillMount() {
      axios.get("/api/tags").then(rs => {
        this.setState({data: rs.data.list});
      })
    }
    btnEvent = (index) => {
      axios.get('/api/cityList').then(rs => {
        console.log(rs);
      })
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
          <div>
            <Table rowKey={record => record.value} columns={columns} dataSource={data} />
          </div>
        )
    }
}
export default Help;