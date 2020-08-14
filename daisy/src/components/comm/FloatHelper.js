import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { BackTop, Affix,Button, Popover } from 'antd'

const styleHelper = {
    height: 40,
    width: 70,
    lineHeight: '0px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    // textAlign: 'center',
    // verticalAlign: 'middle',
    fontSize: 14,
  };

const styleBackTop = {
    height: 40,
    width: 70,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  };

export default class FloatHelper extends Component {
    
    render() { 
        return ( 
            <div>
                <div>
                <Affix style={{ position: 'fixed', top: 580, left: 1380 }}>
                    <Button type="primary" 
                    // onClick={() => setBottom(bottom + 10)}
                    style={styleHelper}
                    >
                    Helper
                    </Button>
                </Affix>
                </div>

                <div style={{ height: '8vh', padding: 8 }}>
                    <BackTop visibilityHeight={0}>
                    <div style={styleBackTop}>up</div>
                    </BackTop>
                </div>
            </div>
         );
    }
}