<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <ul>
                <li>
                    {{ title }}
                    {{ original_title }}
                    <img :src="'/flag_icons/' + original_language + '.png'" alt="">
                    {{ vote_average }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [
        'title', 'original_title', 'original_language', 'vote_average'
    ]
}
</script>

<style lang="scss" scoped></style>