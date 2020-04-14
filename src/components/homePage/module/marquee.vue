<template>
  <div class="zx">
    <div class="el-icon-arrow-left" @click="bottonLeft"></div>
    <div class="el-icon-arrow-right" @click="bottonRight"></div>
    <div class="marquee" ref="marquee" style>
      <div class="marquee-img" v-for="item in 10" :key="item">
        <img src="../../imga/logo.jpg" alt />
      </div>
    </div>
    <h2>代码</h2>
    <div>给marquee 添加scc width: 2000px; display: flex; height: 100px; transition: all 0.5s;</div>
    <div>然后 在给marquee 添加ref</div>
    <div>点击左右按钮控制 this.$refs.marquee.style.transform = "translateX(" + -800 + "px)";</div>
  </div>
</template>
<script>
export default {
  methods: {
    bottonLeft() {
      this.$refs.marquee.style.transform = "translateX(0)";
    },
    bottonRight() {
      this.$refs.marquee.style.transform = "translateX(" + -800 + "px)";
    }
  }
};
</script>
<style lang="scss" scoped>
.zx {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.marquee {
  width: 2000px;
  display: flex;
  height: 100px;

  transition: all 0.5s;
}
.marquee-img {
  height: 100px;
  width: 200px;
  margin-right: 10px;
}
.el-icon-arrow-left,
.el-icon-arrow-right {
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
}
</style>