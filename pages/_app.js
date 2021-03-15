import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary: #33B5E5;
    --secondary: #d7f852;
    --dark: #237ea0;
    --contrastText: #FFFFFF;
    --yellow: #ffea00;
    --gray: #E1E1E1;
    --black: #3B3B3B;
    --wrong: #d50000;
    --success: #469a10;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-color: var(--primary);
    font-family: 'Roboto', sans-serif;
  }
`

const { theme } = db

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}
