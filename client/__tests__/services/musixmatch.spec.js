import musixmatch from '@/services/musixmatch'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const mockRequest = {
  artist: 'my artist',
  track: 'my track'
}

describe('musixmatch.js', () => {

  describe('success loading', () => {
    beforeAll(() => {
      Vue.http.jsonp = jest.fn().mockImplementation(request => {
        return Promise.resolve({
          json: () => request
        })
      })
    })

    it('loads requested track', async () => {
      const result = await musixmatch.get(mockRequest)

      expect(Vue.http.jsonp).toHaveBeenCalled()
      expect(result.includes('q_artist=' + mockRequest.artist)).toBeTruthy()
      expect(result.includes('q_track=' + mockRequest.track)).toBeTruthy()
    })
  })

  describe('error loading', () => {
    beforeAll(() => {
      Vue.http.jsonp = jest.fn().mockRejectedValue(new Error('Async error'));
    })

    it('handles requested track error', () => {
      expect(musixmatch.get(mockRequest)).rejects.toMatch('error')
    })
  })

})
