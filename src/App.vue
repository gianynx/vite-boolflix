<template>
  <HeaderComponent @on-search="getData()" />
  <main class="pt-5">
    <section class="container pb-5">
      <h2 class="fw-bold text-center pb-4 text-white">Movies</h2>
      <div class="row gy-4">
        <CardComponent v-for="(card, index) in store.movies" :key="card.id" :title="card.title"
          :original_language="card.original_language" :vote_average="card.vote_average" :image="card.poster_path"
          :overview="card.overview" />
        <div class="alert alert-danger" v-if="store.loaders.movies">
          Loading...
        </div>
      </div>
    </section>
    <section class="container pb-5">
      <h2 class="fw-bold text-center pb-4 text-white">TV Series</h2>
      <div class="row gy-4">
        <CardComponent v-for="(card, index) in store.tvShow" :key="card.id" :title="card.name"
          :original_language="card.original_language" :vote_average="card.vote_average" :image="card.poster_path"
          :overview="card.overview" />
        <div class="alert alert-danger" v-if="store.loaders.tvShow">
          Loading...
        </div>
      </div>
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
      const url = this.store.baseURL + this.store.endpoint.movie;
      const queryString = {
        params: this.store.params
      }
      axios.get(url, queryString).then((res) => {
        // console.log(res.data.results);
        this.store.movies = res.data.results;
      }).finally(() => {
        this.store.loaders.movies = false
      });
    },
    getTvShow() {
      const url = this.store.baseURL + this.store.endpoint.tvShow;
      const queryString = {
        params: this.store.params
      }
      axios.get(url, queryString).then((res) => {
        // console.log(res.data.results);
        this.store.tvShow = res.data.results;
      }).finally(() => {
        this.store.loaders.tvShow = false
      });
    },
    getData() {
      this.store.loaders.movies = true;
      this.store.loaders.tvShow = true;
      this.getMovies();
      this.getTvShow();
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'EB Garamond', serif;
}
</style>