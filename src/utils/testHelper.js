import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

export const AppProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  )
}

export const imageLink =
  'https://i.scdn.co/image/ab67706f0000000341d54d11fdbac4a1c55dc94b'
