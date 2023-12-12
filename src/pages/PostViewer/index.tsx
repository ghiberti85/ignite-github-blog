import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { PostContentView, ViewPostContainer } from "./styles";

export function PostViewer () {
    return (
        <ViewPostContainer>
            <header>
                <div>
                    <NavLink 
                        to="/"
                        title="voltar"
                        // onClick ={}
                    >
                        <CaretLeft size={16} weight="bold" />
                        Voltar
                    </NavLink>

                    <a /* href ={} */ target="_blank" rel="noreferrer noopener" >
                        ver no github
                        <ArrowSquareOut size={16} weight="bold" />
                    </a>
                </div>
                <h1>Javascript data types and data structures</h1>
                <div>
                    <span><GithubLogo size={18} weight="fill" /><a href="#">@ghiberti85</a></span>
                    <span><CalendarBlank size={18} weight="fill" />Há 1 dia</span>
                    <span><ChatCircle size={18} weight="fill" />5 comentários</span>
                </div>
            </header>
            <PostContentView>
                <ReactMarkdown>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a porro, perspiciatis tempore animi voluptatum, esse facilis dolores quo quibusdam soluta repudiandae, qui explicabo consequuntur iste? At nam suscipit minima!
                </ReactMarkdown>
            </PostContentView>
        </ViewPostContainer>
    )
}