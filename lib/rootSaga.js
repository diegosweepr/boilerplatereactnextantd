import { all } from 'redux-saga/effects'
import 'isomorphic-unfetch'
import promptSaga from './prompt/sagas'

function * rootSaga () {
  yield all([promptSaga])
}

export default rootSaga
