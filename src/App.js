import Layout from "./components/layout";
import Profile from "./components/profile";
import Git from "./providers/git";

function App() {
    return (
        <>
            <main>
                <Git>
                    <Layout>
                        <Profile />
                    </Layout>
                </Git>
            </main>
        </>
    );
}

export default App;
