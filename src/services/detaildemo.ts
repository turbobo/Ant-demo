// ant 自己封装好的发送ajax请求的工具
import request from "@/utils/request";

// get请求 注意 ` 这个符号 不是这种 ’号
export async function getDetail(params) {
  // stringify这个将json序列化 比如 {"a"：1，"b":2} 转换成 a=1&b=2
  // return request(`/server/api/test/user?${stringify(params)}`);
  // console.log('detaildemo请求8080前'+"----------------"+params);
  //注意后台接收参数的格式  /getDetail/{stId}==>${params}
  return request(`/api/example/getDetail/${params}`,{
      method: "GET"
    }
  );
}
