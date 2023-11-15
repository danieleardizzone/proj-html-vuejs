<script>
export default {
    props: {
        icons: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <ul class="icons d-flex">
        <li v-for="icon in icons" :key="icon">
            <a href="#">
                <font-awesome-icon :icon="['fab', icon]" />
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.icons {
    gap: 20px;

    font-size: 18px;
}
</style>