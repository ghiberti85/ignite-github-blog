import { BrowserRouter } from "react-router-dom"
import { Router } from './router'
import { GlobalStyle } from "./styles/global"

export default function App() {

  return (
    <BrowserRouter>
        <Router />
        <GlobalStyle />
    </BrowserRouter>
  )
}