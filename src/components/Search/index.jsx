import React, { useContext, useEffect, useState } from "react";
import { GitHubContext } from "../../providers/git";
import * as Style from "./styles";
import { BsSearch } from "react-icons/bs";

export default function Search() {
    const { getUser, gitState } = useContext(GitHubContext);
    const [userInput, setuserInput] = useState("");
    const submitUser = () => {
        getUser(userInput.replace(/\s+/g, ""));
    };

    const handleChange = (e) => {
        setuserInput(e.target.value);
    };

    return (
        <>
            <Style.Wrapper>
                {gitState.notFound ? "Usuário não encontrado." : ""}
                <Style.Container>
                    <input type="text" placeholder="Git user name" value={userInput} onChange={handleChange} />
                    <button type="button" onClick={submitUser}>
                        <BsSearch />
                    </button>
                </Style.Container>
            </Style.Wrapper>
        </>
    );
}
