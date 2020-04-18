import axios from 'axios';
import { router } from '../../router';

const state = {
  products: []
}

const getters = {
  getProducts(state){
    return state.products;
  },
  getProduct(state){
      return key=>state.products.filter(element=>{
        return element.key==key;
      })
  }

}
const mutations = {
  updateProductList(state,product){
    state.products.push(product);
  }

}

const actions = {
  initApp({commit}){ //mutationu çağırma yöntemi commit tir.
    axios.get("https://urun-63647.firebaseio.com/product.json")
      .then((response)=>{
          let data=response.data;
          for(let key in data){
            data[key].key=key;
            commit("updateProductList",data[key]);
          }
      })
  },
  saveProduct({dispatch,commit,state},product){
    axios.post("https://urun-63647.firebaseio.com/product.json",product)
      .then((response)=>{
          //Ürün listesi güncellenmesi
          product.key=response.data.name;
          commit("updateProductList",product);

          //
        let tradeResult={
          purchase: product.price,
          sale: 0,
          count:product.count
        }
        dispatch("setTradeResult",tradeResult);
        router.replace("/");

      })
  },
  sellProduct({commit,dispatch,state},payload){
      let product =state.products.filter(element=>{
        return element.key==payload.key
      })
      if(product){
        let totalCount=product[0].count - payload.count;
        axios.patch("https://urun-63647.firebaseio.com/"+product.key+".json",{count:totalCount})
          .then(response=>{
            product[0].count=totalCount;
            let tradeResult={
              purchase: 0,
              sale: product[0].price,
              count:payload.count
            }
            dispatch("setTradeResult",tradeResult);
            router.replace("/");

          })
      }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
