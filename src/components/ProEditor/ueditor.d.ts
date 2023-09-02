namespace globalThis {
  const UE: {
    getEditor: (el: string | HTMLElement, options?: UEditorOptions) => UEditor
  }

  interface UEditorOptions {
    /**
     * UEditorPlus 的跨域根目录，绝对路径。
     */
    UEDITOR_CORS_URL?: string
    /**
     * UEditorPlus 的根目录，绝对路径。
     */
    UEDITOR_HOME_URL?: string
    /**
     * UEditorPlus 的服务端地址，绝对路径。
     * @description 该路径用于返回配置信息和响应前端的请求等。
     */
    serverUrl?: string
    /**
     * 服务器统一请求头信息，会在所有请求中带上该信息
     */
    serverHeaders?: Record<string, any>
    /**
     * UEditorPlus 的工具栏配置。
     * @description | 为分隔符，[] 表示多个分组。
     */
    toolbars?: string[][]
  }

  interface UEditor {
    /**
     * 编辑器准备就绪后会触发该事件
     */
    ready: (cb: () => void) => any
    /**
     * 销毁编辑器实例，使用textarea代替
     */
    destroy: () => void
    /**
     * 重置编辑器，可用来做多个tab使用同一个编辑器实例
     * @description 此方法会清空编辑器内容，清空回退列表，会触发reset事件
     */
    reset: () => void
    /**
     * 让编辑器获得焦点
     * @description 默认focus到编辑器头部
     * @param {boolean} toEnd 是否到内容尾部
     */
    focus: (toEnd?: boolean) => void
    /**
     * 让编辑器失去焦点
     */
    blur: () => void
    /**
     * 判断编辑器是否获得焦点
     */
    isFocus: () => boolean
    /**
     * 获取编辑器的内容
     * @description 该方法获取到的是经过编辑器内置的过滤规则进行过滤后得到的内容
     */
    getContent: () => string
    /**
     * 获取编辑器中的纯文本内容,没有段落格式
     */
    getContentTxt: () => string
    /**
     * 设置编辑器的内容，可修改编辑器当前的html内容
     * @param {string} html 要设置的内容
     * @param {string} isAppendTo 若传入true，不清空原来的内容，在最后插入内容，否则，清空内容再插入
     */
    setContent: (html: string, isAppendTo?: boolean) => void
    /**
     * 添加事件监听
     * @param {string} types 监听的事件名称，同时监听多个事件使用空格分隔
     * @param {Function} cb 监听的事件被触发时，会执行该回调函数
     */
    addListener: (types: string, cb: (type: string) => void) => void
    /**
     * 移除事件监听
     * @param {string} types 移除的事件名称，同时移除多个事件使用空格分隔
     * @param {Function} cb 要移除的事件回调函数
     */
    removeListener: (types: string, cb: (type: string) => void) => void
    /**
     * 触发事件
     * @param types 触发的事件名称，同时触发多个事件使用空格分隔
     * @param args 可选参数，可以传入一个或多个参数，会传给事件触发的回调函数
     */
    fireEvent: (types: string, ...args: any[]) => any
  }
}
