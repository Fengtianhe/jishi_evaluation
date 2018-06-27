<template>
    <div class="product">
        <div class="detail">
            <H2>服务介绍：</H2>
            <p>线上高中生专业选择测评深入剖析个人潜能，线下专家老师一对一咨询探寻兴趣、能力、价值观倾向等多维度；线上+线下综合评价，全方位解析出个性化方案。</p>
            <H2>服务内容：</H2>
            <p>高中生专业选择测评报告+高中生报考一对一专家咨询全套完整报告+专业介绍+专业从业方向+专业课程设置+院校介绍及背景实力+院系设置+录取规则+未来就业趋势...</p>
            <H2>增值服务：</H2>
            <p>专业选择测评后，额外赠送2740所大学各个专业两年内的投档线、录取分数、院校背景实力、有事学科、教学方向、能力掌握、就业出口、猪肝课程、专业辨识......等数据查询。</p>
            <div>
                <span>活动价：¥ 6985元</span>
                <span>原价：¥ 11780元</span>
                <button @click="xcx_qr_dialog=true">立即咨询</button>
            </div>
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
