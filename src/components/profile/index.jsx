import React from "react";
import useGithub from "../../Hooks/gitHub";
import * as Stl from "./styles";

export default function Profile() {
    const { gitState } = useGithub();

    return (
        <>
            <Stl.Wrapper>
                <Stl.Container>
                    <img src="https://avatars.githubusercontent.com/u/30753246?v=4" alt="Imagem de perfil Eliezer" />
                    <div>
                        <Stl.Name>
                            <h1>{gitState.user.name}</h1>
                        </Stl.Name>
                        <Stl.UserName>
                            <h3>
                                git - &nbsp;
                                <a href="https://github.com/eliezer-rodrigues037" target="_blank" rel="noreferrer">
                                    eliezer-rodrigues037
                                </a>
                            </h3>
                        </Stl.UserName>
                    </div>
                    <Stl.UserStats>
                        <div>
                            <h4>Followers</h4>
                            <span>5</span>
                        </div>
                        <div>
                            <h4>Favoritos</h4>
                            <span>5</span>
                        </div>
                        <div>
                            <h4>Seguindo</h4>
                            <span>5</span>
                        </div>
                    </Stl.UserStats>
                </Stl.Container>
            </Stl.Wrapper>
        </>
    );
}
