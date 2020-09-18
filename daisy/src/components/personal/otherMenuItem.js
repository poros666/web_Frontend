import React, { Component } from 'react'
import {Menu} from 'antd'
import { Link} from "react-router-dom";

export default class OtherMenuItem extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item  key="team">
                        <Link to={"/personal/account="+this.props.account+"/team"}>
                            TA的队伍
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="comp">
                        <Link to={"/personal/account="+this.props.account+"/comp"}>
                            TA的比赛
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="colle">
                        <Link to={"/personal/account="+this.props.account+"/colle"}>
                            TA的收藏
                        </Link>
                    </Menu.Item>
                    <Menu.Item  key="inform">
                        <Link to={"/personal/account="+this.props.account+"/inform"}>
                            TA的资料
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
