import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'

export default class FindTeamButton extends Component {
    render() {
        return (
            <div>
                <a href={"#/findteam/id="+this.props.compID}>
                <Button type="primary" icon={<SmileTwoTone />}>组队</Button>
                </a>
            </div>
        )
    }
}
