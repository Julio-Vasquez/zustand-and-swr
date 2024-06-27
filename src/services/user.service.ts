import axios from 'axios'

import { URLS } from '../constants'

const loginService = <T>({ email, password }: UserLogin) => {
  return axios.post<T>(URLS.login, { email, password })
}

const getAllUsersService = async <T>(token: string): Promise<T> => {
  return axios
    .get<T>(URLS.allUsers, { headers: { Authorization: `Bearer ${token}` } })
    .then(users => users.data)
}

export const userService = { loginService, getAllUsersService }
