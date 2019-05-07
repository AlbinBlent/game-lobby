import { splitArrayIntoChunks } from '../functions/common'

describe('splitArrayIntoChunks', () => {
  describe('returns an array in chunks', () => {
    it('even number chunk', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const chunkSize = 2
      const res = splitArrayIntoChunks(array, chunkSize)
      expect(res[0]).toEqual([1, 2])
      expect(res[4]).toEqual([9, 0])
      expect(res.length).toEqual(5)
    })
    it('odd number chunk', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      const chunkSize = 3
      const res = splitArrayIntoChunks(array, chunkSize)
      expect(res.length).toEqual(4)
      expect(res[0]).toEqual([1, 2, 3])
      expect(res[3]).toEqual([0])
    })
  })
  it('return a single array if chunk size is greater than array size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const chunkSize = 12
    const res = splitArrayIntoChunks(array, chunkSize)
    expect(res.length).toEqual(1)
    expect(res[0]).toEqual(array)
  })
  it('return original array if chunkSize is null', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const chunkSize = null
    const res = splitArrayIntoChunks(array, chunkSize)
    expect(res.length).toEqual(1)
    expect(res[0]).toEqual(array)
  })
})
