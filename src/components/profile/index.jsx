import React from "react";
import * as Stl from "./styles";

export default function Profile() {
    return (
        <>
            <Stl.Wrapper>
                <Stl.Container>
                    <img src="https://avatars.githubusercontent.com/u/30753246?v=4" alt="Imagem de perfil Eliezer" />
                    <div>
                        <h1>Eliezer Rodrigues</h1>
                        <Stl.Wrapper>
                            <h3> Username: </h3>
                            <span>eliezer-rodrigues037</span>
                        </Stl.Wrapper>
                    </div>
                    <Stl.Wrapper>
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
                    </Stl.Wrapper>
                </Stl.Container>
            </Stl.Wrapper>
        </>
    );
}
