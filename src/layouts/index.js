import {Component} from 'react';
import {Layout, Tabs} from 'antd';
import Menu from  '../pages/menu/menu';
import Help from  '../pages/components/help';
import Option1 from  '../pages/components/option1';
import Option2 from  '../pages/components/option2';
import Option3 from  '../pages/components/option3';
var createHistory = require('history').createBrowserHistory
const history = createHistory() 
const {Header, Sider, Content} = Layout;
const TabPane = Tabs.TabPane
const routerData = [
    {url:"/components/option1", content: Option1},
    {url:"/components/option2", content: Option2},
    {url:"/components/option3", content: Option3},
    {url:"/components/help", content: Help}
]
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
      hideAdd: true
    }
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
    this.setState({ panes, activeKey,selectedKey})
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
  onChange = (activeKey) => {
    const panes = this.state.panes
    let router
    panes.map((item,i)=>{
      if(activeKey === item.id){
        router = item.url
        return false
      }
    })
    history.push(router)
    let selectedKey=activeKey
    this.setState({selectedKey ,activeKey});
  }
  render() {
    return (
      <Layout>
        <Sider width={220} style={{minHeight: '100vh', color: 'white'}}>
            <Menu handleClick = {this.handleClick}/>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Tabs
                    onChange={this.onChange.bind(this)}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                    hideAdd={this.state.hideAdd}
                >
                  {
                    this.state.panes && this.state.panes.map((pane, index) => {
                    let Component = routerData[index].content;
                      return <TabPane tab={pane.name} key={pane.id}  closable={pane.closable}>
                            <Component />
                        </TabPane>
                    })
                  }
                </Tabs>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout;