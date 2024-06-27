export type UsersResponse = {
  page: number
  per_page: number
  support: {
    url: string
    text: string
  }
  total: string
  total_pages: number
  data: Users[]
}
