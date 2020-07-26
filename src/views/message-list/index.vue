<template>
  <div ref="messageContain" class="message-container">
    <infinite-loading ref="infiniteLoading" direction="top" @infinite="infiniteHandler" forceUseInfiniteWrapper=".message-container"/>
    <component
      :is="messageComponets[item.type]"
      v-for="item in messages"
      :key="item.id"
      :content="item.content"
      :position="getPosition(item.userId)"
    />
  </div>
</template>

<script>
import messageComponets from './components'
import InfiniteLoading from 'vue-infinite-loading'
const STATUS_COMPLATE = 2
export default {
  name: 'MessageList',
  components: { InfiniteLoading },
  props: {
    onload: Function, // 数据加载函数
    size: Number, // 每次加载数据条数
    loginUser: String // 当前登录用户
  },
  data() {
    return {
      messageComponets,
      currentPage: 1,
      messages: [],
      firstReady: false,
      timer: null
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    /**
     * 消息列表向上无限滚动回调函数
     */
    infiniteHandler($state) {
      if (!this.onload || typeof this.onload !== 'function') return
      this.onload((data) => {
        this.loadedCallback(data, $state)
      })
    },
    loadedCallback(data, $state) {
      if (data.length >= 0) {
        this.messages.unshift(...data)
        this.scrollToBottom()
        if (data.length < this.size) {
          $state.complete()
        } else {
          $state.loaded()
        }
      } else {
        $state.complete()
      }
    },
    getPosition(userId) {
      return userId === this.loginUser ? 'right' : 'left'
    },
    /**
     * 使用infinite-loading组件时，当消息数过少，首次加载完成可能出现滚动条定位错误
     * 这里在首次加载完成之后将滚动条定位到列表底部
     */
    scrollToBottom() {
      if (!this.firstReady) {
        this.$nextTick(() => {
          const infiniteLoading = this.$refs.infiniteLoading
          const status = this.$refs.infiniteLoading.status
          if (infiniteLoading.getCurrentDistance() > infiniteLoading.distance || status === STATUS_COMPLATE) {
            const messageContain = this.$refs.messageContain
            messageContain.scrollTo(0, messageContain.scrollHeight)
            this.firstReady = true
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
	&-container {
		height: 100%;
		overflow: auto;
		background: #f1f1f1;
		font-size: 12px;
	}
	&-text {
		font-size: 30px;
		line-height: 46px;
	}
}
</style>
