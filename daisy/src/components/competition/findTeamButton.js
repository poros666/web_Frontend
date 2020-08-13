import React, { Component } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default class FindTeamButton extends Component {
    render() {
        return (
            <div>
                <Link to={"/findteam/"+this.props.compID}>
                <Button>组队</Button>
                </Link>
            </div>
        )
    }
}
