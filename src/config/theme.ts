import { dimensions, height, width } from 'src/utils/dimensions'

/**
 * Theme For Styled Components
 *
 */
export const appTheme = {
  background: '#ededfc',
  orange: '#E4FF1A',
  white: '#FFFFFF',
  grayAAAAAA: '#AAAAAA',
  gray434343: '#434343',
  blue1859FF: '#1859FF',
  black: "#000",
  primary: '#FFF',
  secondary: '#CCC',
  highlight: '#FF2353',
  // Add your own colors here
  BLUE: '#2D60FF',
  GRAY: '#B9B9B9',
  PURPLE: '#4C49ED',
  DEEP_BLUE: '#0A06F4',
  LIGHT_BLUE: '#8dbff5',
  // Datascape Colors
  DATASCAPE_PLUS3: '#180833',
  DATASCAPE_PLUS2: '#3C1480',
  DATASCAPE_PLUS1: '#601FCC',
  DATASCAPE_MINUS1: '#9352FF',
  DATASCAPE_MINUS2: '#BC93FF',
  DATASCAPE_MINUS3: '#E4D4FF',
  // Blue Colors
  ELECTRIC_BLUE_PLUS3: '#000933',
  ELECTRIC_BLUE_PLUS2: '#00167F',
  ELECTRIC_BLUE_PLUS1: '#0022CB',
  ELECTRIC_BLUE_MINUS1: '#3366F3',
  ELECTRIC_BLUE_MINUS2: '#80A0FB',
  ELECTRIC_BLUE_MINUS3: '#CCD9FC',

  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
}

/**
 * Theme For Expo Navigation Header
 *
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.DATASCAPE_MINUS3,
    border: appTheme.grayAAAAAA,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
