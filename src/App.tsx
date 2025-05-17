
import { Container, GlobalStyles, SignInArea } from './styles/globalStyles'
import { Router } from './routes/index.routes'
import { AppTitle } from '../lib/components/AppTitle'
import { AvocadoIcon } from '../lib/components/Icons';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <SignInArea>
          <AppTitle title="Avocado" subtitle='Eat Avocado Every Day' icon={<AvocadoIcon/>}/>
          <Router/>
        </SignInArea>
      </Container>
    </>
  )
}

export default App
