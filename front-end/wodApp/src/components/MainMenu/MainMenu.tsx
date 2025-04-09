import "./MainMenu.css";

function MainMenu() {
    return (
        <>
            <div className="mainMenu">
                <ul>
                    <li>
                        <button className="active">
                            <i className="wod wod-icn_main"></i>
                            <span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="wod wod-icn_main"></i>
                            <span></span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="wod wod-icn_main"></i>
                            <span></span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MainMenu;
