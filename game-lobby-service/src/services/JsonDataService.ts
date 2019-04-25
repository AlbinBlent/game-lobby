import { IDataService, FilterType } from '../types/IDataService'
import { readFile } from 'fs'
import { GameInfo } from '../types/gameInfo'
import { filterGameInfo } from '../functions/gameInfo'

function jsonFileReader<T>(file: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(data))
    })
  })
}

type FileReaderFunctionsFactoryReturnType = {
  getAllGamesData: (filter?: FilterType) => Promise<GameInfo[]>
  getGameData: (gameId: string) => Promise<GameInfo>
}

export const fileReaderFunctionsFactory = (
  fileReader: <T>(file: string) => Promise<T>,
): FileReaderFunctionsFactoryReturnType => {
  const getAllGamesData = (filterData): Promise<GameInfo[]> => {
    return fileReader<GameInfo[]>('data/all-games.json').then(data => {
      return filterGameInfo(data, filterData)
    })
  }
  const getGameData = (gameId: string): Promise<GameInfo> => {
    return fileReader<GameInfo[]>('data/all-games.json').then(data => {
      const gameInfo = data.find(game => {
        return game.id === gameId
      })
      if (gameInfo) {
        return gameInfo
      }
      throw new Error(`Game with id: ${gameId} not found`)
    })
  }
  return { getAllGamesData, getGameData }
}

export class JsonDataService implements IDataService {
  // ToDo fundera på cache
  fileReaderFunctions: FileReaderFunctionsFactoryReturnType
  constructor() {
    this.fileReaderFunctions = fileReaderFunctionsFactory(jsonFileReader)
  }
  getAllGamesData(filter) {
    return this.fileReaderFunctions.getAllGamesData(filter)
  }
  getGameData(gameId: string) {
    return this.fileReaderFunctions.getGameData(gameId)
  }
}
