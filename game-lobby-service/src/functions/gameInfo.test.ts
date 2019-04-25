import { containsCollectionsIds, filterGameInfo } from '../functions/gameInfo'
import { GameInfo } from '../types/gameInfo'
import { game1, game2, game3 } from '../__fixtures__/GameInfoMockData'

describe('filter functions', () => {
  // ToDo lyft ut till __fixtures__
  const mockGameData: GameInfo[] = [game1, game2, game3]
  describe('containsCollectionsIds', () => {
    it('returns true for multiple game info tags', () => {
      const res = containsCollectionsIds(game2, 'slots,all-games-a-z')
      expect(res).toBe(true)
    })
    it('returns false if the game has no gameCollectionIds', () => {
      const res = containsCollectionsIds(game3, 'slots')
      expect(res).toBe(false)
    })
    it('returns true with empty filter', () => {
      const res = containsCollectionsIds(game2, '')
      expect(res).toBe(true)
    })
    it('returns false if filter criteria is not met', () => {
      const res = containsCollectionsIds(game1, 'all-games-a-z')
      expect(res).toBe(false)
    })
    it('returns false if only part of the filter criteria is meth', () => {
      const res = containsCollectionsIds(game1, 'slots,all-games-a-z')
      expect(res).toBe(false)
    })
    it('returns true if the game has no ids and the filer is empty', () => {
      const res = containsCollectionsIds(game3, null)
      expect(res).toBe(true)
    })
  })
  describe('filter', () => {
    it('can filter out games on gameProvider', () => {
      const filterInputState = {
        gameProvider: game2.gameProvider,
      }
      const res = filterGameInfo(mockGameData, filterInputState)
      expect(res).toEqual([game2, game3])
    })
    it('can filter out games on gameCollectionsId', () => {
      const filterInputState = {
        gameCollectionId: 'slots',
      }
      const res = filterGameInfo(mockGameData, filterInputState)
      expect(res).toEqual([game1, game2])
    })
    it('can filter out game on gameProvider and gameCollectionIds', () => {
      const filterInputState = {
        gameCollectionId: 'all-games-a-z',
        gameProvider: game2.gameProvider,
      }
      const res = filterGameInfo(mockGameData, filterInputState)
      expect(res).toEqual([game2])
    })
    it('does not filter if no filter data is provided', () => {
      const filterInputState = {}
      const res = filterGameInfo(mockGameData, filterInputState)
      expect(res).toEqual(mockGameData)
    })
  })
})
