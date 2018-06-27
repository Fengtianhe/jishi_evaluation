<template>
    <div class="product">
        <div class="detail">
            <H2>高中生专业选择测评完整版</H2>
            <p>通过对高中生个人的交流，帮助高中生深入剖析自己的优势、兴趣、动机及未来职业发展；通过对父母的交流，解析父母对孩子的期望，侧面印证孩子的性格、优势、劣势等特点；最终根据全面信息综合评价，出具个性化的专业选择方案。</p>
            <H2>增值服务：</H2>
            <p>1.专家老师与高中生本人交流30分钟</p>
            <p>2.专家老师与其父母交流30分钟</p>
            <p>3.三天之内出具方案报告包含：高中生性格深入解析+优劣势深入解析+职业动机深入解析+适合专业推荐+适合专业所开设院校推荐+专业介绍+专业从业方向+专业课程设置+院校介绍及背景实力+院系设置+录取规则+未来就业趋势...</p>
            <div>
                <span>活动价：¥ 6800元</span>
                <span>原价：¥ 9800元</span>
                <button @click="xcx_qr_dialog=true">立即咨询</button>
            </div>
        </div>
        <div class="detail-img">
            <img src="@/assets/product/c1.png"/>
            <img src="@/assets/product/c2.png" style="margin-bottom:20px; "/>
        </div>
        <el-dialog :visible.sync="xcx_qr_dialog">
            <img src="@/assets/img/xcx.png" alt="">
        </el-dialog>
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
    .product {
        width: 100%;
        .detail {
            width: 1200px;
            background: #fff;
            margin: 0 auto;
            padding: 20px;
            text-align: left;
            margin-top: 20px;
            p{
                font-size:20px;
                line-height: 50px;
            }
            span{
                color:red;
                font-weight: bold;
                font-size:35px;
            }
            span:nth-child(2){
                font-size: 25px;
                padding-left: 30px;
                text-decoration:line-through
            }
            button{
                border-style: none;
                padding: 5px 15px;
                font-weight: bold;
                color: #fff;
                font-size: 25px;
                background: rgb(247,101,17);
                border-radius: 5px;
                display: block;
                float: right;

            }
        }
        .detail-img{
            width: 1200px;
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
    }
</style>
