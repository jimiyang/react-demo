import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
var createHistory = require('history').createBrowserHistory
const history = createHistory();
class MenuApp extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0
        const panes = []
        const selectedKey = ""
        this.state = {
            collapsed: false,
            activeKey: panes.length==0 ? '1':panes[0].key,
            panes,
            selectedKey,
            menuPanes: [
                {
                    id: '1',
                    name: '商户管理',
                    children: [
                        {
                            id: '10',
                            name: '商户总部',
                            url:"/components/option1",
                        },
                        {
                            id: '11',
                            name: '商户门店',
                            url:"/components/option2",
                        }
                    ]
                },
                {
                    id: '2',
                    name: '代理商管理',
                    children: [
                        {
                            id: '20',
                            name: '代理商管理',
                            url:"/components/option3",
                        },
                        {
                            id: '21',
                            name: '代理商审核',
                            url:"/components/option1",
                        }
                    ]
                },
                {
                    id: '3',
                    name: '数据报表',
                    children: [
                        {
                            id: '22',
                            name: '到账查询',
                            url:"/components/option1",
                        }
                    ]
                },
                {
                    id: '4',
                    name: '帮助中心',
                    children: []
                }
            ]
        };
    }
    handleClick(pane){
        this.props.handleClick(pane);
    }  
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                    selectedKeys={[this.state.selectedKey]}
                >
                {
                    this.state.menuPanes.map((item, index) => (
                        (item.children.length === 0) ?
                        <Menu.Item key={item.id}>
                            <Icon type="mail" />
                            <span>{item.name}</span>
                        </Menu.Item>
                        :
                        <SubMenu key={index} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
                            {
                                item.children.map((children) => (
                                    <Menu.Item  key={children.id}>
                                        <Link to={children.url}  onClick={() => this.handleClick(children)}>{children.name}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
                </Menu>
            </div>
        )
    }
}
export default MenuApp;