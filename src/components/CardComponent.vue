<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card p-3">
            <ul class="list-unstyled text-white">
                <li>{{ title }}</li>
                <li>{{ original_title }}</li>
                <li><img :src="'/flag_icons/' + original_language + '.png'" :alt="original_language"></li>
                <li>{{ vote_average }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [
        'title', 'original_title', 'original_language', 'vote_average'
    ],
    data() {
        return {
            availableFlags: [
                'en', 'es', 'it', 'ja', 'us', 'kn'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 20px;
    height: 20px;
}

.card {
    height: 12rem;
}
</style>