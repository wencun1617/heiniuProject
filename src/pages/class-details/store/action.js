
import {getClassDetails} from '@/services/class-details.js'

const changeClassDetailsAction = (classDetails) => ({
  type: 'CHANGE_CLASSDETAILS',
  classDetails
})

const clearAction = () => ({
  type:'CLEAR'
})

const getClassDetailsAction = (id) => {
  return (dispatch) => {
    // 根据id获取对应班级详情
    getClassDetails(id).then(res => {  
      dispatch(changeClassDetailsAction(res))
    }).catch(res => {
      // 查找失败/查找不到, 清空该部分state
      dispatch(clearAction())
    })
  }
}

export {
  getClassDetailsAction
}