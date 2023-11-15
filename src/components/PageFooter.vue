<script>
import SocialIcons from './SocialIcons.vue'

export default {
    components: {
        SocialIcons,
    },
    props: {
        footer: {
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
    <footer class="container">
        <div class="address">
            <p>Address</p>
            <p>{{ footer.contacts.address }}</p>
            <p>{{ footer.contacts.phoneNumber }}</p>
            <p>{{ footer.contacts.emailAddress }}</p>
            <SocialIcons :icons="icons" />
        </div>
    </footer>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

footer {
    color: $footer-txt;
    background-color: $footer-bg;
}
</style>