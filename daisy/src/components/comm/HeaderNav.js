import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Menu, Input} from 'antd'
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
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                
                <Menu.Item key="home" icon={<MailOutlined />}>
                    <a href="localhost:3000/#/home" target="_blank" rel="noopener noreferrer">
                        首页
                    </a>
                </Menu.Item>
                <Menu.Item key="compPage" icon={<AppstoreOutlined />}>
                    <a href="localhost:3000/#/searchCompPage" target="_blank" rel="noopener noreferrer">
                        比赛
                    </a>
                </Menu.Item>
                <Menu.Item key="community" icon={<AppstoreOutlined />}>
                    <a href="localhost:3000/#/community" target="_blank" rel="noopener noreferrer">
                        社区
                    </a>
                </Menu.Item>
                
                {/* 搜索栏 */}
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 400 }}
                />

                <SubMenu icon={<SettingOutlined />} title="我的">
                    {/* <Menu.ItemGroup title="Item 1"> */}
                    <Menu.Item key="userTeam">我的队伍</Menu.Item>
                    <Menu.Item key="userComp">我的比赛</Menu.Item>
                    {/* </Menu.ItemGroup> */}
                    <Menu.Item key="userPost">我的发布</Menu.Item>
                    <Menu.Item key="signOut">退出登录</Menu.Item>
                </SubMenu>

                <Menu.Item key="favorite" icon={<AppstoreOutlined />}>
                    收藏
                </Menu.Item>

                <SubMenu icon={<SettingOutlined />} title="消息">
                    <Menu.Item key="compNotice">比赛通知</Menu.Item>
                    <Menu.Item key="systemNotice">系统公告</Menu.Item>
                    <Menu.Item key="userChat">私信</Menu.Item>
                    <Menu.Item key="userReply">回复我的</Menu.Item>
                    <Menu.Item key="teamInfo">队伍消息</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default HeaderNav;
