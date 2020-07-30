import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Menu} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'

const { SubMenu } = Menu;

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
                {/* <div className="logo" /> */}
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    首页
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    比赛
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    社区
                </Menu.Item>
                {/* 搜索栏 */}
                <SubMenu icon={<SettingOutlined />} title="我的">
                    {/* <Menu.ItemGroup title="Item 1"> */}
                    <Menu.Item key="setting:1">我的队伍</Menu.Item>
                    <Menu.Item key="setting:2">我的比赛</Menu.Item>
                    {/* </Menu.ItemGroup> */}
                    <Menu.Item key="setting:3">我的发布</Menu.Item>
                    <Menu.Item key="setting:4">退出登录</Menu.Item>
                </SubMenu>

                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    收藏
                </Menu.Item>

                <SubMenu icon={<SettingOutlined />} title="消息">
                    <Menu.Item key="setting:1">比赛通知</Menu.Item>
                    <Menu.Item key="setting:2">系统公告</Menu.Item>
                    <Menu.Item key="setting:3">私信</Menu.Item>
                    <Menu.Item key="setting:4">回复我的</Menu.Item>
                    <Menu.Item key="setting:5">队伍消息</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default HeaderNav;