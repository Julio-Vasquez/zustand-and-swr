import Users from './views/Users'
import Login from './views/Login'
import { useAuthStore } from './store/user.store'

const App = () => {
  const { success, token } = useAuthStore(state => state)
  const authenticate = success && token !== ''

  return authenticate ? <Users /> : <Login />
}

export default App
