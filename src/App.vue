<template>
  <div id="app">

    <router-view />
    <footer-guide v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import { reqFoodCategorys } from './api'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  methods: {
    async food () {
      const result = await reqFoodCategorys();
      console.log(result)
    }
  },
  mounted () {
    this.food();
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 100%
  position relative
</style>

