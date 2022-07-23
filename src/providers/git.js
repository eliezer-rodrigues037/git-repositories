import React, { createContext, useCallback, useState, useEffect } from "react";
import Api from "../services/git";

export const GitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});

export default function Git({ children }) {
    const [gitState, setGitState] = useState({
        userLoaded: false,
        reposLoaded: false,
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
        getRepos: useCallback((userLogin) => getRepos(userLogin), []),
    };

    useEffect(() => {
        getUser("eliezer-rodrigues037");
    }, []);

    const getUser = async (userName) => {
        await Api.get(`/users/${userName}`)
            .then(({ data }) => {
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
            .catch((err) => console.log("getUser request error:", err))
            .finally(() => {
                setGitState((prevGitState) => ({
                    ...prevGitState,
                    userLoaded: true,
                }));
            });
    };

    const getRepos = async (userLogin) => {
        await Api.get(`/users/${userLogin}/repos`)
            .then(({ data }) => {
                setGitState((prevState) => ({
                    ...prevState,
                    repositories: data,
                }));
            })
            .finally(() => {
                setGitState((prevGitState) => ({
                    ...prevGitState,
                    reposLoaded: true,
                }));
            });
    };

    return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}
