import Lyrics from '@/views/Lyrics'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import mockState from './mockState.json'
import mockedRoute from './mockRoute.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Lyrics.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({ state: mockState })

    wrapper = mount(Lyrics, {
      store,
      localVue,
      mocks: {
        $route: mockedRoute
      }
    })
  })

  it('has background div', () => {
    const background = wrapper.find('.background')

    expect(background).toBeDefined()
    expect(background.is('div')).toBeTruthy()
  })

  it('implements header component', () => {
    const header = wrapper.find('.content-header')

    expect(header).toBeDefined()
  })

  it('has lyrics paragraph', () => {
    const lyrics = wrapper.find('.lyrics')

    expect(lyrics).toBeDefined()
    expect(lyrics.is('p')).toBeTruthy()
  })

  it('has artist computed variable', () => {
    expect(wrapper.vm.artist).toBe(mockedRoute.query.artist)
  })

  it('has track computed variable', () => {
    expect(wrapper.vm.track).toBe(mockedRoute.query.track)
  })

  it('has trackData computed variable', () => {
    expect(wrapper.vm.trackData).toBe(mockState.lyrics[wrapper.vm.artist][wrapper.vm.track])
  })

  it('has artwork computed variable', () => {
    expect(wrapper.vm.artwork).toBe(mockState.lyrics[wrapper.vm.artist].albums[0].image[2]['#text'])
  })

  it('has background computed variable', () => {
    expect(wrapper.vm.background).toBe(mockState.lyrics[wrapper.vm.artist].albums[0].image[3]['#text'])
  })
})
