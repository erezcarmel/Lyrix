import Search from '@/components/Search'
import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Search.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      UPDATE_ARTIST: jest.fn(),
      UPDATE_TRACK: jest.fn()
    }

    store = new Vuex.Store({
      state: {
        form: {
          artist: 'my artist',
          track: 'my track'
        }
      },
      mutations
    })
  })

  it('has 2 fields', () => {
    const wrapper = mount(Search, { store, localVue })
    const fields = wrapper.findAll('.field')

    expect(fields.length).toBe(2)
  })

  it('has artist updated from store', () => {
    const wrapper = mount(Search, { store, localVue })

    expect(wrapper.vm.artist).toBe('my artist')
  })

  it('has track updated from store', () => {
    const wrapper = mount(Search, { store, localVue })

    expect(wrapper.vm.track).toBe('my track')
  })

  it('updates store with new artist', () => {
    const wrapper = mount(Search, { store, localVue })
    const input = wrapper.find('.field .artist')
    input.element.value = 'new artist'
    input.trigger('input')

    expect(mutations.UPDATE_ARTIST).toHaveBeenCalled()
  })

  it('updates store with new track', () => {
    const wrapper = mount(Search, { store, localVue })
    const input = wrapper.find('.field .track')
    input.element.value = 'new track'
    input.trigger('input')

    expect(mutations.UPDATE_TRACK).toHaveBeenCalled()
  })
})
