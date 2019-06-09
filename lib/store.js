import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware]

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore (initialState={}) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(middlewares)
  )
  
  store.runSagaTask = () =>{
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask();
  return store
}

export default configureStore
