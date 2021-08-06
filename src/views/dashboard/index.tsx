import { Button, message } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    function handleClick() {
      message.info('点击')
    }

    return {
      handleClick
    }
  },
  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        点击
      </Button>
    )
  }
})
