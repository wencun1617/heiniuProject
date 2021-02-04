import {request} from './axios'

export function getAdminiClass() {
  return request({
    url: "/adminiclass"
  })
}

export function getTeachClass() {
  return request({
    url: "/teachclass"
  })
}