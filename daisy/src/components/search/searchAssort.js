import React, { Component } from 'react'
import { Layout } from 'antd';
/*import SearchContent from "../../components/search/searchContent"
import SearchContentComm from "../../components/search/searchContentComm"
import SearchContentComp from "../../components/search/searchContentComp"
import SearchContentUsr from "../../components/search/searchContentUsr"
*/
import { Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import { searchRoutes } from '../../routes/index'

export default class SearchAssort extends Component {
    constructor(props){
      super(props);
      this.State={
          searchWord:'',
      }
    }
    state = {
      current: 'mail',
    };

    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };
    render(){
        const { current } = this.state;
        return(
      
        <Layout className="searchAssortBox" style={{ width: '86%', margin: '3% 7%' }}>
          <Menu 
            onClick={this.handleClick} 
            selectedKeys={[current]} 
            mode="horizontal"
            style={{ textAlign:"center", fontSize:18 }}
            >
          {
              searchRoutes.map((item,index)=>{
                // console.log('path:'+item.path)
                // console.log('title:'+item.title)
                return (<Menu.Item key={index}><Link to={item.path+'?keyword='+this.State.searchWord}>{item.title}</Link></Menu.Item>)
              })
          }
          {/* 头部导航栏菜单内容 */}
          </Menu>

          <Layout
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
          >
          {
            searchRoutes.map((item,index)=>{
              console.log(item.path)
              return (<Route key={index} path={item.path} component={item.component}/>)
            })
          }
          {/* 对应每个组件的内容 */}
          </Layout>

        </Layout>
        );
    }
}