import {request} from './axios'

export function getClassDetails(type) {
  return request({
    url: "/classdetails",
    params: {
      ...type
    }
  })
}