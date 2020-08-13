import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { BackTop, Affix,Button, Popover } from 'antd'

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
/*
export default class FloatHelper extends Component {
    render() { 
        return ( 
            <div>
                {//  客服 固定悬浮口  有问题
                 <div style={{ height: '600vh', padding: 8 }}>
                    <Affix offsetBottom={250} style={{ position: 'absolute', left: '1200px' }}>
                        <Button>
                         Affix bottom    
                        </Button>
                    </Affix>
                </div> }

                <div style={{ height: '0vh', padding: 8 }}>
                    <BackTop visibilityHeight={0}>
                    <div style={styleBackTop}>up</div>
                    </BackTop>
                </div>
            </div>
         );
    }
}
*/
const content=(
     <div>
        <a>客服</a><br/>
        <a>帮助中心</a>
     </div> 
     );

export default class FloatHelper extends Component {
     state = {
         visible: false,
       };
    
     hide = () => {
         this.setState({
           visible: false,
         });
       };
    
     handleVisibleChange = visible => {
         this.setState({ visible });
       };

     render() {
         return (
             <Affix offsetTop={300} onChange={affixed => console.log(affixed)}>
                 <Popover
                     content={content}
                     placement="rightTop"
                     getPopupContainer={triggerNode => triggerNode.parentNode}
                     trigger="click"
                     visible={this.state.visible}
                     onVisibleChange={this.handleVisibleChange}
                 >
                     <Button type="primary">Click me</Button>
                 </Popover>
                 <BackTop visibilityHeight={0}>
                    <div style={styleBackTop}>up</div>
                 </BackTop>
             </Affix>
         )
     }
 }
