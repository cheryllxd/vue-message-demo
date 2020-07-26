<template>
  <message-item :position="position">
    <div v-if="position == 'left'" class="arrow arrow--left" />
    <span :class="[`message-text`, `message-text--${position}`]">{{ content }}</span>
    <div v-if="position == 'right'" class="arrow arrow--right" />
  </message-item>
</template>

<script>
import messageItemMixin from './mixin/messageItemMixin'
export default {
  name: 'MessageText',
  type: 'text',
  needsRegister: true,
  mixins: [messageItemMixin]
}
</script>

<style lang="scss" scoped>
.message-text {
  padding: 10px;
  border-radius: 10px;
  white-space:normal;
  word-break:break-all;
  word-wrap:break-word;
  &--left {
    background: #FFFFFF;
  }
  &--right {
    background: #00a497;
  }
}
.arrow {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  &--left {
    border-right-color: #FFFFFF;
    border-left-width: 0;
    transform: translate3d(1px, 10px, 0);
  }
  &--right {
    border-left-color: #00a497;
    border-right-width: 0;
    transform: translate3d(-1px, 10px, 0);
  }
}
</style>

