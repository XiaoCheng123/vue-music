/**
 * Created by admin on 2018/1/26.
 */
import * as types from './mutations-type'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}

export default mutations
