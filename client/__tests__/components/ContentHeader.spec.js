import ContentHeader from '@/components/ContentHeader'
import { mount } from 'vue-test-utils'

describe('ContentHeader.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(ContentHeader)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains an image', () => {
    const wrapper = mount(ContentHeader, {
      propsData: {
        artwork: 'hello'
      }
    })

    expect(wrapper.contains('img')).toBeTruthy()
  })

  it('contains a title', () => {
    const wrapper = mount(ContentHeader, {
      propsData: {
        title: 'hello'
      }
    })

    expect(wrapper.contains('.title')).toBeTruthy()
    expect(wrapper.find('.title').text()).toBe('hello')
  })

  it('does not contains a subtitle if subtitle not provided', () => {
    const wrapper = mount(ContentHeader)

    expect(wrapper.contains('.subtitle')).toBeFalsy()
  })

  it('contains a subtitle', () => {
    const wrapper = mount(ContentHeader, {
      propsData: {
        subtitle: 'hello'
      }
    })

    expect(wrapper.contains('.subtitle')).toBeTruthy()
    expect(wrapper.find('.subtitle').text()).toBe('hello')
  })
})
