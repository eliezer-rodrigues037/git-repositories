import React from "react";
import * as Stl from "./styles";
import Repositories from "../repositories";

export default function Layout({ children }) {
    return (
        <>
            <header>Header</header>
            <Stl.Container>
                <Stl.ContainerColumn>{children}</Stl.ContainerColumn>
                <Repositories />
            </Stl.Container>
        </>
    );
}
