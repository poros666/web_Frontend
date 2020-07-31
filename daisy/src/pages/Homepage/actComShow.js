import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col, Space} from 'antd'
import 'antd/dist/antd.css'
import ActivityShow from './ActivityShow'
import CompShow from'./CompShow'

class ActComShow extends Component {
    // state = {  }
    render() { 
        return (
            <div style={{height: '450px', margin:'40px 150px'
            // ,border:'2px gray solid'
            }}>
                
                {/* 24栅栏 2:3 → 9:15 */}
                <Row>
                    <Col span={10} offset={0}>
                        <ActivityShow/>
                    </Col>
                    <Col span={12} offset={2}>
                        <CompShow/>
                    </Col>
                </Row>

                {/* <Row>
                    <Col flex={2}>
                        <ActivityShow/>
                    </Col>

                    <Col flex={3}>
                        <CompShow/>
                    </Col>                 
                </Row> */}
            </div>
          );
    }
}
 
export default ActComShow;
