export type State = {
  token: string
  username: string
  error: boolean
  isLoading: boolean
  success: boolean
  login: ({ email, password }: UserLogin) => Promise<void>
  logout: () => void
}
