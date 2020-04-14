import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from './component/product/ProductList'
import ProductSell from './component/product/ProductSell'
import ProductPurchase from './component/product/ProductPurchase'

Vue.use(VueRouter);

const routes=[
  {path:"/", component: ProductList},
  {path:"/urun-islemleri", component: ProductSell},
  {path:"/urun-cikisi", component: ProductPurchase},
  {path:"/*", redirect:'/'}
];

export const router=new VueRouter({
  mode:'history',
  routes
});
