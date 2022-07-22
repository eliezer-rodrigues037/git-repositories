import { useContext } from "react";
import { GitHubContext } from "../providers/git";

const useGithub = () => {
    const { gitState } = useContext(GitHubContext);

    return { gitState };
};

export default useGithub;
