<template>
    <div class="course">
        <div class="detail">
            <h2>直播回放</h2>
            <ul class="course-live">
                <li>
                    <a href="https://v.qq.com/x/page/b0686l9lcsc.html" target="_blank">
                        <img src="@/assets/product/course/WechatIMG15.jpeg" width="100%"/>
                    </a>
                    <p>高考志愿填报解析，让你选择适合的专业</p>
                    <p>
                        <span>免费</span>
                        <span>2.1万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.v.qq.com/x/page/r/6/y/r069065wh6y.html?from=singlemessage" target="_blank">
                        <img src="@/assets/product/course/WechatIMG16.jpeg" width="100%"/>
                    </a>
                    <p>高考分数不理想，选对专业照样博出精彩人生</p>
                    <p>
                        <span>免费</span>
                        <span>1.1万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.qlchat.com/topic/details?topicId=2000001481391962&shareKey=782b98442c9e363efa6533a3f1adaf84" target="_blank">
                        <img src="@/assets/product/course/WechatIMG17.jpeg" width="100%"/>
                    </a>
                    <p>以志愿胜出，避开传统志愿填报习惯及误区</p>
                    <p>
                        <span>免费</span>
                        <span>2.8万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.qlchat.com/topic/details?topicId=2000001487603169&shareKey=e54c1d591ce49a27e4adae6fecd55832" target="_blank">
                        <img src="@/assets/product/course/WechatIMG18.jpeg" width="100%"/>
                    </a>
                    <p>高考分数不理想，选对专业照样博出精彩人生</p>
                    <p>
                        <span>免费</span>
                        <span>1.9万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.qlchat.com/topic/details?topicId=2000001494774730&shareKey=da924ae8def4c3ac19459554c5fd3f40" target="_blank">
                        <img src="@/assets/product/course/WechatIMG19.jpeg" width="100%"/>
                    </a>
                    <p>高考生定位，如何选择适合的专业</p>
                    <p>
                        <span>免费</span>
                        <span>2.8万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.qlchat.com/topic/details?topicId=2000001509894686&shareKey=922f00bea882e1bee082cb4bd84a15a9" target="_blank">
                        <img src="@/assets/product/course/WechatIMG20.jpeg" width="100%"/>
                    </a>
                    <p>真实案例解析，教你如何选择专业</p>
                    <p>
                        <span>免费</span>
                        <span>3.1万次观看</span>
                    </p>
                </li>
                <li>
                    <a href="https://m.qlchat.com/topic/details?topicId=2000001527459041&shareKey=144ad057112c8fd27b5860504abdd7d3" target="_blank">
                        <img src="@/assets/product/course/WechatIMG32.jpeg" width="100%"/>
                    </a>
                    <p>高考生定位，如何选择最适合的专业</p>
                    <p>
                        <span>免费</span>
                        <span>1万次观看</span>
                    </p>
                </li>
            </ul>
        </div>
        <!--<div class="detail">-->
            <!--<h2>专题回放</h2>-->
            <!--<ul class="course-live">-->
                <!--<li>-->
                    <!--<a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>-->
                    <!--<p>-->
                        <!--<span>免费</span>-->
                        <!--<span>3800次观看</span>-->
                    <!--</p>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="" target="_blank"><img src="@/assets/product/course/WechatIMG16.jpeg" width="100%"/></a>-->
                    <!--<p>-->
                        <!--<span>免费</span>-->
                        <!--<span>3800次观看</span>-->
                    <!--</p>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>-->
                    <!--<p>-->
                        <!--<span>免费</span>-->
                        <!--<span>3800次观看</span>-->
                    <!--</p>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<a href="" target="_blank"><img src="@/assets/product/coursew.png" width="100%"/></a>-->
                    <!--<p>-->
                        <!--<span>免费</span>-->
                        <!--<span>3800次观看</span>-->
                    <!--</p>-->
                <!--</li>-->

            <!--</ul>-->
        <!--</div>-->
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
