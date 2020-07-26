## demo
浏览器访问 http://localhost:9528/example
demo代码放置在src/views/example中
使用Mock模拟数据请求


## MessageList组件说明
MessageList组件是一个类似于微信信息流渲染组件，采用向上滚动无限加载，引入vue-infinite-loading组件完成无限滚动加载效果,MessageList根据每一条信息数据中的type属性值动态渲染不同的信息类型，主要代码放在src/views/message-list中

src/views/message-list/components中放置了每一种信息类型组件，并使用require.context进行统一地全局注册；
这样要求每一个信息类型按照Message.[信息类型].vue进行命名，组件的option需包含两个属性：type（说明该组件对应的信息类型，与消息数据中的type属性值一一对应）,needsRegister(是否需要全局注册)，当需要新增一个新的类型组件时只需要在components文件夹下新建该类型的组件就可以

## 数据格式说明
MessageList组件在渲染时需要接收到的信息数据格式为
messages = [
  { 
    id: 信息ID, 
    type: 信息类型（该属性值与components中信息类型组件中定义的type值一一对应）, 
    userId: 信息所属用户ID, 
    content: 信息内容 
  },
  ...
]
## Build Setup```bash

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)
