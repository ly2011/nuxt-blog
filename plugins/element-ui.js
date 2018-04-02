// 按需加载ElementUI
// import Element from 'element-ui/lib/element-ui.common';
// import locale from 'element-ui/lib/locale/lang/en';

// export default () => {
//   Vue.use(Element, { locale });
// };

import Vue from 'vue';

import {
  Button,
  Input,
  Radio,
  Checkbox,
  Select,
  Option,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Pagination,
  Loading,
  Message,
  Form,
  FormItem,
  Menu,
  Submenu,
  MenuItem,
  Card
} from 'element-ui';

Vue.use(Button);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
