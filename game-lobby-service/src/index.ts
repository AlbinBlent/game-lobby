import * as express from 'express'
import { Request, Response } from 'express'
import { JsonDataService } from './services/JsonDataService'
import Api from './services/api'
import { FilterType } from './types/IDataService'

const app = express()

const PORT = 3001

const dataService = new JsonDataService()
const api = new Api(dataService)

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  })
})

// Lobby service
app.get('/game-info', (req: Request, res: Response) => {
  const {
    gameProvider,
    gameCollectionId,
    page,
    pageSize,
  }: FilterType = req.query
  api
    .getAllGamesData({ gameProvider, gameCollectionId, page, pageSize })
    .then(gamesData => {
      res.send(gamesData)
    })
    .catch(error => {
      console.log(error.message)
      res.status(404).send()
    })
})

app.get('/game-info/:gameId', (req: Request, res: Response) => {
  api
    .getGameData(req.params.gameId)
    .then(gamesData => {
      res.send(gamesData)
    })
    .catch(error => {
      res.status(404).send(error.message)
    })
})

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})

export default app
