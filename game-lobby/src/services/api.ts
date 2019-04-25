import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { GameInfo, FilterType } from '../types/apiTypes'

const axiosConfig: AxiosRequestConfig = {}
export default class Api /*implements ApiInterface */ {
  // ToDo fix type
  axios: AxiosInstance
  constructor() {
    this.axios = Axios.create({
      baseURL: '',
    })
  }

  getAllGameInfo(filter?: FilterType) {
    if (filter) {
      const { gameProvider, gameCollectionId, page, pageSize } = filter
      return this.axios
        .get<GameInfo[]>(
          `game-info?gameProvider=${gameProvider}&gameCollectionId=${gameCollectionId}&page=${page}&pageSize=${pageSize}`,
        )
        .catch(error => handleError(error))
    }
    return this.axios
      .get<GameInfo[]>('game-info')
      .catch(error => handleError(error))
  }

  getGameInfo(gameId: string) {
    return this.axios.get<GameInfo>(`game-info${gameId}`)
  }
}

const handleError = (error: any) => {
  console.log(error)
  return error
}
