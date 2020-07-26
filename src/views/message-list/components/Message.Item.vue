<template>
  <div :class="`message-item message-item--${position}`">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'MessageItem',
  type: 'item',
  needsRegister: true,
  props: {
    position: String
  }
}
</script>

<style lang="scss" scoped>
.message-item {
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  &--left {
    padding-right: 40px;
  }
  &--right {
    padding-left: 40px;
    justify-content: flex-end;
  }
  &--center {
    justify-content: center;
  }
}
</style>

