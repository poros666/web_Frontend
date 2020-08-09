import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Menu, Input, Row, Col} from 'antd'
// import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;
const { Search } = Input;

class HeaderNav extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render() {
        const { current } = this.state;
        return (
            <div style={{position:'flex'}}>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{position:'flex'}}>
                    
                    <Menu.Item key="home" icon={<MailOutlined />}>
                        <a href="#/home" target="_blank" rel="noopener noreferrer">
                            首页
                        </a>
                    </Menu.Item>
                    <Menu.Item key="compPage" icon={<AppstoreOutlined />}>
                        <a href="#/searchCompPage" target="_blank" rel="noopener noreferrer">
                            比赛
                        </a>
                    </Menu.Item>
                    <Menu.Item key="community" icon={<AppstoreOutlined />}>
                        <a href="#/community" target="_blank" rel="noopener noreferrer">
                            社区
                        </a>
                    </Menu.Item>
                    
                   
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 400 }}
                    />

                    <SubMenu icon={<SettingOutlined />} 

                    title={"我的"
                   
                        }>
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
                        <Menu.Item key="userPost">
                                我的发布
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu icon={<SettingOutlined />} 
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
                            </a></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="signOut" icon={<MailOutlined />}>
                            登出
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default HeaderNav;
