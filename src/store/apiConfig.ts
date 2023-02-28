
const BASE_URL: string = "https://api.spaceflightnewsapi.net/v3/articles"

export const ALL_POSTS = BASE_URL + "?_limit=50"

export const searchPostById = (id:string | number) => BASE_URL + `/${id}`

type apiType = {
    BASE_URL: string,
    ALL_POSTS: string,
    searchPostById:(id: string | number) => string
}
export default apiType