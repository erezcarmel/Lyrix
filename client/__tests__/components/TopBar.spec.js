import TopBar from '@/components/TopBar'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TopBar.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        form: {
          artist: 'my artist',
          track: 'my track'
        }
      }
    })
  })

  it('implements search component', () => {
    const wrapper = mount(TopBar, { store, localVue })
    const search = wrapper.find('.search-wrapper')

    expect(search).toBeDefined()
  })

  it('implements logo component', () => {
    const wrapper = mount(TopBar, { store, localVue })
    const logo = wrapper.find('.logo')

    expect(logo).toBeDefined()
  })
})
