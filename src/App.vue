<template>
  <HeaderComponent @on-search="getMovies()" />
  <main class="container pt-5">
    <section>
      <h2 class="fw-bold text-center">Movies</h2>
      <div class="row">
        <CardComponent />
      </div>
    </section>
    <section>
      <h2 class="fw-bold text-center">TV Series</h2>
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