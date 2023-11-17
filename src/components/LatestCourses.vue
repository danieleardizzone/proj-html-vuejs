<script></script>

<template>
    <div class="latest-courses">
        <div class="container">
            <div class="section-title">
                <p class="sec-title">BEGIN YOUR JOURNEY AT MAXCOACH</p>
                <h2>Latest <span>Online Courses</span></h2>
            </div>
            <div class="courses-cards">
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
                    <img src="/motivation-course-02-480x298.jpg" alt="">
                    <p class="price">$30.00</p>
                    <h4>How to Build Confidence in Your Abilities</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>1 Lesson</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-03-480x298.jpg" alt="">
                    <p class="price">$20.00</p>
                    <h4>Productivity Machine - Focus in a Distracted World</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>5 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-04-480x298.jpg" alt="">
                    <p class="price">$20.00</p>
                    <h4>Effective Time Management Mastery - Complete Guide</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>18 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-05-480x298.jpg" alt="">
                    <p class="price">$25.99</p>
                    <h4>Body Language Secrets for Entrepreneurs</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>19 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="card col-4 d-flex dir-column ">
                    <img src="/motivation-course-06-480x298.jpg" alt="">
                    <p class="price">$19.99</p>
                    <h4>Management Skills: The Science of Leadership</h4>
                    <div class="card-footer d-flex ">
                        <div class="lessons d-flex">
                            <font-awesome-icon icon="fa-regular fa-file-lines" />
                            <span>17 Lessons</span>
                        </div>
                        <div class="students d-flex">
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn" href="#">View all courses &rarr;</a>
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

.courses-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;

    margin-bottom: 50px;
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

.btn {
    margin: 50px auto;
}
</style>