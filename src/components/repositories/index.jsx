import React from "react";
import * as Style from "./styles";

export default function Repositories() {
    return (
        <Style.Tabs>
            <Style.TabList>
                <Style.Tab>Repositórios</Style.Tab>
                <Style.Tab>Favoritos</Style.Tab>
            </Style.TabList>
            <Style.TabPanel>panel Repositórios</Style.TabPanel>
            <Style.TabPanel>panel Favoritos</Style.TabPanel>
        </Style.Tabs>
    );
}
