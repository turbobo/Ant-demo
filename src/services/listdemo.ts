// ant 自己封装好的发送ajax请求的工具
import request from "@/utils/request";

// get请求 注意 ` 这个符号 不是这种 ’号
export async function getList() {
  return request(`/api/example/getList`,{
      method: "GET"
    }
  );
}
