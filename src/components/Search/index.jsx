import React, { useContext, useState } from "react";
import { GitHubContext } from "../../providers/git";
import * as Style from "./styles";

export default function Search() {
    const { getUser } = useContext(GitHubContext);
    const [userInput, setuserInput] = useState("");
    let found = true;
    let Texto = "User not Found";
    const submitUser = () => {
        try {
            getUser(userInput);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setuserInput(e.target.value);
    };

    return (
        <>
            <Style.Wrapper>
                <Style.Container>
                    <input type="text" placeholder="Git user name" value={userInput} onChange={handleChange} />
                    <button type="button" onClick={submitUser}>
                        Buscar
                    </button>
                </Style.Container>
                {!found && Texto}
            </Style.Wrapper>
        </>
    );
}
