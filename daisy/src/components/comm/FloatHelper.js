import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BackTop, Affix, Button } from 'antd';

// const styleCustService= {
//     height: 40,
//     width: 40,
//     lineHeight: '40px',
//     borderRadius: 4,
//     backgroundColor: '#1088e9',
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 14,
//   };

const styleBackTop = {
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
                {/*  客服 固定悬浮口  有问题
                 <div style={{ height: '600vh', padding: 8 }}>
                    <Affix offsetBottom={250} style={{ position: 'absolute', left: '1200px' }}>
                        <Button>
                         Affix bottom    
                        </Button>
                    </Affix>
                </div> */}

                <div style={{ height: '40vh', padding: 8 }}>
                    <BackTop visibilityHeight={0}>
                    <div style={styleBackTop}>up</div>
                    </BackTop>
                </div>
            </div>
         );
    }
}
