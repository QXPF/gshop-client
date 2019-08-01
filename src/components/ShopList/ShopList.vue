<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px"
          v-for='item in shoplist'
          :key='item.id'>
        <a>
          <div class="shop_left">
            <img class="shop_img"
                 :src="item.imgUrl">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{item.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <!-- <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div> -->
                <div class="fl">
                  <Stars :size='36'
                         :score='item.score'></Stars>
                </div>

                <div class="rating_section">
                  {{item.score}}
                </div>
                <div class="order_section">
                  月售{{item.salesNum}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">
                  {{item.courier}}
                </span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{item.minimum}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{item.delivery}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Stars from '../Stars/Stars'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Stars
  },
  data () {
    //这里存放数据
    return {
      shoplist: [
        {
          id: '0001',
          imgUrl: require('./images/1.jpg'),
          name: '锄禾日当午，汗滴禾下土', //店名
          score: "3.6",//评分
          salesNum: '104',//月销量  
          minimum: '20',//起送价
          delivery: '5',//配送费
          courier: '硅谷专送',// 快递
        },
        {
          id: '0002',
          imgUrl: require('./images/2.jpg'),
          name: '锄禾日当午，汗滴禾下土', //店名
          score: "4.1",//评分
          salesNum: '104',//月销量  
          minimum: '20',//起送价
          delivery: '5',//配送费
          courier: '硅谷专送',// 快递
        },
        {
          id: '0003',
          imgUrl: require('./images/3.jpg'),
          name: '锄禾日当午，汗滴禾下土', //店名
          score: "4.8",//评分
          salesNum: '104',//月销量  
          minimum: '20',//起送价
          delivery: '5',//配送费
          courier: '硅谷专送',// 快递
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="stylus" scope="">
@import '../../common/stylus/mixins.styl'
.shop_container
  margin-bottom 60px
  .shop_list
    .shop_li
      bottom-border-1px(#f1f1f1)
      width 100%
      >a
        clearFix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%
        .shop_left
          float left
          box-sizing border-box
          width 23%
          height 75px
          padding-right 10px
          .shop_img
            display block
            width 100%
            height 100%
        .shop_right
          float right
          width 77%
          .shop_detail_header
            clearFix()
            width 100%
            .shop_title
              float left
              width 200px
              color #333
              font-size 16px
              line-height 16px
              font-weight 700
              &::before
                content '品牌'
                display inline-block
                font-size 11px
                line-height 11px
                color #333
                background-color #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop_detail_ul
              float right
              margin-top 3px
              .supports
                float left
                font-size 10px
                color #999
                border 1px solid #f1f1f1
                padding 0 2px
                border-radius 2px
          .shop_rating_order
            clearFix()
            width 100%
            margin-top 18px
            margin-bottom 8px
            .shop_rating_order_left
              float left
              color #ff9a0d
              line-height 15px
              .rating_section
                float left
                font-size 10px
                color #ff6000
                margin-left 4px
              .order_section
                float left
                font-size 10px
                color #666
                transform scale(0.8)
            .shop_rating_order_right
              float right
              font-size 0
              .delivery_style
                transform-origin 35px 0
                transform scale(0.7)
                display inline-block
                font-size 12px
                padding 1px
                border-radius 2px
              .delivery_left
                color #fff
                margin-right -10px
                background-color #02a774
                border 1px solid #02a774
              .delivery_right
                color #02a774
                border 1px solid #02a774
          .shop_distance
            clearFix()
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              transform-origin 0
              transform scale(0.9)
              color #666
            .segmentation
              color #ccc
</style>