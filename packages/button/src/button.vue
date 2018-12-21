<template>
    <button
      class="el-button"
      @click="handleClick"
      :disabled="buttonDisabled"
      :type="nativeType"
      :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-loading': loading,
        'is-disabled': buttonDisabled,
      }
    ]">
      <i class="el-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: "EfButton",
      props: {
        type: {
          type: String,
          default: 'default'
        },
        size: String,
        icon: {
          type: String,
          default: ''
        },
        nativeType: {
          type: String,
          default: 'button'
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        disabled: Boolean,
        loading: Boolean
      },
      computed:{
        buttonSize() {
          return this.size;
        },
        buttonDisabled() {
          return this.disabled
        }
      },
      methods: {
        handleClick(evt) {
          this.$emit('click', evt);
        }
      }
    }
</script>
