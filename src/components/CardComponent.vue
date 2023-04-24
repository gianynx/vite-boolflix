<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="flip_card">
            <div class="flip_card_inner">
                <div class="img_container">
                    <img class="img-fluid" :src="(image) ? store.imgPath + store.imgSize + image : '/fake.png/'"
                        :alt="title">
                </div>
                <div class="info_container pt-3 text-center text-white">
                    <h1 class="fs-3">{{ title }}</h1>
                    <div class="pt-1">
                        <img class="flag_img" :src="'/flag_icons/' + original_language + '.png'" :alt="original_language">
                    </div>
                    <div class="pt-1">
                        Vote average: {{ stars }}
                    </div>
                    <div class="pt-1">
                        <i class="fa-star" v-for="(star, index) in 5" :key="index"
                            :class="star <= stars ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                    <div class="pt-3 overflow-auto" v-if="overview">
                        <h2 class="fs-4">Overview:</h2>
                        <p class="overview_section p-2">{{ overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'CardComponent',
    props: [
        'title', 'original_title', 'original_language', 'vote_average', 'image', 'overview'
    ],
    data() {
        return {
            store,
            availableFlags: [
                'en', 'es', 'it', 'ja', 'us', 'kn', 'ko', 'tr', 'ru', 'id', 'de', 'zh', 'ar', 'hi'
            ]
        }
    },
    computed: {
        stars() {
            return Math.round(this.vote_average / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
.flip_card {
    height: 30rem;
    cursor: pointer;
    background-color: transparent;
    perspective: 1000px;

    &:hover {
        .img_container {
            display: none;
        }

        .info_container {
            display: block;
        }
    }
}

.flip_card_inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip_card:hover .flip_card_inner {
    transform: rotateY(180deg);
}

.img_container,
.info_container {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.info_container {
    transform: rotateY(180deg);

    .flag_img {
        width: 20px;
        height: 20px;
    }
}

img {
    height: 30rem;
}

.overview_section {
    height: 15rem;
}

@media screen and (max-width: 575px) {
    .card {
        width: 320px;
        margin: 0 auto;
    }

    #img_container img {
        width: 300px;
    }
}
</style>