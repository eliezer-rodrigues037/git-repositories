import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 18vw;
    height: 35px;
    margin: 10px 10px;
    background-color: #404040;
    border-radius: 15px;
    color: white;
    padding: 7px;

    input {
        background-color: white;
        border-radius: 15px;
        padding: 5px;
        color: black;
        width: 100%;
        margin-right: 10px;
    }

    button {
        font-weight: bold;
        margin-right: 10px;
    }

    button:active {
        transform: scale(0.95);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: red;
    justify-content: end;
`;
