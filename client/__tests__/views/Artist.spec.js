import Artist from '@/views/Artist'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import mockState from './mockState.json'
import mockedRoute from './mockRoute.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Artist.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({ state: mockState })

    wrapper = mount(Artist, {
      store,
      localVue,
      mocks: {
        $route: mockedRoute
      }
    })
  })

  it('has artist background image', () => {
    const background = wrapper.find('.artist-background')

    expect(background).toBeDefined()
    expect(background.is('img')).toBeTruthy()
  })

  it('implements header component', () => {
    const header = wrapper.find('.content-header')

    expect(header).toBeDefined()
  })

  it('has albums list', () => {
    const albums = wrapper.find('.albums')

    expect(albums).toBeDefined()
    expect(albums.is('ul')).toBeTruthy()
  })

  it('has artist computed variable', () => {
    expect(wrapper.vm.artist).toBe(mockedRoute.query.artist)
  })

  it('has albums computed variable', () => {
    expect(wrapper.vm.albums).toBe(mockState.lyrics[wrapper.vm.artist].albums)
  })
})
