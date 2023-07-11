### 微信 request 请求封装

> 这是一个已经废弃的项目, 如果你有在小程序环境下使用通用请求库的需求, 建议使用 [axios](https://www.npmjs.com/package/axios) + [axios-plugins](https://www.npmjs.com/package/axios-plugins) 来满足使用需要.
> axios-plugins 提供了一个 `mp()` 的插件, 可以用来在不同的小程序环境下, 使用 `axios` 作为项目请求工具的需要.

## 1. 支持功能

> 参考 axios 实现, 使用方式上跟 axios 差不多.

> 新增云函数支持

## 2. use

```
 import { Request } from "wx-conn"; // import

 // instantiation
 let request = new Request({...your config});

 // use
 request.executeRequest({
     method:...,
     url:...,
     data:...
 }).[then or catch];

 // single use

 request.get(url,data,options?).[then or catch]

 // global use

 global.request = request; // demo 1

 // or push request to global properties.

```

### note

1. 请求预处理跟 response 解析尽量封装为公共方法,放到 transfromRequest 和 transformResponse 中处理
2. 云函数返回值, 云函数返回值要加壳,跟 request 请求后端拿到返回值尽量一致,这样可以省去一些返回值解析上面的麻烦
3. 如果确认不一致的情况下, 建议在 transformResponse 中,单独加一个云函数结果解析器.根据 requestOptions 判断
4. cookies 功能写出来以后我没测试过,尽量不要用。

5. 注意,编译 npm 的时候云函数在当前项目目录下,会被编译进去.导致 miniprogram_module 过大
   参考：https://developers.weixin.qq.com/community/develop/doc/000e241879cfd852c06ab6fd956c00

6. 真机运行如果出现 wx-req 加载失败情况, 将引用路径换成 miniprogram_module 下的绝对路径即可.微信小程序加载机制有代码大小检查,我在另外一个项目上出过这个问题.
