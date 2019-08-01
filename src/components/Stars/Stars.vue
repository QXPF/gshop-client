
<template>
  <!-- 评分星星的组件 -->
  <div class="star"
       :class="starType">
    <!-- starType是星星的类型，不同的地方显示的星星大小不一样 -->
    <span v-for="(item,index) in itemClass"
          class="star-item"
          :class="item"
          :key="index"></span> <!-- itemClass是数组，有on,half,off，全星，半星，无 -->
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const STAR_LEN = 5;   // 星星的个数  
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {

    };
  },
  props: ['size', 'score'],  // 父组件传来星星的大小和分数
  //监听属性 类似于data概念
  computed: {
    starType () {
      return 'star-' + this.size;    // 计算属性，将starType变为star-加星星大小
    },
    itemClass () {                      // 根据传来得分数，计算出星星的样式
      let result = [];
      let totalStar = Math.floor(this.score * 2) / 2;   // 当小数位大于5时，值为小数，4.2 == 4否则为整数4.5 == 4.5
      let onStar = Math.floor(totalStar);   // 取整为全星的数量
      let halfStar = totalStar % 1 !== 0;   // 有小数true，没有小数为false，只会有一个半星
      for (let i = 0; i < onStar; i++) {
        result.push('on');    // 有多少全星就有多少on
      }
      if (halfStar) {
        result.push('half');
      }
      while (result.length < STAR_LEN) {   // 去掉全星和半星后的都是无星
        result.push('off');
      }
      return result;
    }
  },
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
<style lang='stylus' scoped>
// @import url(); 引入公共css类
.star-48 .star-item
  /* 大小为48的星星大小 */
  display inline-block
  width 20px
  height 20px
  margin-right 22px
.star-48 .star-item:last-child
  margin-right 0
.star-48 .on
  background url('./images/star48_on@2x.png') no-repeat
  background-size 20px 20px
.star-48 .half
  background url('./images/star48_half@2x.png') no-repeat
  background-size 20px 20px
.star-48 .off
  background url('./images/star48_off@2x.png') no-repeat
  background-size 20px 20px
.star-36 .star-item
  /* 大小为36的星星大小 */
  display inline-block
  width 15px
  height 15px
  margin-right 15px
.star-36 .star-item:last-child
  margin-right 0
.star-36 .on
  background url('./images/star36_on@2x.png') no-repeat
  background-size 15px 15px
.star-36 .half
  background url('./images/star36_half@2x.png') no-repeat
  background-size 15px 15px
.star-36 .off
  background url('./images/star36_off@2x.png') no-repeat
  background-size 15px 15px
.star-24 .star-item
  /* 大小为48的星星大小 */
  display inline-block
  width 10px
  height 10px
  margin-right 10px
.star-34 .star-item
  margin-right 0
.star-24 .on
  background url('./images/star24_on@2x.png') no-repeat
  background-size 10px 10px
.star-24 .half
  background url('./images/star24_half@2x.png') no-repeat
  background-size 10px 10px
.star-24 .off
  background url('./images/star24_off@2x.png') no-repeat
  background-size 10px 10px
</style>