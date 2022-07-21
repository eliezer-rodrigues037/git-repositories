import React from "react";
import * as Stl from "./styles";

export default function Layout({ children }) {
    return (
        <>
            <header>Header</header>
            <Stl.Container>
                <Stl.ContainerColumn>{children}</Stl.ContainerColumn>
                <Stl.repoWrapper>
                    <div>Repositories</div>
                </Stl.repoWrapper>
            </Stl.Container>
        </>
    );
}
