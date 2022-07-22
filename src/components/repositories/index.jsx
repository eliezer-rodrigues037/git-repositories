import React from "react";
import Repository from "../repository-item";
import * as Style from "./styles";

export default function Repositories() {
    return (
        <Style.Tabs>
            <Style.TabList>
                <Style.Tab>Repositórios</Style.Tab>
                <Style.Tab>Favoritos</Style.Tab>
            </Style.TabList>
            <Style.TabPanel>
                <Repository
                    name="Repository name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    link="https://github.com/eliezer-rodrigues037/git-repositories.git"
                />
                <Repository
                    name="Repository name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    link="https://github.com/eliezer-rodrigues037/git-repositories.git"
                />
                <Repository
                    name="Repository name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    link="https://github.com/eliezer-rodrigues037/git-repositories.git"
                />
            </Style.TabPanel>
            <Style.TabPanel>
                <Repository
                    name="Stared repository name"
                    description="STAAAARS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    link="https://github.com/eliezer-rodrigues037/git-repositories.git"
                />
                <Repository
                    name="Stared repository name"
                    description="STAAAARS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    link="https://github.com/eliezer-rodrigues037/git-repositories.git"
                />
            </Style.TabPanel>
        </Style.Tabs>
    );
}
