import React, { Component } from 'react'
import Post from '../../components/community/Post'
import Comment from '../../components/community/Comment'
import CommentContent from '../../components/community/CommentContent'
import DetailImformation from '../../components/community/DetailImformation'

export default class ReadPostContent extends Component {
    render() {//有很多评论内容
        return (
            <div>
                <Post/>
                <DetailImformation/>
                <Comment/>
                <CommentContent/>
            </div>
        )
    }
}
