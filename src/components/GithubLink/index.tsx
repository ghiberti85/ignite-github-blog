import { ArrowSquareUpRight } from "phosphor-react";
import { GithubLinkContainer } from "./styles";

interface GitHubLinkProps {
    content: string
    href: string
}

export function GitHubLink({ content, href }: GitHubLinkProps) {
    return (
        <GithubLinkContainer href={href} target="_blank">
            <span>{content}</span>
            <ArrowSquareUpRight size={12} />
        </GithubLinkContainer>
    )
}