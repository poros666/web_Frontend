import React, { Component } from 'react'
import { Layout } from 'antd';
import { Input } from 'antd';
/*
import SearchContent from "../../components/search/searchContent"
import SearchContentComm from "../../components/search/searchContentComm"
import SearchContentComp from "../../components/search/searchContentComp"
import SearchContentUsr from "../../components/search/searchContentUsr"
*/
import { Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import { searchRoutes } from '../../routes/index'

const { Search } = Input;

export default class SearchAssort extends Component {

    constructor(props) {
      super(props)
      this.state = {
        //kw: this.props.match.params.kw,
        kw: window.location.hash.slice(25),
        //type: this.props.match.params.type
        type: this.props.type
      }
      console.log(this.state.kw)
    }

    inputChange(e){
      this.setState({
        kw: e.target.value
      })
      console.log(this.state.kw)
    }

    handleClick(e){
      console.log('click ', e.key);
      this.setState({ 
        type: e.key
      });
      console.log('click ', this.state.type);
    };

    searchJump(value){
        //console.log(value)
        window.location.hash=`#/searchResult/type=${this.state.type}/${this.state.kw}`
    }
/*
    keyDown(e){
      if(e.keyCode === 13){
      }
    }
*/    
    render(){
      console.log(this.state.kw)

        return(
      
        <Layout className="searchAssortBox" style={{ width: '86%', margin: '3% 7%' }}>
          <Layout className="searchFrame" style={{ backgroundColor: 'white' }}>
            <Search
                placeholder="搜搜看你感兴趣的内容吧～"

                value={this.state.kw}
                onSearch={value => this.searchJump(value)}
                //onKeyDown={e=>this.keyDown(e)}
                onChange={this.inputChange.bind(this)}
                enterButton="Search"
                size="large"
                style={{ width: '68%', marginLeft: '15%'}}
            />  
                        
            <br/>
            <br/>           
          </Layout>

          <Menu 
            onClick={this.handleClick.bind(this)}
            defaultSelectedKeys={[this.state.type]} 
            mode="horizontal"
            style={{ textAlign:"center", fontSize:18 }}
            >
          {/*
              searchRoutes.map((item,index)=>{
                return (<Menu.Item key={index}><Link to={item.path+this.state.kw}>{item.title}</Link></Menu.Item>)
              })
          */}
            <Menu.Item key="comp">
            <Link to={'/searchResult/type=comp/'+this.state.kw } >比赛</Link>
            </Menu.Item>
            <Menu.Item key="comm">
            <Link to={ '/searchResult/type=comm/'+this.state.kw } >社区</Link>
            </Menu.Item>
            <Menu.Item key="user">
            <Link to={ '/searchResult/type=user/'+this.state.kw } >用户</Link>
            </Menu.Item>
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
              //console.log(item.path+this.state.kw)
              return (<Route key={index} path={item.path+this.state.kw} component={item.component}/>)
            })
          }
          {/* 对应每个组件的内容 */}
          </Layout>

        </Layout>
        );
    }
}