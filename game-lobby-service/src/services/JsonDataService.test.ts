import { fileReaderFunctionsFactory } from './JsonDataService'
import { mockGameData } from '../__fixtures__/GameInfoMockData'

describe('JsonDataService', () => {
  const mockFileReader = (file: string) => Promise.resolve(mockGameData)
  // @ts-ignore
  const fileReaderFunctions = fileReaderFunctionsFactory(mockFileReader)
  it('getAllGamesData should return games data in array', done => {
    fileReaderFunctions.getAllGamesData().then(allGamesData => {
      expect(allGamesData).toEqual(mockGameData)
      done()
    })
  })
  it('getAllGamesData with gameProvider filter should return games data in array', done => {
    const filter = { gameProvider: 'IGT' }
    fileReaderFunctions.getAllGamesData(filter).then(allGamesData => {
      expect(allGamesData).toEqual([mockGameData[1]])
      done()
    })
  })
  it('getAllGamesData with gameCollectionId filter should return games data in array', done => {
    const filter = { gameCollectionId: 'slots' }
    fileReaderFunctions.getAllGamesData(filter).then(allGamesData => {
      expect(allGamesData).toEqual([mockGameData[0]])
      done()
    })
  })
  it('getAllGamesData with gameProvider and gameCollectionId filter should return games data in array', done => {
    const filter = { gameProvider: 'OGS', gameCollectionId: 'slots' }
    fileReaderFunctions.getAllGamesData(filter).then(allGamesData => {
      expect(allGamesData).toEqual([mockGameData[0]])
      done()
    })
  })
  describe('getAllGamesData with paging filter should return games data in array', () => {
    it('first page', done => {
      const filter = { page: '0', pageSize: '1' }
      fileReaderFunctions.getAllGamesData(filter).then(allGamesData => {
        expect(allGamesData).toEqual([mockGameData[0]])
        done()
      })
    })
    it('second page', done => {
      const filter = { page: '1', pageSize: '1' }
      fileReaderFunctions.getAllGamesData(filter).then(allGamesData => {
        expect(allGamesData).toEqual([mockGameData[1]])
        done()
      })
    })
  })
  it('getGameData should return game data object', done => {
    fileReaderFunctions.getGameData(mockGameData[0].id).then(gameData => {
      expect(gameData).toEqual(mockGameData[0])
      done()
    })
  })
  it('getGameData should return error if the game object does not exist', done => {
    fileReaderFunctions.getGameData('not-a-game-id').catch(error => {
      expect(error).toEqual(new Error('Game with id: not-a-game-id not found'))
      done()
    })
  })
})
