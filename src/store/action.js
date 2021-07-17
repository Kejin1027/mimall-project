// 商城vuex-actions
export default{
  saveUserName(context, username){
    context.commit('saveUserName',username)
  },
  saveCartCount(context, cartCount){
    context.commit('saveCartCount',cartCount)
  },
  saveTestName(context, test){
    context.commit('saveTestName', test)
  }
}