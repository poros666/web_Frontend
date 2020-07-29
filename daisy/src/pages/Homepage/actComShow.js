import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Layout,Row, Col,Divider, Menu, Breadcrumb} from 'antd'
import 'antd/dist/antd.css'

class actComShow extends Component {
    // state = {  }
    render() { 
        return (
            <div>
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    actComShow
                </Divider>
                <Row>
                    <Col flex={2}>2 / 5</Col>
                    <Col flex={3}>3 / 5</Col>
                        {/* <div class='competitionShow'>
                            <button id='moreComp'>更多</button>
                            <button id='swapComp'>换一换</button>
                            <div class='clearFix'></div>

                            <div class='compList'>
                                <li>competition competition competition 1 </li>
                                <li>competition competition competition 2 </li>
                                <li>competition competition competition 3 </li>
                                <li>competition competition competition 4 </li>
                            </div>
                        </div> */}
                    
                </Row>
            </div>
          );
    }
}
 
export default actComShow;
