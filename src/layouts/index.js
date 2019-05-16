import {Component} from 'react';
import {Layout, Tabs} from 'antd';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import router from 'umi/router';
import Menu from  '../pages/menu/menu'; //菜单页
import Main from '../pages/main/main'; //内容页
import Help from  '../pages/components/help';
import Option1 from  '../pages/components/option1';
import Option3 from  '../pages/components/option3';
import reducer from '../store/reduces/index.js';
const store = createStore(reducer);
var createHistory = require('history').createBrowserHistory
const history = createHistory() 
const {Header, Sider, Content} = Layout;
const TabPane = Tabs.TabPane
class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0
    const panes = []
    const selectedKey=""
    this.state = {
      activeKey: panes.length === 0 ? '1':panes[0].id,
      panes,
      selectedKey,
      hideAdd: true,
      type: ''
    }
  }
  getComponent(url) {
    let Component;
    switch(url) {
      case '/components/option1':
        Component = Option1
      break;
      case '/components/option3':
        Component = Option3
      break;
      case '/components/help':
        Component = Help
      break;
    }
    return <Component />;
  }
  handleClick = (pane) => {
    let panes = this.state.panes
    let activeKey=pane.id
    let flag=true
    //debugger
    panes.length > 0 && panes.map((item,i)=>{
        if(item.id === activeKey){
            flag = false
        } 
    })
    if(!panes||panes.length===0||flag){
        panes.push(pane)
    }
    let selectedKey=activeKey
    this.setState({ panes, activeKey,selectedKey,type: store.getState().todos.routerType})
    window.localStorage.setItem("panes", JSON.stringify(panes));
    router.push(pane.url);
  } 
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  remove = (targetKey) => {
    //debugger
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.id === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.id !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].id
    }
    this.setState({panes, activeKey})
  }
  changeTab = (activeKey) => {
    const panes = this.state.panes
    let url
    panes.map((item,i)=>{
      if(activeKey === item.id){
        url = item.url
        return false
      }
    })
    history.push(url)
    let selectedKey=activeKey
    this.setState({selectedKey ,activeKey, type: 'menu'});
    router.push(url);
  }
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Sider width={220} style={{minHeight: '100vh', color: 'white'}}>
              <Menu handleClick = {this.handleClick}/>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
            <Content style={{margin: '24px 16px 0'}}>
              <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Tabs
                  onChange={this.changeTab.bind(this)}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
                  hideAdd={this.state.hideAdd}
                >
                  {
                    this.state.panes && this.state.panes.map((pane, index) => {
                      return <TabPane tab={pane.name} key={pane.id}  closable={pane.closable}>
                        {this.state.type === 'menu' ? this.getComponent(pane.url) : this.props.children}
                    </TabPane>
                    })
                  }
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Provider>
    )
  }
}
export default BasicLayout;