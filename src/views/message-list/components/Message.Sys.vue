<template>
  <message-item position="center">
    <div class="message-sys">{{ content }}</div>
  </message-item>
</template>

<script>
import messageItemMixin from './mixin/messageItemMixin'
export default {
  name: 'MessageSys',
  type: 'sys',
  needsRegister: true,
  mixins: [messageItemMixin]
}
</script>

<style lang="scss" scoped>
.message-sys {
  color: #8d8d8d;
}
</style>

