
import { Container, GlobalStyles, SignInArea } from './styles/globalStyles'
import { Router } from './routes/index.routes'
import { AppTitle } from '../lib/components/AppTitle'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <SignInArea>
          <AppTitle />
          <Router/>
        </SignInArea>
      </Container>
    </>
  )
}

export default App
