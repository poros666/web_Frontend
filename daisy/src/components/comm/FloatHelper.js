import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

export default class FloatHelper extends Component {
    render() { 
        return ( 
            <div>
                <div style={{ height: '600vh', padding: 8 }}>
                    <BackTop visibilityHeight={0}>
                    <div style={style}>UP</div>
                    </BackTop>
                </div>
            </div>
         );
    }
}
