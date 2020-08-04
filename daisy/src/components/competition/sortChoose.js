import React, { Component } from 'react'
import { Radio } from 'antd'





export default class SortChoose extends Component {
    render() {
        return (
            <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">按发布时间排序</Radio.Button>
                    <Radio.Button value="b">按匹配度排序</Radio.Button>
                    <Radio.Button value="c">按结束时间排序</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}
