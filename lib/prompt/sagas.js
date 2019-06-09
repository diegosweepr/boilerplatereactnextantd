import { put, takeEvery, fork, call, take } from 'redux-saga/effects'
import { polyfill } from 'es6-promise'
import fetch from 'isomorphic-unfetch'
import actions from './actions'

polyfill()


function* changeTitleSaga ({payload}) {
  try {
    yield put(actions.changeTitleSuccess(payload.title))
  } catch (err) {
    yield put({type : actions.API_ERROR})
  }
}

export function* APIError(){
    yield takeEvery(actions.API_ERROR,function*(){})
}

export default function* rootSaga(){
    yield all([
    takeEvery(actions.CHANGE_TITLE, changeTitleSaga),
    fork(APIError)
    ])
}
