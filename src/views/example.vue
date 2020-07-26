<template>
  <div class="message-example">
    <header>RingCentral</header>
    <div class="message-example__content">
      <message-list :onload="load" :login-user="userId" :size="size" />
    </div>
  </div>

</template>

<script>
import { getMessages } from '@/api/message'
import MessageList from './message-list'

export default {
  name: 'Example',
  components: {
    MessageList
  },
  data() {
    return {
      currentPage: 1,
      size: 15,
      userId: '666666' // 当前用户ID
    }
  },
  methods: {
    /**
     * 数据加载，使用Mock模拟数据请求
     */
    load(resolve) {
      getMessages(this.currentPage, this.size).then(({ data }) => {
        if (data.length) {
          this.currentPage += 1
        }
        resolve(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.message-example {
  height: 100%;
  header {
    height: 50px;
    text-align: center;
    color: #333333;
    font-size: 16px;
    font-weight: bolder;
    line-height: 50px;
  }
  &__content {
    height: calc(100vh - 50px);
  }
}
</style>
