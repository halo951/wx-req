/**
 * Error thrown when an HTTP request fails.
 * HTTP请求失败时引发错误。
 */
export declare class HttpError extends Error {
    private __proto__;
    /** The HTTP status code represented by this error. */
    statusCode: number;
    /** Constructs a new instance of {@link @aspnet/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    constructor(errorMessage: string, statusCode: number);
}
/**
 * Error thrown when a timeout elapses.
 * 超时错误
 */
export declare class TimeoutError extends Error {
    private __proto__;
    /** Constructs a new instance of {@link @aspnet/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage?: string);
}
/**
 * Error thrown when an action is aborted.
 * 连接错误
 */
export declare class AbortError extends Error {
    private __proto__;
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage?: string);
}
