import { shallowMount } from "@vue/test-utils"
import Btn from "@/components/btn.vue"
const props = {
  type: "blue",
  text: "Button Text",
}

describe("Component: btn.vue", () => {
  it("to be defined", () => {
    expect(Btn).toBeDefined()
  })

  it(`to be render and receive our props "${Object.keys(props)}"`, () => {
    const wrapper = shallowMount(Btn, { props })
    expect(wrapper.html()).toContain(`btn--${props.type}`)
    expect(wrapper.html()).toContain(props.type)
  })
})
