import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'

export default class FindTeamButton extends Component {
    render() {
        return (//findteam页面暂时有问题，等待修复，带参数跳转已经实现
            <div>
                <Link to={"/findTeam/"+this.props.compID}>
                <Button type="primary" icon={<SmileTwoTone />}>组队</Button>
                </Link>
            </div>
        )
    }
}
