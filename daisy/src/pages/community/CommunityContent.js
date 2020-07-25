import React, { Component } from 'react'
import CreatePost from '../../components/community/CreatePost'
import Post from '../../components/community/Post'
import SortPost from '../../components/community/SortPost'

export default class CommunityContent extends Component {
    render() {
        //每个组件之间都要留有一定的空间，Post要做成很多个
        return (
            <div style={{padding:'0 50px'}}>
                <SortPost/>
                <br/><br/>
                <Post/>
                <CreatePost/>
            </div>
        )
    }
}
