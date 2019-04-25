import { IDataService, FilterType } from '../types/IDataService'

// ToDo gör om till en Express.Router() ??
export default class Api {
  dataService
  constructor(dataService: IDataService) {
    this.dataService = dataService
  }
  getAllGamesData(filter: FilterType) {
    return this.dataService.getAllGamesData(filter)
  }
  getGameData(gameId: string) {
    return this.dataService.getGameData(gameId)
  }
}
