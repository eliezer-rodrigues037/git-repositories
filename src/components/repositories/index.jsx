import React, { useEffect, useContext } from "react";
import { GitHubContext } from "../../providers/git";
import Repository from "../repository-item";
import * as Style from "./styles";

export default function Repositories() {
    const { getStarred, getRepos, gitState } = useContext(GitHubContext);

    useEffect(() => {
        if (gitState.userLoaded && (gitState.repositories.length === 0 || gitState.starred.length === 0)) {
            getRepos(gitState.user.login);
            getStarred(gitState.user.login);
        }
    }, [gitState]);

    return (
        <Style.Tabs>
            <Style.TabList>
                <Style.Tab>Repositórios</Style.Tab>
                <Style.Tab>Favoritos</Style.Tab>
            </Style.TabList>
            <Style.TabPanel>
                {gitState.reposLoaded ? (
                    <>
                        {gitState.repositories.map((item) => (
                            <Repository key={item.id} name={item.name} description={item.description ? item.description : "-"} link={item.html_url} />
                        ))}
                    </>
                ) : (
                    <Style.LoadinText>Carregando</Style.LoadinText>
                )}
            </Style.TabPanel>
            <Style.TabPanel>
                {gitState.starrLoaded ? (
                    <>
                        {gitState.starred.map((item) => (
                            <Repository key={item.id} name={item.name} description={item.description} link={item.html_url} />
                        ))}
                    </>
                ) : (
                    <Style.LoadinText>Carregando</Style.LoadinText>
                )}
            </Style.TabPanel>
        </Style.Tabs>
    );
}
