import lastfm from '@/services/lastfm'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const mockRequest = {
  artist: 'my artist',
  track: 'my track',
  album: {
    name: 'my album',
    artist: {
      name: 'my artist'
    }
  }
}

describe('lastfm.js', () => {

  describe('success loading', () => {
    beforeAll(() => {
      Vue.http.get = jest.fn().mockImplementation(request => {
        return Promise.resolve(request)
      })
    })

    it('loads requested track', async () => {
      const result = await lastfm.track(mockRequest)

      expect(Vue.http.get).toHaveBeenCalled()
      expect(result.includes('track.getInfo')).toBeTruthy()
      expect(result.includes('artist=' + mockRequest.artist)).toBeTruthy()
      expect(result.includes('track=' + mockRequest.track)).toBeTruthy()
    })

    it('loads requested artist albums', async () => {
      const result = await lastfm.albums(mockRequest)

      expect(Vue.http.get).toHaveBeenCalled()
      expect(result.includes('artist.getTopAlbums')).toBeTruthy()
      expect(result.includes('artist=' + mockRequest.artist)).toBeTruthy()
    })

    it('loads requested album', async () => {
      const result = await lastfm.album(mockRequest)

      expect(Vue.http.get).toHaveBeenCalled()
      expect(result.includes('album.getInfo')).toBeTruthy()
      expect(result.includes('artist=' + mockRequest.album.artist.name)).toBeTruthy()
      expect(result.includes('album=' + mockRequest.album.name)).toBeTruthy()
    })
  })

  describe('error loading', () => {
    beforeAll(() => {
      Vue.http.get = jest.fn().mockRejectedValue(new Error('Async error'));
    })

    it('handles requested track error', () => {
      expect(lastfm.track(mockRequest)).rejects.toMatch('error')
    })

    it('handles requested albums error', () => {
      expect(lastfm.albums(mockRequest)).rejects.toMatch('error')
    })

    it('handles album albums error', () => {
      expect(lastfm.album(mockRequest)).rejects.toMatch('error')
    })
  })

})
