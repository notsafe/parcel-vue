<template>
  <div class="hello-world">
    <span class="hello-world__message">{{formatMessage(message)}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['message'],
  data: function () {
    return {
      image: teste
    }
  },
  methods: {
    formatMessage: message => message.toString().toUpperCase()
  }
}
</script>

<style lang="sass">
  @import "./src/scss/components/hello-world.scss";
</style>
