import { useEffect, useState } from "react";
import "./Disciplines.css";

import TopName from "../../components/disciplinesAtoms/TopName/TopName";
import Loader from "../../components/Loader/Loader";

// let info: any;

// const getDiscData = async (url: string) => {
//     try {
//         const resp = await fetch(url);
//         const data = await resp.json();
//         return data[0];
//     } catch (error) {
//         return error;
//     }
// };
// getDiscData("/src/assets/jsons/discipline_example.json")
//     .then((data: any) => {
//         info = data;
//     })
//     .catch((err: any) => {
//         console.log(err);
//     });

function Disciplines() {
    const [isLoading, setIsLoading] = useState(true);
    const [disciplineData, setDisciplineData] = useState();

    useEffect(() => {
        const getDiscData = async (url: string) => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();

                setDisciplineData(data[0]);
                setIsLoading(false);
            } catch (error) {
                return error;
            }
        };
        getDiscData("/src/assets/jsons/discipline_example.json");
    }, []);

    if (isLoading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <div className="PageWrap">
                <TopName topInfo={disciplineData} />
            </div>
        </>
    );
}

export default Disciplines;
