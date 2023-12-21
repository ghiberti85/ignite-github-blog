import { ArrowLeft, CalendarBlank, ChatCircle, GithubLogo } from "phosphor-react";
import { GitHubLink } from "../../../components/GitHubLink";
import { PostHeaderContainer, PostHeaderLinks, PostInfo, PostInfo } from "./styles";
import { Link } from "react-router-dom";

interface Header {
    title: string
    time: string
    comments: number
    user: string
    repositoryUrl: string
}

interface PostHeaderProps {
    header: Header
}

export function PostHeader({ header }: PostHeaderProps) {
    return(
        <PostHeaderContainer>
            <PostHeaderLinks>
                <Link to={'/'}>
                    <ArrowLeft />
                    <span>Voltar</span>
                </Link>
                <GitHubLink content="Ver no GitHub" href={header.repositoryUrl} />
            </PostHeaderLinks>
        </PostHeaderContainer>

        <h2>{header.title}</h2>

        <PostInfo>
            <InfoGroup>
                <GithubLogo size={24} />
                <span>{header.user}</span>
            </InfoGroup>
            <InfoGroup>
                <CalendarBlank size={24} />
                <span>{header.time}</span>
            </InfoGroup>
            <InfoGroup>
                <ChatCircle size={24} />
                <span>{header.comments} comments</span>
            </InfoGroup>
        </PostInfo>
    )
}