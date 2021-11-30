import { mount } from "@vue/test-utils"
import Btn from "../../components/btn.vue"
const wrapper = mount(Btn)
console.log(wrapper);

describe('Btn', () => {
  it('should be define', () => {
    expect(Btn).toBeDefined()
  })
})