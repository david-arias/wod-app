import "./Description.css";

import Accor from "../Accor/Accor";

function Description({ topInfo }: any) {
    let clansComponents: string = "";
    for (let h = 0; h < topInfo.clanes.length; h++) {
        const el = topInfo.clanes[h];

        clansComponents += `<button>
            <i class="wod ${el.icon}"></i>
            <p>${el.name}</p>
        </button>`;

        console.log(clansComponents);
    }

    return (
        <>
            <div className="Description">
                <div className="topTabs">
                    <ul>
                        <li>
                            <button className="active">
                                <span>Descripción</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <span>clanes</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <span>Puntos</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tabItems">
                    {/* <div className="tab tabDesc">
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: topInfo.longDesc,
                            }}
                        ></div>
                    </div> */}
                    {/* <div className="tab tabClans">
                        <div>
                            {topInfo.clanes.map((clan: any) => (
                                <button>
                                    <i className={`wod ${clan.icon}`}></i>
                                    <p>${clan.name}</p>
                                </button>
                            ))}
                        </div>
                    </div> */}
                    <div className="tab tabDots">
                        <div>
                            {topInfo.dots.map((dot: any) => (
                                <button key={dot.lvl}>
                                    <p>{dot.lvl}</p>
                                </button>
                            ))}
                            {topInfo.dots.map((dot: any) => (
                                <div
                                    className={`top top_${dot.lvl}`}
                                    key={dot.lvl}
                                >
                                    <p>{dot.name}</p>
                                </div>
                            ))}

                            {topInfo.dots.map((dot: any) => (
                                <div
                                    className={`accorsWrap accorsWrap_${dot.lvl}`}
                                >
                                    <Accor type="descr" accorInfo={dot} />
                                    <Accor type="system" accorInfo={dot} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;
