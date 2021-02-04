import { getAdminiClass, getTeachClass } from '@/services/my-class'
import axios from 'axios'
export const postClass = async (period, grade, type) => {
  let admini = await getAdminiClass().then(res => res.length)
  let teach = await getTeachClass().then(res => res.length)
  let id = admini + teach + 1

  if (type === 1) {

    axios.post('http://localhost:3008/adminiclass', {
      "id": id,
      "grade": grade,
      "class": period,
      "headmaster": "田小雨",
      "students": 0,
      "type": type
    })
  }
  if (type === 2) {
    axios.post('http://localhost:3008/teachclass', {
      "id": id,
      "grade": grade,
      "class": period,
      "headmaster": "田小雨",
      "students": 0,
      "type": type
    })
  }
}

