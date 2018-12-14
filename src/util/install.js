import commonTitle from '../components/common/title' // 头部标题 例： title='头部标题'
import commonTree from '../components/common/tree' //
import commonBox from '../components/common/box' //
const components = [
  commonTitle,
  commonTree,
  commonBox
]
const Loading = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
export default Loading
