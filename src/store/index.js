import  thunkMiddleware  from 'redux-thunk' // (Middleware), 使得redux中可以发送异步的网络请求

import reducer from './reducer';
import {createStore,applyMiddleware,compose} from 'redux'

//redux-Devtools扩展所需 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
// 根据reducer函数创建store
const store = createStore(reducer, enhancer);

export default store;