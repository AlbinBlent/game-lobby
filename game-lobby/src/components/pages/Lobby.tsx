import React, { useState, useEffect } from 'react'
import Api from '../../services/api'
import { GameInfo, FilterType } from '../../types/apiTypes'
import './Lobby.css'

export default function Lobby() {
  const [gamesState, setGamesState] = useState<GameInfo[]>([])
  const [filterInputsState, setFilterInputsState] = useState<FilterType>({
    gameCollectionId: '',
    gameProvider: '',
    page: 0,
    pageSize: 20,
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const api = new Api()
  const [error, setError] = useState(null)

  // Runs on first render
  useEffect(() => {
    getAllGameInfo()
  }, [])

  // Update game info on new value on page
  useEffect(() => {
    getAllGameInfo()
  }, [filterInputsState.page])

  const getAllGameInfo = () => {
    setIsLoading(true)
    api
      .getAllGameInfo(filterInputsState)
      .then(response => {
        setGamesState(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.toString())
        setIsLoading(false)
      })
  }

  const handleInputChange = (field: string) => (value: string | string[]) => {
    setFilterInputsState({
      ...filterInputsState,
      [field]: value,
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    getAllGameInfo()
  }

  const handleNextPageClick = () => {
    if (filterInputsState.page) {
      setFilterInputsState({
        ...filterInputsState,
        page: filterInputsState.page + 1,
      })
    } else {
      setFilterInputsState({ ...filterInputsState, page: 1 })
    }
  }

  const handlePrevPageClick = () => {
    if (filterInputsState.page && filterInputsState.page > 0) {
      setFilterInputsState({
        ...filterInputsState,
        page: filterInputsState.page - 1,
      })
    } else {
      return false
    }
  }

  return (
    <div className="Lobby">
      <form onSubmit={handleSubmit}>
        <input
          name="gameProvider"
          placeholder="gameProvider"
          onChange={event =>
            handleInputChange('gameProvider')(event.target.value)
          }
          value={filterInputsState.gameProvider}
        />
        <input
          name="gameCollectionId"
          placeholder="gameCollectionId"
          onChange={event =>
            handleInputChange('gameCollectionId')(event.target.value.split(' '))
          }
          value={filterInputsState.gameCollectionId}
        />
        <button className="lobbyButton" type="submit">
          filter
        </button>
      </form>
      {isLoading && <h3>Laddar...</h3>}
      <LobbyGameList games={gamesState} />
      <div>
        <button className="lobbyButton" onClick={handlePrevPageClick}>
          Föregående sida
        </button>
        <button className="lobbyButton" onClick={handleNextPageClick}>
          Nästa sida
        </button>
      </div>
      {error}
    </div>
  )
}

type LobbyGameListPropsType = {
  games: GameInfo[]
}

function LobbyGameList(props: LobbyGameListPropsType) {
  return (
    <div className="LobbyGameList">
      {props.games && props.games.map(game => <LobbyGameTile game={game} />)}
    </div>
  )
}

const LobbyGameTile = (props: { game: GameInfo }) => {
  const { game } = props
  return (
    <div
      className="LobbyGameTile"
      key={game.id}
      onClick={() => console.log(`start game ${game.id}`)}
    >
      <img src={game.thumbnailUrl} />
      <div>Name: {game.name}</div>
      <div>Provider: {game.gameProvider}</div>
    </div>
  )
}
