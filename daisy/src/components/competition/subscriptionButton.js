import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { PlusCircleTwoTone } from '@ant-design/icons'

export default class SubscriptionButton extends Component {
    render() {
        return (
            <div>
               <Button type="primary" icon={<PlusCircleTwoTone />}>关注</Button>
            </div>
        )
    }
}
