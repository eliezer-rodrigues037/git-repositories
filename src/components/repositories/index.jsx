import React from "react";
import * as Style from "./styles";

export default function Repositories() {
    return (
        <Style.TabsContainer selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <Style.TabListContainer>
                <Style.TabContainer>Repositórios</Style.TabContainer>
                <Style.TabContainer>Favoritos</Style.TabContainer>
            </Style.TabListContainer>
        </Style.TabsContainer>
    );
}
