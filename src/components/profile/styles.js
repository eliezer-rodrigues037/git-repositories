import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    min-width: 18vw;
    text-align: center;
    background-color: #404040;
    color: white;
    border-radius: 15px;
    padding: 10px;

    img {
        width: 150px;
        height: 150px;
        align-self: center;
        border-radius: 50%;
        margin: 10px 0;
    }

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    a:hover {
        border-bottom: solid 1px white;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 10px 0;
`;

export const Name = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    font-size: 2em;
`;

export const UserName = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 10px 0;
`;

export const UserStats = styled.div`
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    margin-top: 70px;
`;
