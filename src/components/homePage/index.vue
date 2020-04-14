<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <header-page></header-page>
    </el-header>
    <el-container>
      <el-aside :width="!collapse?'200px':'64px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :collapse="collapse"
          :collapse-transition="false"
          :router="true"
        >
          <el-submenu v-for="(item, index) in headerContent" :key="index" :index="index+''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="(items, ind) in item.child"
              :key="ind"
              :index="items.id+''"
              @click="saveNavState(items.id)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{items.title}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边栏 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import headerPage from "./header.vue";
export default {
  data() {
    return {
      //控制折叠
      collapse: false,
      headerContent: [
        {
          title: "PC端",
          id: 1,
          child: [
            {
              title: "element",
              id: "element"
            }
          ]
        },
        {
          title: "移动端",
          id: 2,
          child: [
            {
              title: "vant",
              id: "vant"
            }
          ]
        },
        {
          title: "JS",
          id: 3,
          child: [
            {
              title: "数组",
              id: "vant"
            },
            {
              title: "字符串",
              id: "vant"
            },
            {
              title: "boolean",
              id: "vant"
            },
            {
              title: "Object",
              id: "vant"
            }
          ]
        },

        {
          title: "vue",
          id: 5
        },
        {
          title: "组件",
          id: 6,
          child: [
            {
              title: "跑马灯",
              id: "marquee"
            }
          ]
        }
      ],
      defaultActive: "element"
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
    saveNavState(data) {
      this.defaultActive = data;
    }
  },
  components: {
    headerPage
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  line-height: 60px;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
.el-menu {
  border: 0;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>