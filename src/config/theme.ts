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
    background: appTheme.background,
    border: appTheme.grayAAAAAA,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
}
