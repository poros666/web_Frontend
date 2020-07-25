import React, { Component } from 'react'
import {Input} from 'antd'
import { Button} from 'antd'

const { TextArea } = Input;

export default class PublishPost extends Component {
    render() {
        return (
            <>
            <h3>创建帖子</h3>
            <div>
                <TextArea rows={1} placeholder='发帖标题'/>
                <Button shape='round'>插入图片</Button>
                <br/>
                <TextArea rows={5} placeholder='发帖内容'/>
            </div>
            </>
        )
    }
}
