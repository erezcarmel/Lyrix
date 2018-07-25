import Album from '@/views/Album'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import mockState from './mockState.json'
import mockedRoute from './mockRoute.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Album.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({ state: mockState })

    wrapper = mount(Album, {
      store,
      localVue,
      mocks: {
        $route: mockedRoute
      }
    })
  })

  it('implements header component', () => {
    const header = wrapper.find('.content-header')

    expect(header).toBeDefined()
  })

  it('has tracks list', () => {
    const tracks = wrapper.find('.tracks')

    expect(tracks).toBeDefined()
    expect(tracks.is('ul')).toBeTruthy()
  })

  it('has artist computed variable', () => {
    expect(wrapper.vm.artist).toBe(mockedRoute.query.artist)
  })

  it('has album computed variable', () => {
    expect(wrapper.vm.album).toBe(mockState.lyrics[wrapper.vm.artist].albums[0])
  })

  it('has artwork computed variable', () => {
    expect(wrapper.vm.artwork).toBe(mockState.lyrics[wrapper.vm.artist].albums[0].image[2]['#text'])
  })

  it('has tracks computed variable', () => {
    expect(wrapper.vm.tracks).toBe(mockState.lyrics[wrapper.vm.artist].albums[0].tracks.track)
  })

  it('has background computed variable', () => {
    expect(wrapper.vm.background).toBe(mockState.lyrics[wrapper.vm.artist].albums[0].image[3]['#text'])
  })
})
