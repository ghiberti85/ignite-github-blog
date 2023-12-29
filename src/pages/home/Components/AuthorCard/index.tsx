import axios from "axios"
import { Buildings, GithubLogo, User } from "phosphor-react"
import { useEffect, useState } from "react"
import { AuthorCardContainer, AuthorCardHeader, AuthorCardInfo, InfoGroup } from "./styles"
import { GitHubLink } from "../../../../components/GitHubLink"


interface Author {
    name: string
    avatar_url: string
    bio: string
    company: string
    followers: number
    login: string
    html_url: string
}

export function AuthorCard() {
    const [ author, setAuthor ] = useState( {} as Author )

    async function fetchProfile() {
        const response = await axios.get('https://api.github.com/users/ghiberti85')

        setAuthor(response.data)
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <AuthorCardContainer>
            <img src={author.avatar_url} alt="" />
            <div>
                <AuthorCardHeader>
                    <h1>{author.name}</h1>
                    <GitHubLink href={author.html_url} content="GitHub" />
                </AuthorCardHeader>
                <p>{author.bio}</p>
                <AuthorCardInfo>
                    <InfoGroup>
                        <GithubLogo size={24} />
                        <span>{author.login}</span>
                    </InfoGroup>
                    <InfoGroup>
                        <Buildings size={24} />
                        <span>{author.company}</span>
                    </InfoGroup>
                    <InfoGroup>
                        <User size={24} />
                        <span>{author.followers}</span>
                    </InfoGroup>
                </AuthorCardInfo>
            </div>
        </AuthorCardContainer>
    )
}