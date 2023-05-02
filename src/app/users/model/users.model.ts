export interface User {
  id: string
  name: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

export interface UsersResponse {
  items: User[],
  totalCount: number
}
