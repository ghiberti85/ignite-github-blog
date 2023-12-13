import { api } from '../lib/axios'
import { ReactNode, createContext, useEffect, useState } from "react"

interface PostsProviderProps {
    children: ReactNode
}

interface searchProps {
    searchValue: string
}

interface ContextProps {
    userData: object
    issuesData: object
    fetchSearch: (data: searchProps) => void
    reloadDataFromCache: () => void
}

export const PostsContext = createContext({} as ContextProps)

export function PostsProvider ({ children }: PostsProviderProps) {

    const [userData, setUserData] = useState({})
    const [issuesData, setIssuesData] = useState({})
    const [issuesDataOrigin, setIssuesDataOrigin] = useState({})

    async function fetchUserData() {
        const response = await api.get('/users/ghiberti85')
        setUserData(response.data)
    }

    function fetchRepoIssues() {
        api.get('/search/issues?q=repo:ghiberti85/igniteGithubBlog')
            .then((response) => {
                setIssuesDataOrigin(response.data)
                setIssuesData(response.data)
        })
    }

    function reloadDataFromCache() {
        setIssuesData(issuesDataOrigin)
    }

    function fetchSearch(data: searchProps) {
        api.get(`/search/issues?q=${data.searchValue + '%20'}repo:ghiberti85/igniteGithubBlog`)
            .then((response) => setIssuesData(response.data))
    }

    useEffect(() => {
        fetchUserData()
        fetchRepoIssues()
    }, [])


    return (
        <PostsContext.Provider
            value={{
                userData,
                issuesData,
                fetchSearch,
                reloadDataFromCache
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}