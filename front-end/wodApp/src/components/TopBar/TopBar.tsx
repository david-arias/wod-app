import "./TopBar.css";

function TopBar() {
    return (
        <>
            <div className="topBar">
                <div className="itms">
                    <button>
                        <i className="wod wod-icn_main"></i>
                    </button>
                </div>
                <div className="itms">
                    <button className="midLogo">
                        <i className="wod wod-icn_main"></i>
                        <p>LoremApp</p>
                    </button>
                </div>
                <div className="itms">
                    <button>
                        <i className="wod wod-icn_main"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopBar;
