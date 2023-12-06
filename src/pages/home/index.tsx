import { Buildings, GithubLogo, LinkSimple, Users } from "phosphor-react";

export function Home() {
    return (
        <HomeContainer>
            <header>
                <img src="https://github.com/ghiberti85.png" alt="Profile Picture" />
                <BioContainer>
                    <h1>Fernando Ghiberti</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio alias provident deserunt pariatur! Nobis mollitia ipsa commodi sunt aut amet ut nihil expedita, consectetur adipisci iusto, deleniti, corrupti incidunt?</p>
                    <a href="https://github.com/ghiberti85" target="_blank" rel="noreferrer noopener">
                        <LinkSimple size={16} />
                        GITHUB
                    </a>

                    <InfoContainer>
                        <span><GithubLogo size={18} weight="fill"/>@ghiberti85</span>
                        <span><Buildings size={18} weight="fill"/>Ghiberti Company</span>
                        <span><Users size={18} weight="fill"/>85 followers</span>
                    </InfoContainer>
                </BioContainer>
            </header>

            <SearchForm>
                <div>
                    <span>Publicações</span>
                    <span>19 publicações</span>
                </div>

                <input
                    type="type"
                    placeholder="Buscar Conteúdo"
                />
            </SearchForm>

            <PostContainer>
                <Post />
            </PostContainer>
        </HomeContainer>
    )
}