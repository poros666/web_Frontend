import React, { Component } from 'react'
import {Menu} from 'antd'
import { Link} from "react-router-dom";

export default class MyMenuItem extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item  key="team">
                        <Link to={"/personal/account="+this.props.account+"/team"}>
                            我的队伍
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="comp">
                        <Link to={"/personal/account="+this.props.account+"/comp"}>
                            我的比赛
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="colle">
                        <Link to={"/personal/account="+this.props.account+"/colle"}>
                            我的收藏
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="post">
                        <Link to={"/personal/account="+this.props.account+"/post"}>
                            我的发布
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
