import React, { useEffect, useState } from "react";
import AppBlocks from "./AppBlocks";
import { getCampagin } from "../controller";

function Fundpop(props: { productId: string }) {
    const splittedId = props.productId.split("/");
    const productId = splittedId[splittedId.length - 1];
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            setData(null);
            await getCampagin(productId)
                .then((data) => {
                    setData(data);
                })
                .catch((err) => console.log("Fail to get campaign: ", err));
        })();
    }, [props.productId]);

    return data ? <AppBlocks data={data} /> : null;
}

export default Fundpop;
