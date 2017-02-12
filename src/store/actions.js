import * as types from './mutation-types'

export default {
  addTotalTime({ commit }, time){
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time){
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  }
}

//actions其实就是去触发事件和传入参数
// mutation-types 记录我们所有的事件名
//
// mutations 注册我们各种数据变化的方法
//
// actions 则可以编写异步的逻辑或者是一些逻辑，再去commit
// 我们的事件
//
// 如果有getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作
//
// 最后别忘了在我们的main.js里使用我们的store
