import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col,Divider, Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css'
import ActivityShow from './ActivityShow'
import CompShow from'./CompShow'

class actComShow extends Component {
    // state = {  }
    render() { 
        return (
            <div>
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    actComShow
                </Divider>
                <Row>
                    <Col flex={2}>
                        <ActivityShow/>
                    </Col>

                    <Col flex={3}>
                        <CompShow/>
                    </Col>                 
                </Row>
            </div>
          );
    }
}
 
export default actComShow;
