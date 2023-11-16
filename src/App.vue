<script>
import { store } from './store.js'

import PageHeader from './components/PageHeader.vue'
import PageHero from './components/PageHero.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageHero,
    PageFooter,
  }, data() {
    return {
      store
    }
  }
}
</script>

<template>
  <PageHeader :header="this.store.header" :icons="this.store.icons" />

  <PageHero />

  <PageFooter :footer="this.store.footer" :icons="this.store.icons" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped>
* {
  font-family: 'Comfortaa', sans-serif;
}
</style>