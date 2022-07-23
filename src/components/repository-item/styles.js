import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: start;
    background-color: #282828;
    border-radius: 15px;
    padding: 10px;
    margin: 10px 0;

    a {
        text-decoration: underline;
        width: fit-content;
    }

    a:hover {
        font-weight: bold;
    }
`;
