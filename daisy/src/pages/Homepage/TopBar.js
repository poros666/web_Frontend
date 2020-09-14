import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Row, Col} from 'antd'
import 'antd/dist/antd.css'
import ActivityShow from './ActivityShow'
import CommunityShow from'./CommunityShow'

class TopBar extends Component {
    // state = {  }
    render() { 
        return (
            <div style={{margin:'60px 150px 40px 150px',
            // ,border:'2px gray solid'
            }}>
                
                {/* 24栅栏 2:3 → 9:15 */}
                <Row>
                    <Col span={12} offset={0}>
                        <ActivityShow/>
                    </Col>
                    <Col span={11} offset={1}>
                        <CommunityShow/>
                    </Col>
                </Row>
            </div>
          );
    }
}
 
export default TopBar;
