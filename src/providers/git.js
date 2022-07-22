import React, { createContext, useState } from "react";

export const GitHubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});

export default function Git({ children }) {
    const [gitState, setGitState] = useState({
        user: {
            login: undefined,
            name: "Eliezer Rodriges",
            avatar_url: undefined,
            url: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        gitState,
    };

    return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
}
