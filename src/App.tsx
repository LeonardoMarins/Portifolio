import { ThemeProvider } from 'styled-components'

import Sidebar from '../src/Containers/SideBar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './Containers/About'
import Projetos from './Containers/Projects'
import temaLight from './themes/light'

import temaDark from './themes/dark'
import {  useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setTemaDark] = useState(false)

  const trocaTema = () => {
    setTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
