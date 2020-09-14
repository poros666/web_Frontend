import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons'

export default class FindTeamButton extends Component {
    render() {
        return (
            <div>
                <Link to={
                    {
                        pathname:"/findTeam",
                        query:{
                            compID:this.props.compID,
                            compName:this.props.compName,
                            compInformation:this.props.compInformation
                            }
                    }
                    }>
                <Button type="primary" icon={<SmileTwoTone />}>组队</Button>
                </Link>
            </div>
        )
    }
}
