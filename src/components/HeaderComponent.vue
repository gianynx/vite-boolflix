<template>
    <div>
        <h1>BoolFlix</h1>
        <SearchComponent />
    </div>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
export default {
    name: 'HeaderComponent',
    components: {
        SearchComponent
    }
}
</script>

<style lang="scss" scoped></style>