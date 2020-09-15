import React, { Component } from 'react'

export default class CompetitionName extends Component {
    render() {
        return (
            <div >
                <h1 style={{textAlign:"center"}}>{this.props.compName}</h1>
            </div>
        )
    }
}
