<template>
  <HeaderComponent @on-search="getMovies()" />
  <main class="pt-5">
    <section class="container pb-5">
      <h2 class="fw-bold text-center pb-4 text-white">Movies</h2>
      <div class="row gy-4">
        <CardComponent v-for="(card, index) in store.movies" :key="card.id" :title="card.title"
          :original_title="card.original_title" :original_language="card.original_language"
          :vote_average="card.vote_average" />
      </div>
    </section>
    <section class="container">
      <h2 class="fw-bold text-center pb-4 text-white">TV Series</h2>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      const url = store.baseURL + store.endpoint.movie;
      const queryString = {
        params: store.params
      }
      axios.get(url, queryString).then((res) => {
        // console.log(res.data.results);
        store.movies = res.data.results;
      });
    },
    // getTvShow() {
    //   const url = store.baseURL + store.endpoint.tvShow;
    //   const queryString = {
    //     params: store.params
    //   }
    //   axios.get(url, queryString).then((res) => {
    //     // console.log(res.data.results);
    //     store.tvShow = res.data.results;
    //   });
    // },
    // getData() {
    //   this.getMovies();
    //   this.getData();
    // }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'EB Garamond', serif;
}
</style>