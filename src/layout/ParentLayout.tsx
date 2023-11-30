import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'ParentLayout',
  render() {
    return <RouterView />
  }
})
