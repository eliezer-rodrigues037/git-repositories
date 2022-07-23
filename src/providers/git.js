import React, { createContext, useCallback, useState, useEffect } from "react";
import Api from "../services/git";

export const GitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});

export default function Git({ children }) {
    const [gitState, setGitState] = useState({
        user: {
            login: "",
            name: "",
            avatar_url: "",
            html_url: "",
            followers: 0,
            following: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        gitState,
        getUser: useCallback((userName) => getUser(userName), []),
    };

    useEffect(() => {
        getUser("eliezer-rodrigues037");
    }, []);

    const getUser = (userName) => {
        Api.get(`/users/${userName}`)
            .then(({ data }) => {
                console.dir(data);
                setGitState((prevGitState) => ({
                    ...prevGitState,
                    user: {
                        login: data.login,
                        name: data.name,
                        avatar_url: data.avatar_url,
                        html_url: data.html_url,
                        followers: data.followers,
                        following: data.following,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .catch((err) => console.log("here?", err));
    };

    return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}
