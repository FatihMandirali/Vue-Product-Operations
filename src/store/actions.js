import axios from 'axios';

export const setTradeResult = ({state, commit}, tradeResult) => {
  commit("updateTradeResult", tradeResult)
  let tradeData={
    purchase:state.purchase,
    sale: state.sale
  }
  axios.put("https://urun-63647.firebaseio.com/trade-result.json", tradeData)
    .then(response => {
      console.log(response);
    })
}

export const getTradeResult = ({commit}) => {
  axios.get("https://urun-63647.firebaseio.com/trade-result.json")
    .then((response)=>{
      commit("updateTradeResult",response.data);
    })
}
