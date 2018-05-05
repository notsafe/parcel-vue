<template>
  <section class="home">
    <HelloWorld :message="message"></HelloWorld>
  </section>
</template>

<script>
import HelloWorld from '../../components/HelloWorld/HelloWorld'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld: HelloWorld
  },
  computed: mapGetters([
    'message'
  ]),
  mounted () {
    this.$store.dispatch('getMessage')
  }
}
</script>