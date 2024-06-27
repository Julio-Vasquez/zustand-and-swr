import useSWR, { mutate } from 'swr'

import { useAuthStore } from '../store/user.store'
import { userService } from '../services/user.service'

type DataResponse<T> = {
  data: T
  isLoading: boolean
  error: any
  refetch: (token?: string) => void
}

const fetcher = <T,>(token: string) => userService.getAllUsersService<T>(token)

export const useData = <T,>(): DataResponse<T> => {
  const token = useAuthStore(state => state.token)
  const logout = useAuthStore(state => state.logout)
  if (!token) {
    logout()
  }

  const { data, isLoading, error } = useSWR<T>(token, fetcher)
  const refetch = (newToken?: string) => mutate(newToken ?? token)
  return { data: data as T, isLoading, error, refetch }
}
