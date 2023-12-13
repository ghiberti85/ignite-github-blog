import { formatDistanceToNow } from "date-fns";
import { PostContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ptBR } from "date-fns/locale";

interface PostProps {
    postContent: {
        title: string,
        body: string,
        number: string,
        created_at: string
    }
}

export function Post({ postContent }: PostProps) {

    const { title, body, number, created_at } = postContent

    const formatedDate = formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true
    })

    const navigate = useNavigate()

    function handleGoTopost() {
        navigate(`/${number}`)
    }

    return (
        <PostContainer onClick={handleGoTopost}>
            <span>{formatedDate}</span>
            <h1>{title}</h1>
            <p>{body}</p>
        </PostContainer>
    )
}