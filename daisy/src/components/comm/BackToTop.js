import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';


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

class BackToTop extends Component {
    // state = {  }
    render() { 
        return ( 
            <div style={{ height: '600vh', padding: 8 }}>
                <BackTop visibilityHeight={0}>
                <div style={style}>UP</div>
                </BackTop>
            </div>
         );
    }
}
 
export default BackToTop;

