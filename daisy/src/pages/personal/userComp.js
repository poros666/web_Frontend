import React, { Component } from 'react'
import {Card,List,Col} from 'antd'

const compData = [
  {
      ID:1,
      competitionname: 'comp 1',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  },
  {
      ID:2,
      competitionname: 'comp 2',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  },
  {
      ID:3,
      competitionname: 'comp 3',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  },
  {
      ID:4,
      competitionname: 'comp 4',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  }]

export default class UserComp extends Component {
  constructor(props){
    super(props)
    this.state={
      data:compData
    }
  }
    render() {
        return (
            <div>
              <List
                style={{margin:20}}
                grid={{ gutter: 20, column: 3 }}
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                        title={
                            <a href={"#/compPage/"+item.ID+"=id"+item.ID}>
                                {item.competitionname}
                            </a>
                        }>
                            {item.description}
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        )
    }
}
