<template>
  <section class="msite">
    <!--首页头部-->
    <header-top title="昌平区北七家宏福科技园(337省道北)">
      <span class="header_search"
            slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login"
            slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </header-top>
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperList"
                      :key="index">
          <img class="swiper-img"
               :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls 分页 -->
        <div class="swiper-pagination"
             slot="pagination"></div>
        <!-- 滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
        <!-- 下一页 上一页  -->
        <!-- <div class="swiper-button-next"></div>  -->

        <!-- <div class="swiper-button-prev"></div> -->
      </swiper>
    </div>
    <!--首页导航-->
    <nav class="msite_nav">
      <swiper :options="swiperOptionNavs">
        <swiper-slide v-for="(page,index) in pages"
                      :key="index">
          <div class="nav_item"
               v-for="item in page"
               :key="item.id">
            <div class="nav_item_icon">
              <img :src="item.navIcon">
            </div>
            <h3 class="nav_item_title"><span>{{item.navTitle}}</span></h3>
          </div>
        </swiper-slide>
        <!-- Optional controls 分页 -->
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img"
                     src="./images/shop/1.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img"
                     src="./images/shop/2.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      4.1
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img"
                     src="./images/shop/3.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item off"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.2
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img"
                     src="./images/shop/4.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <div class="star star-24">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                      <span class="star-item off"></span>
                    </div>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HearderTop'
export default {
  name: 'msite',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 3000, //自动切换的时间间隔，单位ms
          stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
          stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。
          disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
          reverseDirection: false, //开启反向自动轮播。
          waitForTransition: false, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
      },
      swiperList: [
        {
          "id": "0001",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },
        {
          "id": "0002",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        },
        {
          "id": "0003",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
        },
        {
          "id": "0004",
          "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        }
      ],
      swiperOptionNavs: {
        pagination: {
          el: '.swiper-pagination'
        },
      },
      navList: [
        {
          id: '0001',
          navIcon: 'images/nav/1.jpg',
          navTitle: '甜品饮品',
        },
        {
          id: '0002',
          navIcon: 'images/nav/2.jpg',
          navTitle: '商超遍历',
        },
        {
          id: '0003',
          navIcon: 'images/nav/3.jpg',
          navTitle: '美食',
        },
        {
          id: '0004',
          navIcon: 'images/nav/4.jpg',
          navTitle: '简餐',
        },
        {
          id: '0005',
          navIcon: 'images/nav/5.jpg',
          navTitle: '新店特惠',
        },
        {
          id: '0006',
          navIcon: 'images/nav/6.jpg',
          navTitle: '准时达',
        },
        {
          id: '0007',
          navIcon: 'images/nav/7.jpg',
          navTitle: '预订早餐',
        },
        {
          id: '0008',
          navIcon: 'images/nav/8.jpg',
          navTitle: '土豪推荐',
        },
        {
          id: '0001',
          navIcon: 'images/nav/1.jpg',
          navTitle: '甜品饮品',
        },
        {
          id: '0002',
          navIcon: 'images/nav/2.jpg',
          navTitle: '商超遍历',
        },
        {
          id: '0003',
          navIcon: 'images/nav/3.jpg',
          navTitle: '美食',
        },
        {
          id: '0004',
          navIcon: 'images/nav/4.jpg',
          navTitle: '简餐',
        },
        {
          id: '0005',
          navIcon: 'images/nav/5.jpg',
          navTitle: '新店特惠',
        },
        {
          id: '0006',
          navIcon: 'images/nav/6.jpg',
          navTitle: '准时达',
        },
      ]
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.navList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item);
      })
      return pages;
    }
  },
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped>// 当前组件scoped
@import '../../common/stylus/mixins.styl'
.swiper >>> .swiper-pagination-bullet-active // 样式穿透
  background #fff !important
.msite // 首页
  width 100%
  .swiper
    width 100%
    height 0
    padding-bottom 31.25%
    margin-top 45px
    background #eee
    overflow hidden
    .swiper-img
      display block
      width 100%
  .msite_nav
    width 100%
    bottom-border-1px(#e4e4e4)
    height 0
    padding-bottom 50%
    background #eee
    touch-action none
    overflow hidden
    .nav_item
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      background #fff
      overflow hidden
      .nav_item_icon
        position absolute
        border 1px solid red
        padding 0 5px
        left 0
        right 0
        top 0
        bottom 0
        overflow hidden
        img
          display block
          margin 0 auto
          width 100%
      .nav_item_title
        position absolute
        left 0
        bottom 0
        width 100%
        font-size 12px
        text-align center
        line-height 25px
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
    .shop_container
      margin-bottom 50px
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
                  .star // 2x图 3x图
                    float left
                    font-size 0
                    .star-item
                      display inline-block
                      background-repeat no-repeat
                    &.star-48
                      .star-item
                        width 20px
                        height 20px
                        margin-right 22px
                        background-size 20px 20px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('images/stars/star48_on')
                        &.half
                          bg-image('images/stars/star48_half')
                        &.off
                          bg-image('images/stars/star48_off')
                    &.star-36
                      .star-item
                        width 15px
                        height 15px
                        margin-right 6px
                        background-size 15px 15px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('images/stars/star36_on')
                        &.half
                          bg-image('images/stars/star36_half')
                        &.off
                          bg-image('images/stars/star36_off')
                    &.star-24
                      .star-item
                        width 10px
                        height 10px
                        margin-right 3px
                        background-size 10px 10px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('images/stars/star24_on')
                        &.half
                          bg-image('images/stars/star24_half')
                        &.off
                          bg-image('images/stars/star24_off')
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
