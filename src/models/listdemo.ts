// 导入接口文件，并采用解构的方式，
// 将listdemo.ts的文件里面的getList赋值给这里的getList
import { getList } from "@/services/listdemo";

export default {
  namespace: "listdemo",

  //  State 是储存数据的地方，收到 Action 以后，会更新数据。
  state: {
    data: {}
  },

  effects: {
    /**
     * @param payload 参数
     * @param call 执行异步函数调用接口
     * @param put 发出一个 Action，类似于 dispatch 将服务端返回的数据传递给上面的state
     * @returns {IterableIterator<*>}
     */
    * fetch({ payload }, { call, put }) {
      // 访问之前可以做一些操作
      const response = yield call(getList, payload);
      // 拿到数据之后可以做一些操作
      yield put({
        // 这行对应下面的reducers处理函数名字
        type: "save",
        // 这是将最后的处理数据传递给下面的reducers函数
        payload: response
      });
    }
  },

  reducers: {
    /**
     *
     * @param state
     * @param action
     * @returns {{[p: string]: *}}
     */
    save(state, action) {
      return {
        ...state, // es6三点运算符合，有点模糊解释不清楚
        data: action.payload // 上面与服务器交互完的数据赋值给data,这里的data 对应最上面 state 里面的data
      };
    }
  }
};
