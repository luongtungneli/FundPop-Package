import React, { useEffect, useState } from "react";
import AppBlocks from "./AppBlocks";
import { getCampagin } from "../controller";

function FundPop(props: { productID: string }) {
    const splittedID = props.productID.split("/");
    const productId = splittedID[splittedID.length - 1];
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
    }, [props.productID]);

    return data ? <AppBlocks data={data}/> : null;

}

export default FundPop;
