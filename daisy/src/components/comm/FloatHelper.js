import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { BackTop, Affix,Button, Popover} from 'antd'

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

const content=(
    <div>
       <a>客服</a>
       <br/><br/>
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
            <div style={{position:'fixed', zIndex: 2}}>
                <div 
                // style={{ position:'relative'}}
                >
                    <BackTop visibilityHeight={0}>
                    <div style={styleBackTop}>up</div>
                    </BackTop>
                </div>
                
                {/* <div 
                style={{position:'fixed',float:'right',right:'70px',bottom:'120px'}}
                >
                    <Popover
                        content={content}
                        placement="rightTop"
                        // arrowPointAtCenter
                        getPopupContainer={triggerNode => triggerNode.parentNode}
                        trigger="hover"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Button type="primary" style={styleHelper}>
                            Helper
                        </Button>
                    </Popover>
                </div> */}
            </div>
         );
    }
}
