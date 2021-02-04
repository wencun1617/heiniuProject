yarn mock --启动json-server

yarn  install 安装项目依赖

yarn start 启动项目

##### 项目的开发规范和代码风格

   1.文件夹，文件名统一小写，多个单词以连接符（-）连接；

    2. css采用普通css和styled-components结合来编写 （全局采用普通css , 局部采用styled-components ）,少部分使用内联样式；

    3. 项目统一使用函数式组件，使用Hooks；

    4. 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；

    5. 组件内部状态使用 useState，业务数据放在redux中管理；

    6. redux代码规范：

       1. 每个模块有自己的reducer，通过combineReducer进行合并；
       2. 异步请求代码使用reducx-thunk,写在action.js中;

    7. 网络请求采用axios：

       1. 对axios进行二次封装；

       2. 模块的请求放在services文件夹下的文件中单独管理；

    8. 以1920px为设计稿, flexible.js + rem 实现自适应布局， cssrem基准值为80px
