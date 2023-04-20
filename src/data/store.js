import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    baseURL: "https://api.themoviedb.org/3/",
    endpoint: {
        movie: 'search/movie'
    },
    params: {
        api_key: '010d622661a88e8d6e50d895766f0fdd',
        query: 'a'
    }
});