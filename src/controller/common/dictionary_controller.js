import {
  commonService
} from '@/api'

const dictionaryController = {
  baseUrl: '/sys/dictionary/queryAll',
  queryAll () { // 用户主页菜单列表
    return commonService({
      method: 'post',
      url: this.baseUrl
    })
  }
}

export {
  dictionaryController
}
