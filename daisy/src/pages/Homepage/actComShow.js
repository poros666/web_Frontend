import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col,Divider, Space} from 'antd'
import 'antd/dist/antd.css'
import ActivityShow from './ActivityShow'
import CompShow from'./CompShow'

const { Header, Footer, Sider, Content } = Layout;

class ActComShow extends Component {
    // state = {  }
    render() { 
        return (
            <div style={{height: '450px', margin:'40px 150px',border:'2px gray solid'}}>
                {/* <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    actComShow
                </Divider> */}
                <Space size='100px'>
                    <Row>
                        <Col flex={2}>
                            <ActivityShow/>
                        </Col>

                        <Col flex={3}>
                            <CompShow/>
                        </Col>                 
                    </Row>
                </Space>

            </div>
          );
    }
}
 
export default ActComShow;
