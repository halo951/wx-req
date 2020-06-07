/**
 * 指示日志消息的严重性。
 * 日志级别按严重性递增的顺序排列。所以“Debug”比“Trace”等更严重。
 *
 */
export declare enum LogLevel {
    /** 极低严重性诊断消息的日志级别. */
    Trace = 0,
    /** 调试错误. */
    Debug = 1,
    /** 消息. */
    Information = 2,
    /** 警告. */
    Warning = 3,
    /** 错误. */
    Error = 4,
    /** 严重错误. */
    Critical = 5,
    /** 最高日志级别。在配置日志记录以指示不应发出日志消息时使用. */
    None = 6
}
/** logger 抽象类 */
export interface ILogger {
    /** Called by the framework to emit a diagnostic message.
     *
     * @param {LogLevel} logLevel The severity level of the message.
     * @param {string} message The message.
     */
    log(...msg: LogLevel | any): void;
}
