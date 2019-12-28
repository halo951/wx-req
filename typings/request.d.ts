import { RequestConfig } from "./model/RequestConfig";
import { ResponseOptions } from "./model/ResponseOptions";
import { RequestOption } from "./model/RequestOption";
import { ILogger } from "./ILogger";
/**
 * 封装微信ajax请求工具
 * @author halo
 */
export declare class Request {
    config: RequestConfig;
    logger: ILogger;
    /**
     * Creates an instance of Request.
     * 实例化配置
     * @param {*} [config]
     * @memberof Request
     */
    constructor(config?: RequestConfig, logger?: ILogger);
    /**
     * merge config
     * @param config
     */
    setConfig(config?: RequestConfig): void;
    /**
     * 请求参数序列化
     *
     * @param {RequestOptions} options
     * @memberof Request
     *
     * @description 只支持普通get请求,和content-type = json 的 其他请求(post,put,delete,patch)
     */
    private handleRequestOptions;
    /**
     * 验证响应结果,执行回调
     *
     * @param {*} resolve
     * @param {*} reject
     * @param {*} response
     * @memberof Request
     */
    private handleResponse;
    /**
     * 执行请求
     *
     * @param {RequestOptions} [options={
     *       url: this.config.baseUrl
     *     }]
     * @returns {Promise<any>}
     * @memberof Request
     */
    executeRequest(options: RequestOption): Promise<ResponseOptions>;
    /**
     * 检查中断
     *
     * @memberof Request
     */
    checkAbout(options: RequestOption, reject: Function): boolean;
    /**
     * GET 请求
     * @description 封装调用
     * @param url 请求地址
     * @param data 请求参数
     * @param options 请求配置
     */
    get(url: string, data?: any, options?: RequestOption): Promise<ResponseOptions>;
    /**
     * POST 请求
     * @description 封装调用
     * @param url 请求地址
     * @param data 请求参数
     * @param options 请求配置
     */
    post(url: string, data?: any, options?: RequestOption): Promise<ResponseOptions>;
    /**
     * PUT 请求
     * @description 封装调用
     * @param url 请求地址
     * @param data 请求参数
     * @param options 请求配置
     */
    put(url: string, data?: any, options?: RequestOption): Promise<ResponseOptions>;
    /**
     * DELETE 请求
     * @description 封装调用
     * @param url 请求地址
     * @param data 请求参数
     * @param options 请求配置
     */
    delete(url: string, data?: any, options?: RequestOption): Promise<ResponseOptions>;
    /**
     * 多请求同步执行
     * @param taskQueue
     */
    all(taskQueue: Array<Promise<ResponseOptions>>): Promise<ResponseOptions[]>;
    /**
     * 用于兼容 @aspnet/signalR 的 获取 cookie 方法
     *
     * @description 这里用内存对象来维护一个 在线 cookies
     * @param {string} url
     * @returns
     * @memberof Request
     */
    getCookieString(url: string): string;
    cookie(url: string, key: string): any;
}
