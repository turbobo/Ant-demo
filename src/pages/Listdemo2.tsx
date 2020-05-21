// // 必须引入
// import React, { Component } from "react";
// // 面包屑
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
//
// import { Table } from 'antd';
// // 引入阿里dva框架，不然不能和服务端交互,必须引入
// import { connect } from "dva";
//
// // 自定义样式引入less
// import styles from "./Listdemo.less";
//
// const columns = [
//   {
//     title: "StId",
//     dataIndex: "stId",
//     key: "stId",
//     // render: text => <a>{text}</a>
//   },
//   {
//     title: "StName",
//     dataIndex: "stName",
//     key: "stName"
//   },
//   {
//     title: "StIdCard",
//     dataIndex: "stIdCard",
//     key: "stIdCard"
//   },
//   {
//     title: "StAddress",
//     key: "stAddress",
//     dataIndex: "stAddress",
//   },
//   {
//     title: "CreatorId",
//     key: "creatorId",
//     dataIndex: "creatorId",
//   },
//   {
//     title: "CreatorName",
//     key: "creatorName",
//     dataIndex: "creatorName",
//   },
//   {
//     title: "CreateTime",
//     key: "createTime",
//     dataIndex: "createTime",
//   },
//   {
//     title: "UpdateTime",
//     key: "updateTime",
//     dataIndex: "updateTime",
//   },
//   {
//     title: "Status",
//     key: "status",
//     dataIndex: "status",
//   }
// ];
//
// 1.@connect必须放在export default class前面
// 2.这个不写，你在这个页面里面获取不到服务器返回给你的数据
// 3.采用解构赋值的方式，第一个参数Demo是命名空间，我们数据就是从这里拿到的
// @connect(({ listdemo, loading }) => ({
//   // data: listdemo.data, // 将data赋值给
//   listdemo,
//   loading: loading.effects['listdemo/fetch']
// }))
//
// class Listdemo extends Component {
//
//   // componentWillMount渲染之前调用，一般处理ajax异步回来的数据，
//   // 等下面render渲染的时候好绑定
//   componentWillMount() {
//   }
//
//   每次调用render之前渲染
//   componentDidMount() {
//     // 分发器,用dispatch一定要写@connect注解
//     const { dispatch } = this.props;
//     // 分发器调用models发起请求，具体流程是dispatch=>models=>services
//     dispatch({
//       // listdemo命名空间，fetch是该文件中的方法，对应src/models/listdemo.js，因为listdemo的namespace的值Listdemo
//       type: "listdemo/fetch",
//       // 参数，一般采用json格式
//       payload: "",
//
//     });
//   }
//
//   render() {
// //定义antd table 数据
//     const data = [];
//     //获取接口中的数据
//     let  rowsList  = this.props.listdemo.data;
//     //判断，如果第一次渲染是没有数据的，则不进行操作，第二次渲染才有数据，再进行下面的操作
//     //重新组织数据(Table组件要求每组数据都要有唯一的key)，并push到data中
//     //antd 数据解析
//     //判断rowsList有数据
//     if(rowsList){
//       for(let i = 0 ; i < rowsList.length; i++) {
//         //push数据
//         data.push({
//           key: 'i+1',
//           stId: rowsList[i].stId,
//           stName: rowsList[i].stName,
//           stIdCard: rowsList[i].stIdCard,
//           stAddress: rowsList[i].stAddress,
//           creatorName: rowsList[i].creatorName,
//           createTime: rowsList[i].createTime,
//           updateTime: rowsList[i].updateTime,
//           status: rowsList[i].status,
//         })
//       }
//     }
//     return (
//       <PageHeaderWrapper>
//         <Table columns={columns} dataSource={data}/>
//       </PageHeaderWrapper>
//     );
//   }
// }
//
// export default Listdemo;
