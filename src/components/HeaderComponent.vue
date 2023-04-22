<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <div id="logo_container">
                <a href="#"><img class="w-100" src="../img/boolflix.png" alt="boolflix_logo"></a>
            </div>
            <div id="input_container" class="d-flex">
                <input class="form-control me-2" placeholder="write something" v-model="store.params.query"
                    @keyup.enter="$emit('onSearch')">
                <button class="btn btn-danger" @click="$emit('onSearch')">search</button>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 7.5rem;

    #logo_container {
        width: 13rem;
        height: 8rem;
        padding-top: 2.2rem;
    }
}

@media screen and (max-width: 575px) {
    input {
        width: 150px;
    }
}
</style>