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
    <nav class="msite_nav"
         :class="{ 'active': pages.length>1}">
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
             slot="pagination"
             v-if="pages.length>1"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HearderTop'
import ShopList from '../../components/ShopList/ShopList'
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
          navIcon: require('./images/nav/1.jpg'),
          navTitle: '甜品饮品',
        },
        {
          id: '0002',
          navIcon: require('./images/nav/2.jpg'),
          navTitle: '商超遍历',
        },
        {
          id: '0003',
          navIcon: require('./images/nav/3.jpg'),
          navTitle: '美食',
        },
        {
          id: '0004',
          navIcon: require('./images/nav/4.jpg'),
          navTitle: '简餐',
        },
        {
          id: '0005',
          navIcon: require('./images/nav/5.jpg'),
          navTitle: '新店特惠',
        },
        {
          id: '0006',
          navIcon: require('./images/nav/6.jpg'),
          navTitle: '准时达',
        },
        {
          id: '0007',
          navIcon: require('./images/nav/7.jpg'),
          navTitle: '预订早餐',
        },
        {
          id: '0008',
          navIcon: require('./images/nav/8.jpg'),
          navTitle: '土豪推荐',
        },
        {
          id: '0001',
          navIcon: require('./images/nav/1.jpg'),
          navTitle: '甜品饮品',
        },
        {
          id: '0002',
          navIcon: require('./images/nav/2.jpg'),
          navTitle: '商超遍历',
        },
        {
          id: '0003',
          navIcon: require('./images/nav/3.jpg'),
          navTitle: '美食',
        },
        {
          id: '0004',
          navIcon: require('./images/nav/4.jpg'),
          navTitle: '简餐',
        },
        {
          id: '0005',
          navIcon: require('./images/nav/5.jpg'),
          navTitle: '新店特惠',
        },
        {
          id: '0006',
          navIcon: require('./images/nav/6.jpg'),
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
    HeaderTop,
    ShopList
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>// 当前组件scoped
@import '../../common/stylus/mixins.styl'
.swiper >>> .swiper-pagination-bullet-active // 样式穿透
  background #fff !important
.msite_nav >>> .swiper-container
  padding-bottom 50%
  height 0
  overflow hidden
.msite_nav.active >>> .swiper-container
  padding-bottom 55%
.msite // 首页
  width 100%
  background #eee
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
    background #fff
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
  .msite_nav.active
    padding-bottom 55%
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
</style>
