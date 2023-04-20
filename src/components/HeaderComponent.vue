<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <div id="logo_container">
                <a href="#"><img class="w-100" src="../img/boolflix.png" alt="boolflix_logo"></a>
            </div>
            <div id="input_container">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-danger" type="submit">Search</button>
                </form>
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
</style>