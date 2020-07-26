import request from '@/utils/request'

export function getMessages(page, size) {
  return request({
    url: '/vue-admin-template/message/list',
    method: 'get',
    params: { page, size }
  })
}
