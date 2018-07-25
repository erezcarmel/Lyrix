import Logo from '@/components/Logo'
import { mount } from 'vue-test-utils'

describe('Logo.vue', () => {
  it('displays the logo text', () => {
    const wrapper = mount(Logo)
    const logo = wrapper.find('.logo')

    expect(logo.text()).toMatch('Lyrix')
  })
})
