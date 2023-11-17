<script></script>

<template>
    <div class="book-store">
        <div class="container d-flex">
            <div class="text col-4 d-flex dir-column ">
                <p class="sec-title">BOOK STORE ONLINE</p>
                <h2>Be Alpha With <br><span>Wingman's Book</span></h2>
                <ul>
                    <li class="d-flex align-items-center">
                        <font-awesome-icon class="list-icon" icon="fa-solid fa-check" size="xl" />
                        <span class="list-text">Help you understand yourself better</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <font-awesome-icon class="list-icon" icon="fa-solid fa-check" size="xl" />
                        <span class="list-text">Revealing mature tips</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <font-awesome-icon class="list-icon" icon="fa-solid fa-check" size="xl" />
                        <span class="list-text">Give the right advice</span>
                    </li>
                    <li class="d-flex align-items-center">
                        <font-awesome-icon class="list-icon" icon="fa-solid fa-check" size="xl" />
                        <span class="list-text">Fascinating examples of alpha man</span>
                    </li>
                </ul>
                <a class="btn" href="#">Get Free Ebook</a>
            </div>
            <div class="books-cards col-8 d-flex align-items-center">
                <div class="card col-6 d-flex dir-column align-items-center">
                    <img src="/product-book-11-400x400.jpg">
                    <h4>Alpha man by Maxcoach</h4>
                    <p class="price">$29.00</p>
                </div>
                <div class="card col-6 d-flex dir-column align-items-center">
                    <img src="/product-book-10-400x400.jpg">
                    <h4>Real man 4.0 by Maxcoach</h4>
                    <p class="price">$29.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.container {
    gap: 160px;
}

.text {
    gap: 30px;

    .sec-title {
        color: currentColor;
    }

    h2 span {
        color: $green;
    }

    ul li {
        line-height: 38px;
        gap: 16px;

        .list-icon {
            color: $green;
        }
    }
}

.books-cards {
    padding: 20px;
    gap: 30px;

    .card {
        gap: 15px;
    }
}
</style>