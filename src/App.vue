<script>
import { store } from './store.js'

import PageHeader from './components/PageHeader.vue'
import PageHero from './components/PageHero.vue'
import Statistics from './components/Statistics.vue'
import AboutMe from './components/AboutMe.vue'
import LatestCourses from './components/LatestCourses.vue'
import PageFooter from './components/PageFooter.vue'
import BookStore from './components/BookStore.vue'

export default {
  components: {
    PageHeader,
    PageHero,
    Statistics,
    AboutMe,
    LatestCourses,
    BookStore,
    PageFooter,
  }, data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="wavify-bg">
    <PageHeader :header="this.store.header" :icons="this.store.icons" />

    <PageHero />
  </div>

  <Statistics />

  <AboutMe />

  <LatestCourses />

  <BookStore />

  <PageFooter :footer="this.store.footer" :icons="this.store.icons" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss">
@import 'styles/partials/variables';

* {
  font-family: $sans-serif;
}

.wavify-bg {
  background-image: url('/background-pattern-wavify.png');
}
</style>