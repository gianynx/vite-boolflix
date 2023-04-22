<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card p-3">
            <ul class="list-unstyled text-white">
                <div id="img_container">
                    <img class="img-fluid" :src="store.imgPath + store.imgSize + image" alt="">
                </div>
                <div id="info_container" class="pt-3 text-center">
                    <li class="fs-5">{{ title }}</li>
                    <li class="pt-1">
                        <img class="flag_img" :src="'/flag_icons/' + original_language + '.png'" :alt="original_language">
                    </li>
                    <li class="pt-1">Vote average: {{ vote_average }}</li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'CardComponent',
    props: [
        'title', 'original_title', 'original_language', 'vote_average', 'image'
    ],
    data() {
        return {
            store,
            availableFlags: [
                'en', 'es', 'it', 'ja', 'us', 'kn', 'ko', 'tr', 'ru', 'id', 'de', 'zh', 'ar', 'hi'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    height: 36rem;

    img {
        height: 351px;
    }

    .flag_img {
        width: 20px;
        height: 20px;
    }
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