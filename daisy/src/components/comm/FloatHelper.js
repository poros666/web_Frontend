import React, { Component } from 'react'
import { Affix,Button, Popover } from 'antd'


const content=(
    <div>
        <p>Content</p>
        <p>Content</p>
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
            </Affix>
        )
    }
}
