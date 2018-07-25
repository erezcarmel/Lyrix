import Search from '@/views/Search'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import mockState from './mockState.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Search.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({ state: mockState })
  })

  it('has search box wrapper', () => {
    const wrapper = mount(Search, { store, localVue })
    const searchBox = wrapper.find('.search-box')

    expect(searchBox).toBeDefined()
  })

  it('implements search component', () => {
    const wrapper = mount(Search, { store, localVue })
    const search = wrapper.find('.search-wrapper')

    expect(search).toBeDefined()
  })

  it('implements logo component', () => {
    const wrapper = mount(Search, { store, localVue })
    const logo = wrapper.find('.logo')

    expect(logo).toBeDefined()
  })
})
