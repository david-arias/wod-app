import "./TopName.css";

function TopName({ topInfo }: any) {
    return (
        <>
            <div className="TopName">
                <div className="icon">
                    <i className={`wod ${topInfo.icon}`}></i>
                </div>
                <div className="info">
                    <h2>{topInfo.name}</h2>
                    <p>{topInfo.smallDesc}</p>
                </div>
            </div>
        </>
    );
}

export default TopName;
