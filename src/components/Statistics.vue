<script></script>

<template>
    <div class="statistics">
        <div class="container d-flex">
            <div class="col-3 d-flex dir-column justify-content-center align-items-center">
                <p class="stat-value">1.926</p>
                <p>FINISHED SESSIONS</p>
            </div>
            <div class="col-3 d-flex dir-column justify-content-center align-items-center">
                <p class="stat-value">100%</p>
                <p>SATISFACTION RATE</p>
            </div>
            <div class="col-3 d-flex dir-column justify-content-center align-items-center">
                <p class="stat-value">3092+</p>
                <p>ENROLLED LEARNERS</p>
            </div>
            <div class="col-3 d-flex dir-column justify-content-center align-items-center">
                <p class="stat-value">200</p>
                <p>ONLINE INSTRUCTORS</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.statistics .container {
    background-image: url('/background-pattern-grid-line-06.png');
    margin: 120px auto;
}

.stat-value {
    color: $green;
    font-size: 38px;

    font-weight: bold;
}
</style>