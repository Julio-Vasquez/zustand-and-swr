import { useAuthStore } from '../../store/user.store'
import { LoginForm } from '../../components/forms/LoginForm'
import { LoginFormProps } from '../../components/forms/login.type'

const Login = () => {
  const login = useAuthStore(state => state.login)
  const handleFinish: LoginFormProps['onFinish'] = values => {
    login(values)
  }

  const handleFinishFailed: LoginFormProps['onFinishFailed'] = () => {}

  return (
    <div>
      <h1>Login form</h1>
      <LoginForm onFinish={handleFinish} onFinishFailed={handleFinishFailed} />
    </div>
  )
}

export default Login
