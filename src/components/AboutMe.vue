<script></script>

<template>
    <div class="container">
        <p class="sec-title">ABOUT ME</p>
        <div class="alpha-male d-flex">
            <div class="col-6">
                <h2>How to Be an Alpha Male: The 15 Habits of True Alphas</h2>
            </div>
            <div class="col-6">
                <h4>Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man you've
                    always wanted to be?</h4>
                <p>Your goal is to show the consistency of business, core values, and customer care. Punctuality,
                    responsibility, individuality, accuracy, enthusiasm - you have to clearly explain how these qualities
                    are applicable to your work. And the important thing is you do love what you do</p>
            </div>
        </div>
        <div class="video d-flex">
            <div class="col-8">
                <img src="/home-movation-video-poster-670x450.jpg" alt="">
                <img class="play-button" src="/icon-youtube-play.png" alt="">
            </div>
            <div class="col-4 d-flex dir-column justify-content-around">
                <h3>"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."
                </h3>
                <div>
                    <img src="/home-movation-shape-01.png" alt="">
                    <h4>Kaixa Stark</h4>
                    <p>WINGMAN</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.sec-title {
    font-weight: bold;
    color: $green;
}

.alpha-male,
.video {
    padding: 60px 0;
}

.alpha-male {
    gap: 180px;

    h4 span {
        color: $green;
    }
}

.video .col-8 {
    position: relative;

    img {
        border-radius: 10px;
    }

    .play-button {
        position: absolute;
        top: 190px;
        left: 290px;

    }
}
</style>