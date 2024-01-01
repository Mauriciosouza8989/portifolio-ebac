import { GlobalStyle } from './globalStyle'
import { Sidebar } from './containers/Sidebar'
import { About } from './containers/About'
import { Projects } from './containers/Projects'
import { Container } from './globalStyle'
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
