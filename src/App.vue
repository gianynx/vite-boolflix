<template>
  <HeaderComponent @on-search="getMovies()" />
  <main>
    <ul>
      <li v-for="movie in store.movies">
        {{ movie.title }}
        {{ movie.original_title }}
        {{ movie.original_language }}
        {{ movie.vote_average }}
      </li>
    </ul>
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
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
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped></style>