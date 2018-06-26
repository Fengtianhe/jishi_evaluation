<template>
    <div class="product">
        <div class="detail">
            <H1>高中生专业选择测评完整版</H1>
            <p>通过测评,对考生进行多维度的深度认知解析，包含潜能、有事、短板、兴趣、潜能与兴趣匹配点、最佳匹配专业、较佳匹配专业、应避免专业、较佳匹配专业的介绍、课程设置及未来就业方向等。</p>
            <H1>增值服务：</H1>
            <p>专业选择测评后，额外赠送2740所大学各个专业两年内的投档线、录取分数、院校背景实力、有事学科、教学方向、能力掌握、就业出口、猪肝课程、专业辨识......等数据查询。</p>
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
