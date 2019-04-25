enum GameInfoStatus {
  ACTIVE = 'ACTIVE',
}
enum GameInfoStartType {
  IFRAME = 'IFRAME',
}
enum AllowedOrientation {
  PORTRAIT = 'PORTRAIT',
  ALL = 'ALL',
}
enum GameInfoTags {
  SLOT = 'SLOT',
  LIVE = 'LIVE',
  BLACKJACK = 'BLACKJACK',
}

type GameInfo = {
  id: string
  status: GameInfoStatus
  gameProvider: string
  startType: GameInfoStartType
  isFreeplayAllowed: boolean
  nextOpeningTimeUtc?: string // date type?
  nextClosingTimeUtc?: string // date type?
  openingTimeUtc?: string // date type?
  closingTimeUtc?: string // date type?
  showIsLeavingJurisdiction: boolean
  allowedOrientation: AllowedOrientation
  tags: GameInfoTags[]
  gameCollectionIds: string[]
  gameId: string
  name: string
  width: number
  height: number
  description: string
  themeUrl: string
  thumbnailUrl: string
  helpUrl: string
  trivia: string[]
  seoName: string
  friendlyName: string
}

export {
  GameInfo,
  GameInfoStatus,
  GameInfoStartType,
  AllowedOrientation,
  GameInfoTags,
}
