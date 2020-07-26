<template>
  <message-item :position="position">
    <el-image
      style="height: 100px"
      :src="imgUrl"
      fit="contain"
    />
  </message-item>
</template>

<script>
import messageItemMixin from './mixin/messageItemMixin'
export default {
  name: 'MessageImg',
  type: 'img',
  needsRegister: true,
  mixins: [messageItemMixin],
  data() {
    return {
      imgUrl: null
    }
  },
  watch: {
    content: {
      handler(val) {
        if (!val) return
        this.getImg()
      },
      immediate: true
    }
  },
  methods: {
    getImg() {
      try {
        this.imgUrl = require('@/assets/images/' + this.content)
      } catch (error) {
        console.warn('图片已过期')
      }
    }
  }
}
</script>

<style lang="scss">
.message-item {
	.el-image__error, 
  .el-image__inner, 
  .el-image__placeholder {
    width: auto;
  }
}
</style>

