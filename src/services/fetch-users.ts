export interface User {
    id: string
    name: string
    email: string
    image?: string
    location: string
  }

  interface ApiResponse {
    results: Array<{
        login: { uuid: string }
        name: { title: string; first: string; last: string }
        email: string
        picture: { medium: string }
        location: {
            street: { name: string; number: string }
            city: string
            country: string
        }
    }>
}
  

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data: ApiResponse = await response.json()
    return data.results.map((user) => ({
      id: user.login.uuid,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      image: user.picture.medium,
      location: `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`
    }))
  }