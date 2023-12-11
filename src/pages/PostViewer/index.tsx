import { LinkSimple } from "phosphor-react";
import ReactMarkdown from "react-markdown";

export function PostViewer () {
    return (
        <ViewPostContainer>
            <header>
                <div>
                    <NavLink>
                        <Careleft size={16} weight="bold" />
                        Voltar
                    </NavLink>

                    <a>
                        <LinkSimple size={16} />
                        ver no github
                    </a>
                </div>
                <h1>Javascript data types and data structures</h1>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <PostContentView>
                <ReactMarkdown></ReactMarkdown>
            </PostContentView>
        </ViewPostContainer>
    )
}