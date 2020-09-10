import React, { Component } from 'react'
import { Radio } from 'antd'





export default class SortChoose extends Component {
    render() {
        return (
            <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio value="a">按发布时间排序</Radio>
                    <Radio value="b">按匹配度排序</Radio>
                    <Radio value="c">按结束时间排序</Radio>
                </Radio.Group>
            </div>
        )
    }
}
