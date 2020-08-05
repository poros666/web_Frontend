import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class FindTeamButton extends Component {
    render() {
        return (//findteam页面暂时有问题，等待修复，带参数跳转已经实现
            <div>
                <Link to={"/findTeam/"+this.props.compID}>
                <Button>组队</Button>
                </Link>
            </div>
        )
    }
}
