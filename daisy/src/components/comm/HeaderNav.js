import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Layout, Menu, Input, Space,Divider, Button} from 'antd'
import { LayoutOutlined,CommentOutlined, HomeOutlined, UserOutlined, RadarChartOutlined,LogoutOutlined, LoginOutlined} from '@ant-design/icons'
import logo from './logo-re.png'
import { withRouter,Link } from 'react-router-dom'
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
          searchWord:'',
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
    setSearchWord(e){
        // console.log(e.target.value)
        this.setState({
            searchWord: e.target.value
        })
    }
    searchJump(value){
        console.log(value)
        console.log(value.length)
        var searchWord=""
        // String word=JSON.toJSONString(this.state.searchWord)
        if(value.length == 0){
            window.open('#/search')
        }
        else{
            // <Link
            //     // 弹出新的选项卡只能用search来传递数据，单页面的话可以使用state
            //     // 注意，此处search传递是以URL拼接的方式传递传递长度根据浏览器限制来的，只能传递字符串，
            //     // 还有search传递过去的参数会默认追加一个? e.g search?id=1
            //     // state则没有限制，可直接传递obj
            //     to={{ pathname: "/maker/bill/detail/supplement", search: JSON.stringify(billDetailObj) }}
            //     target="_blank"
            //     // 当target="_blank"打开新页面的时候，state内容无法传递
            //     state：{id:1}
            //     className="fontBlue fontWeight">
            //     打开新页面
            // </Link>
            // w.location.href="#/searchResult/all?"+'keyword='+String(value)
            window.open("#/searchResult/all?"+'keyword='+String(value))
            // 这里可以onClick，实现点击跳转传参
            // this.props.history.push({
            //     pathname: `/searchResult/all`, 
            //     // search: JSON.stringify(value),
            //     search: String(value),
            //     target:"_blank"
                // state: {keyWord:this.state.searchWord},
            // });
            // console.log( this.props)
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
                    <Space size={20}  style={{ position: 'fixed', zIndex: 1, width: '100%', background:'white'}}>
                        <div className="logo" style={{margin:'0,100px',position:'relative',left:'50%'}}>
                            <a href="#/home" target="_blank" rel="noopener noreferrer">
                                <img 
                                    height={'40px'}
                                    src={logo} 
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div style={{position:'relative',}}>
                            <Button onClick={this.handleClick} style={{width:'60px'}}>
                                {this.state.isLogin ? 'OFF':'IN' }
                            </Button>
                        </div>
                        <div style={{position:'relative',width:'100%',left:'20%'}}>
                            <Menu 
                            // style={{width:'100%'}}
                            // onClick={this.handleClick} 
                            // selectedKeys={[current]}
                             mode="horizontal" 
                            >
                                <Menu.Item key="home" icon={<HomeOutlined />}>
                                    <a href="#/home" target="_blank" rel="noopener noreferrer">
                                        首页
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="compPage" icon={<RadarChartOutlined />}>
                                    <a href="#/allCompPage" target="_blank" rel="noopener noreferrer">
                                        比赛
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="community" icon={<LayoutOutlined />}>
                                    <a href="#/community" target="_blank" rel="noopener noreferrer">
                                        社区
                                    </a>
                                </Menu.Item>
                                                        
                                <Search 
                                    history={this.props.history}
                                    placeholder="请输入想要搜索的内容"
                                    value={this.state.searchWord}
                                    onChange={e => this.setSearchWord(e)}
                                    onSearch={value => this.searchJump(value)}
                                    onKeyDown={e=>this.keyDown(e)}
                                    style={{ width: 400 }}
                                />
                                
                                <SubMenu icon={<UserOutlined />} 
                                key='personalMenu'
                                style={{ visibility: this.state.isVisibility}}
                                title={"我的"}>
                                    
                                    <Menu.Item key="userHome">
                                        <a href="#/personal" target="_blank" rel="noopener noreferrer">
                                            个人主页
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="userTeam">
                                        <a href="#/personal/team" target="_blank" rel="noopener noreferrer">
                                            我的队伍
                                        </a>
                                        </Menu.Item>
                                    <Menu.Item key="userComp">
                                        <a href="#/personal/comp" target="_blank" rel="noopener noreferrer">
                                            我的比赛
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item key="userCollege">
                                        <a href="#/personal/colle" target="_blank" rel="noopener noreferrer">
                                            我的收藏
                                        </a>
                                    </Menu.Item>
                                </SubMenu>

                                <SubMenu icon={<CommentOutlined />} 
                                key='messageMenu'
                                style={{ visibility: this.state.isVisibility,}}
                                title={"消息"
                                // <a href ={"#/message"}>{"消息"}</a>
                                    }>
                                    <Menu.Item key="systemNotice">
                                        <a href="#/message/system" target="_blank" rel="noopener noreferrer">
                                            系统公告
                                        </a></Menu.Item>

                                    <Menu.Item key="compNotice">
                                        <a href="#/message/comp" target="_blank" rel="noopener noreferrer">
                                            比赛通知
                                        </a></Menu.Item>

                                    <Menu.Item key="replyNotice">
                                        <a href="#/message/reply" target="_blank" rel="noopener noreferrer">
                                            回复我的
                                        </a></Menu.Item>

                                    <Menu.Item key="letterNotice">
                                        <a href="#/message/letter" target="_blank" rel="noopener noreferrer">
                                            私信
                                        </a></Menu.Item>

                                    <Menu.Item key="teamNotice">
                                        <a href="#/message/team" target="_blank" rel="noopener noreferrer">
                                            队伍消息
                                        </a></Menu.Item>

                                    <Menu.Item key="applyNotice">
                                        <a href="#/message/apply" target="_blank" rel="noopener noreferrer">
                                            组队申请
                                        </a>
                                    </Menu.Item>
                                </SubMenu>
                                <Menu.Item key="signOut" icon={<LogoutOutlined />}
                                    style={{ display: this.state.isSignOutMenu,}} >
                                        登出
                                </Menu.Item>
                                <Menu.Item key="signIn" icon={<LoginOutlined />}
                                    style={{ display: this.state.isSignInMenu,float:'right'}}>
                                    <a href="#/login" target="_blank" rel="noopener noreferrer">
                                        登录
                                    </a>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Space>
                </Layout>
                
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:23 }}/>
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:23 }}/>
                <Divider style={{ position: 'fixed', zIndex: 1, width: '100%', top:24 }}/>
            </div>
        )
    }
}

// export default HeaderNav;
export default withRouter(HeaderNav);