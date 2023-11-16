<script></script>

<template>
    <div class="container">
        <div class="hero d-flex">
            <div class="text col-6 d-flex dir-column justify-content-center">
                <h6>I'M WINGMAN</h6>
                <h1>Peace on Earth A Wonderful Wish But No Way</h1>
                <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.
                </p>
                <a class="btn" href="#">Get Started For Free &rarr;</a>
            </div>
            <div class="image col-6">

                <img src="/home-movation-hero-image.png" alt="">

                <img class="image__bg" src="/home-movation-shape-face.png" alt="">

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.hero {
    padding-top: 50px;
}

.text {
    gap: 25px;
}

.image {
    position: relative;

    .image__bg {
        position: absolute;
        bottom: 0;
        right: -40px;

        z-index: -10;
    }
}
</style>