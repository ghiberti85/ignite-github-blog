import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"
import { Router } from './Router'


export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
    </ThemeProvider>
  )
}