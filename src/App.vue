<template>
  <HeaderComponent />
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

    }
  },
  methods: {
    getMovies() {
      const url = store.baseURL + store.endpoint.movie;
      const options = {
        queryString: store.queryString
      }
      axios.get(url, options).then((res) => {
        console.log(res.data);
      });
    }
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<style lang="scss" scoped></style>