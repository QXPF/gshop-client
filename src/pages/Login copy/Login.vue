
<template>
  <div>
    <form v-if="!isReg">
      <div>用户名:</div>
      <input type="text"
             v-model="name">
      <div>密码:</div>
      <input type="password"
             v-model="password">
      <button type="button"
              @click="login()">登录</button>
      <button type="button"
              @click="reg()">注册</button>
    </form>
    <form v-else>
      <div>用户名:</div>
      <input type="text"
             v-model="name">
      <div>密码:</div>
      <input type="password"
             v-model="password">
      <div>再次输入密码:</div>
      <input type="password"
             v-model="repeat">
      <button type="button"
              @click="addUser()">确定</button>
      <button type="button"
              @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Login',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login () {
      window.localStorage.setItem('name', 'admin');
      window.localStorage.setItem('password', '123456');
      //验证姓名和密码是否与locastorage一致
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        //清空输入框
        this.name = "";
        this.password = "";
        this.$router.push("/msite");
      } else {
        alert('用户名或密码不正确');
      }
    },
    reg () {
      this.isReg = true;
    },
    cancel () {
      this.isReg = false;
    },
    addUser () {
      //验证两次输入密码是否一致
      if (this.password === this.repeat) {
        //将名字和密码存入localstorage中
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        //清空输入框
        this.name = "";
        this.password = "";
        this.isReg = false;
      } else {
        alert("两次密码不一致");
      }
    }
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
<style lang="stylus" scoped></style>

