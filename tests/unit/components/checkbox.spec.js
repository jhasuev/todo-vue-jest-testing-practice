import { shallowMount } from "@vue/test-utils"
import Checkbox from "@/components/checkbox.vue"

describe("Component: checkbox.vue", () => {
  it("to be defined", () => {
    expect(Checkbox).toBeDefined()
  })

  it(`to be render correctly`, () => {
    const component = shallowMount(Checkbox)
    expect(component.html()).toContain(`<input `)
    expect(component.html()).toContain(`type="checkbox"`)
  })

  it(`should get props`, () => {
    const component = shallowMount(Checkbox, {
      props: {
        modelValue: true,
      },
    })

    expect(component.props("modelValue")).toBe(true)
    expect(component.find("input").wrapperElement.checked).toBe(true)
    component.find("input").setChecked(false)
    expect(component.find("input").wrapperElement.checked).toBe(false)
  })
})
