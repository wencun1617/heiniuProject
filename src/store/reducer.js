import {combineReducers} from 'redux'

import { reducer as classInfoReducer } from 'pages/my-class/store/index'
import {reducer as classDetailsReducer} from 'pages/class-details/store/index'

//对多个reducer进行合并

export default combineReducers({
  classInfo: classInfoReducer,
  classDetails: classDetailsReducer
})