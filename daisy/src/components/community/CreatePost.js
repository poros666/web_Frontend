import React, { Component } from 'react'

export default class CreatePost extends Component {
    render() {//第一块用于防止用户头像 第二块点击之后会展开
        //可能考虑做成百度贴吧那样子的
        return (
            <div>
                <div>
                    <p>这是图片</p>
                    <image>

                    </image>
                </div>
                <div >
                    <textarea>
                    点一下就会展开的文本区,这里要做成横向布局
                    </textarea>
                </div>
            </div>
        )
    }
}
