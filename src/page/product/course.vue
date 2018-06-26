<template>
    <div class="course">
        <div class="detail">
            <h2>直播回放</h2>
            <ul class="course-live">
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursez.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursez.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="detail">
            <h2>专题回放</h2>
            <ul class="course-live">
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursez.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>
                <li>
                    <a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>
                    <p>
                        <span>免费</span>
                        <span>3800次观看</span>
                    </p>
                </li>

            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                xcx_qr_dialog: false
            }
        }
    }
</script>
<style scoped lang="scss">
    .course {
        width: 100%;
        .detail {
            width: 1200px;
            background: #fff;
            margin: 0 auto;
            padding: 20px 0 0 20px;
            margin-bottom: 20px;
            ul {
                li {
                    width: 275px;
                    display: block;
                    float: left;
                    font-size: 12px;
                    margin: 10px 20px 20px 0;
                    border: 1px solid #f9f2f4;
                    a{
                        display: block;
                    };
                    p {
                        text-align: left;
                        padding: 10px;
                        span:nth-child(1){
                            color: #4cae4c;
                        }
                        span:nth-child(2){
                            float: right;
                        }
                    }
                }
            }
            ul:after {
                content: "";
                height: 0;
                visibility: hidden;
                display: block;
                clear: both;

            }
        }
    }
</style>
