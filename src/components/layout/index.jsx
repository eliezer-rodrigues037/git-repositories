import React from "react";
import * as Stl from "./styles";
import Repositories from "../repositories";
import Search from "../Search";

export default function Layout({ children }) {
    return (
        <>
            <Search />
            <Stl.Container>
                <Stl.ContainerColumn>{children}</Stl.ContainerColumn>
                <Repositories />
            </Stl.Container>
        </>
    );
}
