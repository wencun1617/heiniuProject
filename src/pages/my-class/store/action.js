
import {getAdminiClass,getTeachClass} from '@/services/my-class.js'



const changeAdminiClassAction = (adminiClass) => ({
  type: 'CHANGE_ADMINICLASS',
  adminiClass
})

const changeTeachClassAction = (teachClass) => ({
  type: 'CHANGE_TAECHCLASS',
  teachClass
})

const getAdminiClassAction = () => {
  return (dispatch) => {
    // 获取行政班数据
    getAdminiClass().then(res => {
      dispatch(changeAdminiClassAction(res))
    })
  }
}

const getTeachClassAction = () => {
  return (dispatch) => {
    // 获取教学班数据
    getTeachClass().then(res => {
      dispatch(changeTeachClassAction(res))
    }).catch(res => {
      console.log(res)
    })
  }
}

export {
  getAdminiClassAction,
  getTeachClassAction
}