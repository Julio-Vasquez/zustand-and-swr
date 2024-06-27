import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { State } from './user.type'
import { userService } from '../services/user.service'

const initialState: Omit<State, 'login' | 'logout'> = {
  token: '',
  username: '',
  error: false,
  isLoading: false,
  success: true,
}

const middlewares = (cb: StateCreator<State>) =>
  devtools(persist(cb, { name: 'user-persist' }))

export const useAuthStore = create<State>()(
  middlewares(set => ({
    ...initialState,
    login: async ({ email, password }) => {
      set({ isLoading: true })
      try {
        const res = await userService.loginService<Token>({ email, password })
        const token: string = res.data.token
        set({ isLoading: false, token, error: false, username: email })
      } catch (err) {
        set({ isLoading: false, token: '', error: true, username: '' })
      }
    },
    logout: () => set({ ...initialState }),
  }))
)
