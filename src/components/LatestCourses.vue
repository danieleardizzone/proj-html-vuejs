<script></script>

<template>
    <div class="latest-courses">
        <div class="container">
            <div class="section-title">
                <p class="sec-title">BEGIN YOUR JOURNEY AT MAXCOACH</p>
                <h2>Latest <span>Online Courses</span></h2>
            </div>
            <div class="courses-cards d-flex">
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="courses-cards d-flex">
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-01-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to be Successful: Create A Growth Mindset For Success</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>3 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/partials/variables';

.section-title {
    text-align: center;
    margin-bottom: 40px;

    h2 span {
        color: $green;
    }
}

.card-courses {
    gap: 30px;
}



.card>* {
    margin-bottom: 20px;

    img {
        padding-top: 30px;
    }

    &:not(img) {
        padding: 0 28px;
    }
}

.price {
    color: $green;
    font-weight: bold;
    font-size: 24px;
}

.card-footer {
    margin-bottom: 40px;

    gap: 30px;

    .lessons,
    .students {
        gap: 8px;
    }
}

.card:hover {
    background-color: $ice-white;
    border-radius: 8px;
}
</style>