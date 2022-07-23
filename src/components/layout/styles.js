import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-left: 10px;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        margin: 10px;
    }
`;
