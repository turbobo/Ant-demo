// 必须引入
import React, { Component } from "react";
// 面包屑
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// 引入阿里dva框架，不然不能和服务端交互,必须引入
import { connect } from "dva";
import {Card, Descriptions} from "antd";

// @ts-ignore
@connect(({ detaildemo, loading }) => ({
  data: detaildemo.data, // 将data赋值给
  loading: loading
}))
class Detaildemo extends Component {
  // 每次调用render之前渲染
  componentDidMount() {
    // 分发器,用dispatch一定要写@connect注解
    // @ts-ignore
    const { dispatch } = this.props;
    // 分发器调用models发起请求，具体流程是dispatch=>models=>services
    dispatch({
      // demo命名空间，fetch是该文件中的方法，对应src/models/demo.js，因为demo的namespace的值Demo
      type: "detaildemo/fetch",
      // 把页面获得stId传过去
      // payload: {stId: params.id},    //{ a: "1", b: "2" }
      // payload: "a",    //{ a: "1", b: "2" }
      payload: this.props.match.params.stId,

    });
  }

  render() {
    // 这里也采用了解构赋值
    let { data } = this.props;    // 只能定义为data
    // console.log(data);
    return (
      <PageHeaderWrapper>
        <div>
          <Card bordered={false}>
            <Descriptions title="用户信息" style={{ marginBottom: 32 }}>
              <Descriptions.Item label="StId">{data.stId}</Descriptions.Item>
              <Descriptions.Item label="StName">{data.stName}</Descriptions.Item>
              <Descriptions.Item label="StIdCard">{data.stIdCard}</Descriptions.Item>
              <Descriptions.Item label="StAddress">{data.stAddress}</Descriptions.Item>
              <Descriptions.Item label="CreatorId">{data.creatorId}</Descriptions.Item>
              <Descriptions.Item label="CreatorName">{data.creatorName}</Descriptions.Item>
              <Descriptions.Item label="CreatorTime">{data.createTime}</Descriptions.Item>
              <Descriptions.Item label="UpdateTime">{data.updateTime}</Descriptions.Item>
              <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
       </PageHeaderWrapper>
    )
  }
}

export default Detaildemo;
