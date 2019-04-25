import { GameInfo } from '../types/gameInfo'
import { FilterType } from '../types/IDataService'
import { splitArrayIntoChunks } from './common'

export const containsCollectionsIds = (
  game: GameInfo,
  gameCollectionIds?: string,
): boolean => {
  if (
    !gameCollectionIds ||
    gameCollectionIds.length < 1 ||
    (gameCollectionIds.length === 1 && gameCollectionIds[0] === '')
  ) {
    return true
  }
  if (!game.gameCollectionIds || game.gameCollectionIds.length < 1) {
    return false
  }
  let containsAllFilteredCollectionIds = true
  gameCollectionIds.split(',').forEach(filterCollectionId => {
    if (
      !game.gameCollectionIds
        .map(collectionId => collectionId.toLowerCase())
        .includes(filterCollectionId.toLowerCase())
    ) {
      containsAllFilteredCollectionIds = false
    }
  })
  return containsAllFilteredCollectionIds
}

export const filterGameInfo = (
  games: GameInfo[],
  filter: FilterType,
): GameInfo[] => {
  if (!filter) {
    return games
  }
  const { gameProvider, gameCollectionId, page, pageSize } = filter
  const filteredGames = games.filter(game => {
    if (
      gameProvider &&
      game.gameProvider.toLowerCase() !== gameProvider.toLowerCase()
    ) {
      return false
    }
    return containsCollectionsIds(game, gameCollectionId)
  })
  if (!page) {
    return splitArrayIntoChunks(filteredGames, pageSize)[0]
  }
  return splitArrayIntoChunks(filteredGames, pageSize)[page]
}
