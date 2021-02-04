import { message } from 'antd';


export default function verifyCreateClass(period,grade,name) {
  if (!period) {
    message.info('请选择学段');
    return false

  }
  if (!grade) {
    message.info('请选择年级')
    return false
  }

  let reg = new RegExp(/^((?![_%]).)*$/) // 不包含_%
  if(!name || !reg.test(name.toString()) || name.toString().length>20) {
    message.error('班级名格式错误')
    return false
  }
  return true

}