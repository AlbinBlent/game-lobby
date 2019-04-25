import {
  GameInfo,
  GameInfoStatus,
  GameInfoStartType,
  AllowedOrientation,
  GameInfoTags,
} from '../types/gameInfo'

export const mockGameData: GameInfo[] = [
  {
    id: '1_can_2_can_ogs',
    status: GameInfoStatus.ACTIVE,
    gameProvider: 'OGS',
    startType: GameInfoStartType.IFRAME,
    isFreeplayAllowed: true,
    showIsLeavingJurisdiction: false,
    allowedOrientation: AllowedOrientation.PORTRAIT,
    tags: [GameInfoTags.SLOT],
    gameCollectionIds: ['slots', 'allgames', 'All-Games-A-Z'],
    gameId: '1_can_2_can_ogs',
    name: '1 Can 2 Can',
    width: 1066,
    height: 600,
    description:
      'Jag kan, du kan... Tukan! Ta en promenad på den vilda sidan och besök Tukanen och hans vänners värld.  Detta orörda djungelparadis är fylld med färger, roliga frukter, vänliga djur och en Tukan som kommer driva ditt spel vilt med spänning.',
    themeUrl:
      'https://casino.mrgreen.com/globalassets/games/backgrounds/1can2can_background_theme.jpg',
    thumbnailUrl:
      'https://casino.mrgreen.com/globalassets/mrgreen/thumbnails-new-2x/1can2can.png',
    helpUrl: '',
    trivia: [],
    seoName: '1-can-2-can',
    friendlyName: '1-can-2-can',
  },
  {
    id: '100_ladies_igt',
    status: GameInfoStatus.ACTIVE,
    gameProvider: 'IGT',
    startType: GameInfoStartType.IFRAME,
    isFreeplayAllowed: true,
    showIsLeavingJurisdiction: false,
    allowedOrientation: AllowedOrientation.ALL,
    tags: [GameInfoTags.SLOT, GameInfoTags.LIVE, GameInfoTags.BLACKJACK],
    gameCollectionIds: ['allgames', 'All-Games-A-Z'],
    gameId: '100_ladies_igt',
    name: '100 Ladies',
    width: 1024,
    height: 768,
    description:
      'Massor av söta små nyckelpigor har hittat in till Mr Greens nätcasino. Har du tur så kanske en nyckelpiga landar just på dig. Slut då dina ögon och önska dig precis vad du vill!',
    themeUrl:
      'https://casino.mrgreen.com/globalassets/games/backgrounds/100ladies_background_theme.jpg',
    thumbnailUrl:
      'https://casino.mrgreen.com/globalassets/mrgreen/thumbnails-new-2x/100ladies2x.png',
    helpUrl: '',
    trivia: [],
    seoName: '100-ladies',
    friendlyName: '100-ladies',
  },
]
export const game1 = {
  id: '1_can_2_can_ogs',
  status: GameInfoStatus.ACTIVE,
  gameProvider: 'OGS',
  startType: GameInfoStartType.IFRAME,
  isFreeplayAllowed: true,
  showIsLeavingJurisdiction: false,
  allowedOrientation: AllowedOrientation.PORTRAIT,
  tags: [GameInfoTags.SLOT],
  gameCollectionIds: ['slots', 'allgames'],
  gameId: '1_can_2_can_ogs',
  name: '1 Can 2 Can',
  width: 1066,
  height: 600,
  description:
    'Jag kan, du kan... Tukan! Ta en promenad på den vilda sidan och besök Tukanen och hans vänners värld.  Detta orörda djungelparadis är fylld med färger, roliga frukter, vänliga djur och en Tukan som kommer driva ditt spel vilt med spänning.',
  themeUrl:
    'https://casino.mrgreen.com/globalassets/games/backgrounds/1can2can_background_theme.jpg',
  thumbnailUrl:
    'https://casino.mrgreen.com/globalassets/mrgreen/thumbnails-new-2x/1can2can.png',
  helpUrl: '',
  trivia: [],
  seoName: '1-can-2-can',
  friendlyName: '1-can-2-can',
}
export const game2 = {
  id: '100_ladies_igt',
  status: GameInfoStatus.ACTIVE,
  gameProvider: 'IGT',
  startType: GameInfoStartType.IFRAME,
  isFreeplayAllowed: true,
  showIsLeavingJurisdiction: false,
  allowedOrientation: AllowedOrientation.ALL,
  tags: [GameInfoTags.SLOT, GameInfoTags.LIVE, GameInfoTags.BLACKJACK],
  gameCollectionIds: ['slots', 'allgames', 'All-Games-A-Z'],
  gameId: '100_ladies_igt',
  name: '100 Ladies',
  width: 1024,
  height: 768,
  description:
    'Massor av söta små nyckelpigor har hittat in till Mr Greens nätcasino. Har du tur så kanske en nyckelpiga landar just på dig. Slut då dina ögon och önska dig precis vad du vill!',
  themeUrl:
    'https://casino.mrgreen.com/globalassets/games/backgrounds/100ladies_background_theme.jpg',
  thumbnailUrl:
    'https://casino.mrgreen.com/globalassets/mrgreen/thumbnails-new-2x/100ladies2x.png',
  helpUrl: '',
  trivia: [],
  seoName: '100-ladies',
  friendlyName: '100-ladies',
}
export const game3 = {
  id: '100_ladies_igt',
  status: GameInfoStatus.ACTIVE,
  gameProvider: 'IGT',
  startType: GameInfoStartType.IFRAME,
  isFreeplayAllowed: true,
  showIsLeavingJurisdiction: false,
  allowedOrientation: AllowedOrientation.ALL,
  tags: [GameInfoTags.SLOT, GameInfoTags.LIVE, GameInfoTags.BLACKJACK],
  gameCollectionIds: [],
  gameId: '100_ladies_igt',
  name: '100 Ladies',
  width: 1024,
  height: 768,
  description:
    'Massor av söta små nyckelpigor har hittat in till Mr Greens nätcasino. Har du tur så kanske en nyckelpiga landar just på dig. Slut då dina ögon och önska dig precis vad du vill!',
  themeUrl:
    'https://casino.mrgreen.com/globalassets/games/backgrounds/100ladies_background_theme.jpg',
  thumbnailUrl:
    'https://casino.mrgreen.com/globalassets/mrgreen/thumbnails-new-2x/100ladies2x.png',
  helpUrl: '',
  trivia: [],
  seoName: '100-ladies',
  friendlyName: 'annat',
}
