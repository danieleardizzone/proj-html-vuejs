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
    <footer>
        <div class="container d-flex">
            <div class="address col-6">
                <h5>Address</h5>
                <ul>
                    <li>
                        {{ footer.contacts.address }}
                    </li>
                    <li>
                        {{ footer.contacts.phoneNumber }}
                    </li>
                    <li>
                        {{ footer.contacts.emailAddress }}
                    </li>
                    <li>
                        <SocialIcons :icons="icons" />
                    </li>
                </ul>
            </div>
            <div class="col-6 d-flex">
                <div class="site-map">
                    <h5>Explore</h5>
                    <div class="list-wrapper d-flex">
                        <ul>
                            <li v-for="section in footer.map.column1">
                                <a href="#">
                                    {{ section }}
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li v-for="section in footer.map.column2">
                                <a href="#">
                                    {{ section }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="information">
                    <h5>Information</h5>
                    <ul>
                        <li v-for="item in footer.information">
                            <a href="#">
                                {{ item }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="copyright">&copy; All Rights <span>not</span> Reserved</p>
    </footer>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

footer {
    color: $footer-txt;
    background-color: $footer-bg;
    line-height: 36px;
}

.container {
    padding: 70px 0;
}

h5 {
    color: $white;
    font-size: 18px;
}

ul {
    font-size: 15px;
}

.address+div {
    gap: 75px;

    .site-map .list-wrapper {
        gap: 68px;
    }
}

.copyright {
    text-align: center;
    padding: 55px 0;
    font-size: 15px;

    span {
        font-weight: bold;
        color: red;
    }
}
</style>