
const messages = [
  { id: '1', type: 'sys', userId: '', content: '你已经添加了RingCentral,可以开始聊天了' },
  { id: '2', type: 'text', userId: '666666', content: 'Hi' },
  { id: '3', type: 'text', userId: '666666', content: '我叫卢小丹' },
  { id: '4', type: 'text', userId: '666666', content: '这是我的笔试题'},
  { id: '5', type: 'text', userId: '888888', content: 'OK'},
  { id: '7', type: 'sys', userId: '', content: 'lxd撤回了一条消息'},
  { id: '8', type: 'text', userId: '888888', content: '?' },
  { id: '9', type: 'text', userId: '666666', content: '先看看文本信息'},
  { id: '10', type: 'text', userId: '666666', content: '右边绿色的是我的消息'},
  { id: '11', type: 'text', userId: '666666', content: '左边白色的是你的消息'},
  { id: '12', type: 'img', userId: '666666', content: '58208d1070c510f14e21ca0e1514911.jpg'},
  { id: '13', type: 'text', userId: '666666', content: '给你看张图片'},
  { id: '14', type: 'text', userId: '888888', content: '哈哈哈哈哈哈哈哈哈哈哈哈哈'},
  { id: '15', type: 'text', userId: '888888', content: '好看'},
  { id: '16', type: 'sys', userId: '', content: 'RingCentral拍了拍你'},
  { id: '17', type: 'text', userId: '666666', content: '目前支持文本、图片以及系统消息类型'},
  { id: '18', type: 'text', userId: '666666', content: '需要添加新的类型'},
  { id: '19', type: 'text', userId: '666666', content: '只需要在src/views/message-list/components文件夹下添加一个新类型组件即可'},
  { id: '20', type: 'text', userId: '666666', content: '注意按照message.[typeName].vue命名'},
  { id: '21', type: 'text', userId: '666666', content: '例如message.video.vue'},
  { id: '22', type: 'text', userId: '666666', content: '在组件的option中加上上type和needsRegister属性'},
  { id: '23', type: 'text', userId: '666666', content: '消息列表采用的是向上无限滚动的模式'},
  { id: '24', type: 'text', userId: '666666', content: '向上无限滚动的功能是使用三方组件InfiniteLoading'},

  { id: '101', type: 'sys', userId: '', content: '你已经添加了RingCentral,可以开始聊天了' },
  { id: '201', type: 'text', userId: '666666', content: 'Hi' },
  { id: '301', type: 'text', userId: '666666', content: '我叫卢小丹' },
  { id: '401', type: 'text', userId: '666666', content: '这是我的笔试题'},
  { id: '501', type: 'text', userId: '888888', content: 'OK'},
  { id: '701', type: 'sys', userId: '', content: 'lxd撤回了一条消息'},
  { id: '801', type: 'text', userId: '888888', content: '?' },
  { id: '901', type: 'text', userId: '666666', content: '先看看文本信息'},
  { id: '1001', type: 'text', userId: '666666', content: '右边绿色的是我的消息'},
  { id: '1101', type: 'text', userId: '666666', content: '左边白色的是你的消息'},
  { id: '1201', type: 'img', userId: '666666', content: '58208d1070c510f14e21ca0e1514911.jpg'},
  { id: '1301', type: 'text', userId: '666666', content: '给你看张图片'},
  { id: '1401', type: 'text', userId: '888888', content: '哈哈哈哈哈哈哈哈哈哈哈哈哈'},
  { id: '1501', type: 'text', userId: '888888', content: '好看'},
  { id: '1601', type: 'sys', userId: '', content: 'RingCentral拍了拍你'},
  { id: '1701', type: 'text', userId: '666666', content: '目前支持文本、图片以及系统消息类型'},
  { id: '1801', type: 'text', userId: '666666', content: '需要添加新的类型'},
  { id: '1901', type: 'text', userId: '666666', content: '只需要在src/views/message-list/components文件夹下添加一个新类型组件即可'},
  { id: '2001', type: 'text', userId: '666666', content: '注意按照message.[typeName].vue命名'},
  { id: '2101', type: 'text', userId: '666666', content: '例如message.video.vue'},
  { id: '2201', type: 'text', userId: '666666', content: '在组件的option中加上上type和needsRegister属性'},
  { id: '2301', type: 'text', userId: '666666', content: '消息列表采用的是向上无限滚动的模式'}
]

module.exports = [
  // get Messages list
  {
    url: '/vue-admin-template/message/list',
    type: 'get',
    response: config => {
      const { page, size } = config.query
      const length = messages.length
      const start = length - page * size
      const sliceStart = start < 0 ? 0 : start
      const sliceEnd = start + ( size - 0 )
      const loadedMessages = messages.slice(sliceStart, sliceEnd)
      return {
        code: 20000,
        data: loadedMessages
      }
    }
  }
]
