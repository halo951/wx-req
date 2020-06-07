import { Request, ResponseType, RequestMethod } from "./dist/index";
/**
 * request 请求工具
 */
export const request = new Request({
  baseUrl: ``,
  headers: { "content-type": "application/json" },
  transformRequest: [
    /** 自定义参数处理 */
    options => {
      options.custom = { ...options.custom };
    },
    /** format request url */
    options => {
      options.originUrl = options.url;
      options.url = options.url
        .replace(/%[a-z|A-Z|0-9]{2}/g, "")
        .replace(/\r|\n|\t/gim, "")
        .replace(/\/\//gim, "/")
        .replace(":/", "://");
    },
    /** filter undefined data - 删除 undefined 属性 */
    options => {
      for (let k in options.data) if (options && "undefined" === typeof options.data[k]) delete options.data[k];
    },
    /** 统计请求耗时 */
    async options => {
      options.startTime = new Date().getTime();
    }
  ],
  transformResponse: [
    response => {
      // 转写 data => result
      if (!response.data) {
        response.errMsg = `网络连接不稳定，请检查网络状态. Error:${response.statusCode}`;
        return Promise.reject({});
      }
      if (response?.data?.data) {
        response.data.result = response.data.data;
        delete response.data.data;
      }
    },
    /** 异常处理 */
    response => {
      let status = response.statusCode || 404;
      if (300 < status || !response.data || response.data.isError) {
        // 自定义 404, 500 异常处理
        if (404 == status) {
          response.errMsg = `网络连接不稳定，请检查网络状态. Error:${response.statusCode}`;
        } else if (400 == status) {
          response.errMsg = "参数异常.";
        } else if (401 == status) {
          response.errMsg = "您的账号意外退出,请重新登录";
          // 中断回调
          return Promise.reject({});
        } else {
          response.errMsg = `遇到了一个未知的错误 -_-`;
        }
        // 返回处理结果
        return Promise.reject(response);
      }
    }
  ],
  responseType: ResponseType.JSON,
  method: RequestMethod.GET
});

// request
request
  .get("url", {
    query: 1,
    query2: 2
  })
  .then(res => console.log(res))
  .catch(res => console.error(res));
// call cloud

request
  .cloud("cloud function name", {
    data: 1
  })
  .then(res => console.log(res))
  .catch(res => console.error(res));

//
request
  .executeRequest({
    url: "",
    data: {},
    method: "GET"
  })
  .then(res => console.log(res))
  .catch(res => console.error(res));
