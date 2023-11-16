<script>
import SocialIcons from './SocialIcons.vue'

export default {
    components: {
        SocialIcons
    },
    props: {
        header: {
            type: Object,
            required: true
        }, icons: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <header class="page-header">
        <div class="container d-flex justify-content-between align-items-center">
            <a href="#">
                <img class="logo" :src="'/' + header.logoSrc" alt="">
            </a>
            <nav class="d-flex">
                <a class="nav-item d-flex" v-for="item in header.navItems" :key="item" href="#">
                    {{ item }}
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                </a>
            </nav>
            <SocialIcons :icons="icons" />
        </div>
    </header>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.page-header .container {
    padding: 28px 0;
}

.logo {
    height: 25px;
}

nav {
    gap: 40px;

    font-size: 16px;

    .nav-item {
        gap: 6px;

        &:hover {
            color: $green;
            border-bottom: 1px solid $green;
        }
    }
}
</style>