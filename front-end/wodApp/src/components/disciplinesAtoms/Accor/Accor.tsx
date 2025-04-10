import "./Accor.css";

function Accor({ type, accorInfo }: any) {
    console.log(accorInfo);

    return (
        <>
            <div className="Accor">
                <div className="accorBox">
                    <div className="accorHead">
                        {type == "descr" && <p>Description</p>}
                        {type == "system" && <p>System</p>}
                    </div>
                    <div className="accorBody">
                        {type == "descr" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: accorInfo.desc,
                                }}
                            ></p>
                        )}
                        {type == "system" && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: accorInfo.system,
                                }}
                            ></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accor;
