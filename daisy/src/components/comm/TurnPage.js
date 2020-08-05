import React, { Component } from 'react'
import{  Pagination  } from 'antd';

export default class TurnPage extends Component {
    render() {

        function onChange(pageNumber) {
            console.log('Page: ', pageNumber);
          }

        return (
            <>
                <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={onChange} />
            </>
        )
    }
}