import { Link } from "react-router-dom"
import { dateFormatter } from "../../../../../utils/formatter"
import { PostHeader, PostItemContainer } from "./styles"
import ReactMarkdown from "react-markdown"


interface PostIssue {
    id: number
    title: string
    createdAt: string
    body: string
}

interface PostProps {
    post: PostIssue
}

export function PostItem({ post }: PostProps) {
    return(
        <Link to={`posts/${post.id}`}>
            <PostItemContainer>
                <PostHeader>
                    <h3>{post.title}</h3>
                    <time>{dateFormatter(post.createdAt)}</time>
                </PostHeader>
                <div>
                    <ReactMarkdown>{post.body}</ReactMarkdown>
                </div>
            </PostItemContainer>
        </Link>
    )
}