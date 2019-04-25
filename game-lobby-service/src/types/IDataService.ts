import { GameInfo } from './gameInfo'

export type FilterType = {
  gameProvider?: string
  gameCollectionId?: string
  page?: string
  pageSize?: string
}

export interface IDataService {
  getAllGamesData: (filter?: FilterType) => Promise<GameInfo[]>
  getGameData: (gameId) => Promise<GameInfo>
}
