import Layout from './Layout'
import { useInitialization } from './useInitialization'

const App = () => {
  const { WithInitialization } = useInitialization()
  return (
    <WithInitialization>
      <Layout />
    </WithInitialization>
  )
}

export default App
