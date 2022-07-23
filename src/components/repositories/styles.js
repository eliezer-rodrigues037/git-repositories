import styled from "styled-components";
import { Tab as UnstyledTab, TabList as UnstyledTabList, Tabs as UnstyledTabs, TabPanel as UnstyledTabPanel } from "react-tabs";

const Tabs = styled(UnstyledTabs)`
    width: 80vw;
    margin: 0 10px;

    @media (max-width: 700px) {
        width: auto;
        margin: 10px;
    }
`;

const TabList = styled(UnstyledTabList)`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`;

const Tab = styled(UnstyledTab).attrs({
    selectedClassName: "selected",
    disabledClassName: "disabled",
})`
    flex-grow: 1;
    text-align: center;
    padding: 12px 0;
    list-style: none;
    cursor: pointer;
    color: white;
    background-color: #404040;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: #b3b3b3;

    &.selected {
        font-weight: bold;
        font-size: 1.1em;
        background-color: #606060;
        outline: none;
    }
`;

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: "selected" })`
    display: none;
    padding: 10px 20px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 15px;

    &.selected {
        display: block;
        background-color: #606060;
        color: white;
    }
`;

Tab.tabsRole = "Tab";
Tabs.tabsRole = "Tabs";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, Tabs, TabPanel };

export const LoadinText = styled.div`
    color: white;
    font-weight: bold;
`;
