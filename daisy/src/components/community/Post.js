import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>author</p>
                    <h1>title</h1>
                    <p>content</p>
                    <p>data(包括评论数量、各种按钮之类的)</p>
                </div>
            </div>
        )
    }
}
