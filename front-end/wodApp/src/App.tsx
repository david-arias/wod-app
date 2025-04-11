import "./App.css";

// components
import TopBar from "./components/TopBar/TopBar";
import MainMenu from "./components/MainMenu/MainMenu";

// pages
import Disciplines from "./pages/Disciplines/Disciplines";

function App() {
    return (
        <>
            <TopBar />

            <Disciplines />

            <MainMenu />
        </>
    );
}

export default App;
