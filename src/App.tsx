import { BrowserRouter } from "react-router-dom"
import { Router } from './Router'
import { GlobalStyle } from "./styles/global"

export default function App() {

  return (
    <BrowserRouter>
        <Router />
        <GlobalStyle />
    </BrowserRouter>
  )
}