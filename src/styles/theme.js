
export const theme = {
  colors: {
    base_white: 'rgb(255, 255, 255)', // white
    base: '#121212', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    highlight: '#5b8bf7', // Light Blue
    footerListItem: '#ffffff',
    footerListHeading: '#546264',
    footerSubText: '#929fa2',
    footerListItemHover:'#b1b1b1',
    squash: '#f5a623'
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  between(smallKey, largeKey, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
        }px)`
      }
    }
  },

  greaterThan(key) {
    return `@media (min-width: ${SIZES[key].min}px)`
  },

  lessThan(key) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`
  },

  size(key) {
    const size = SIZES[key]

    if (size.min == null) {
      return theme.lessThan(key)
    } else if (size.max == null) {
      return theme.greaterThan(key)
    } else {
      return theme.between(key, key)
    }
  },
}

export const SIZES = {
  xxsmall: { min: 375, max: 424 },
  xsmall: { min: 425, max: 768 },
  small: { min: 769, max: 850 },
  medium: { min: 851, max: 992 },
  large: { min: 993, max: 1024 },
  xlarge: { min: 1025, max: 1200 },
  xxlarge: { min: 1201, max: 1290 },
  xxxlarge: { min: 1291, max: Infinity },
  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },
}

export default theme
