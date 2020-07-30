import React, { Component } from 'react'
import{  Pagination  } from 'antd';
import 'whatwg-fetch'

export default class TurnPage extends Component {
   state={
    agriculturalList: [],
    currentData: [],
    total: 50,
    pageSize: 1,
    pageNumber: parseInt(window.location.hash.slice(1), 0) || 1 //获取当前页面的hash值，转换为number类型
   }

   onPageChange=page=>{
     console.log("page:",page);
    this.setState({
      pageNumber: page
    });
      window.location.hash = `#${page}`; //设置当前页面的hash值为当前page页数
      console.log(window.location.hash);
  }

    render() {
        return (
            <>
                <Pagination 
                showQuickJumper 
                defaultCurrent={this.state.pageNumber} 
                defaultPageSize={this.state.pageSize} 
                total={this.state.total}
                onChange={this.onPageChange} 
                />
            </>
        )
    }
}
/*import{  Pagination  } from 'antd';
import React, { Component } from 'react'

export default class TurnPage extends Component {
    render() {
        function onChange(pageNumber) {
            console.log('Page: ', pageNumber);
          }
        return (
            <div>
                <Pagination showQuickJumper defaultCurrent={1} defaultPageSize={1} total={50} onChange={onChange} />
            </div>
        )
    }
}*/