import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider, Button,Row,Col} from 'antd'
import { LayoutOutlined,CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined,LogoutOutlined, LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
// import logo from './logo2.png'
// import logo from './logo3.png'

const { Header} = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

class HeaderNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLogin: false,
          isVisibility:'hidden',
        //   isSignInMenu:'block',
          isSignInMenu:' ',
          isSignOutMenu:'none',
        };

        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
            isVisibility: prevState.isLogin ? 'hidden': 'visible',
            // isSignInMenu: prevState.isLogin ? 'inline-table': 'none',
            isSignInMenu: prevState.isLogin ? ' ':'none',
            isSignOutMenu: prevState.isLogin ? 'none': '',
        }));
    }
    // state = {
    //     current: 'mail',
    //   };
    // handleClick = e => {
    //     console.log('click ', e);
    //     this.setState({ current: e.key });
    // };
    searchJump(value){
        console.log(value)
        console.log(value.length)
        var w=window.open('about:blank')
        if(value.length == 0){
            w.location.href="#/search"
        }
        else{
            w.location.href="#/searchResult"
        }
    }
    
    keyDown(e){
        if(e.keyCode === 13){
        }
    }

    render() {
        // const { current } = this.state;
        return (
            <div >
                <Layout>
                    <div style={{ position: 'fixed', zIndex: 1, width: '100%' ,color:'white',height:'60px'}}>
                        <Row>
                            <Col span={2} offset={0}>
                             <div className="logo" style={{width:'10%',margin:'0',padding:'0',position:'relative'}}>
                                <a href="#/home" target="_blank" rel="noopener noreferrer">
                                    <img 
                                        height={'40px'}
                                        src={logo} 
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            </Col>
                            <Col span={2} offset={18}>
                                <Button type="primary" style={{float:'right',top:'15px'}}>换一换</Button>
                            </Col>
                            <Col span={2} offset={0}>
                                <Button type="primary" style={{float:'right',top:'15px'}}>
                                    <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                        更多</a>
                                </Button>
                            </Col>
                        </Row>
                        
                        <Menu theme="dark" mode="horizontal"
                            style={{width:'50%',position:'relative',float:'right'}}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </div>
                
                </Layout>
            </div>
        )
    }
}

export default HeaderNav;
