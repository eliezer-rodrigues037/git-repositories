import React from "react";
import { Container } from "./styles";

export default function Repository({ name, link, description }) {
    return (
        <Container>
            <h2>Nome: {name}</h2>
            <p>Descrição: {description}</p>
            <a href={link} target="_blanc" rel="noreferrer">
                Link do repositório
            </a>
        </Container>
    );
}
