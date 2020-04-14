import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//复制插件
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, Table, TableColumn, BreadcrumbItem, Breadcrumb, Card, Message, Scrollbar } from 'element-ui';
Vue.prototype.$message = Message;
Vue.use(Button)
  .use(Select)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Menu)
  .use(Submenu)
  .use(MenuItemGroup)
  .use(MenuItem)
  .use(Table)
  .use(TableColumn)
  .use(BreadcrumbItem)
  .use(Breadcrumb)
  .use(Card)
  .use(Scrollbar)

Vue.config.productionTip = false
// 引入全局样式
import "../src/css/globascss.scss"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
