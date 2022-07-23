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
        starrLoaded: false,
        notFound: false,
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
        getStarred: useCallback((userLogin) => getStarred(userLogin), []),
    };

    useEffect(() => {
        getUser("eliezer-rodrigues037");
    }, []);

    const getUser = async (userName) => {
        try {
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
                .then(() => {
                    setGitState((prevGitState) => ({
                        ...prevGitState,
                        userLoaded: true,
                        notFound: false,
                    }));
                })
                .catch(({ response }) => {
                    if (response.status === 404) {
                        setGitState((prevGitState) => ({
                            ...prevGitState,
                            notFound: true,
                        }));
                    }
                });
        } catch (error) {
            console.log(error);
        }
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

    const getStarred = async (userLogin) => {
        await Api.get(`https://api.github.com/users/${userLogin}/starred`)
            .then(({ data }) => {
                setGitState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
            })
            .finally(() => {
                setGitState((prevState) => ({
                    ...prevState,
                    starrLoaded: true,
                }));
            });
    };

    return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}
