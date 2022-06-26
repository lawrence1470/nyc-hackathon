import React, {useState} from "react";
import {customHttpProvider} from "./config";
import {Framework} from "@superfluid-finance/sdk-core";
import {Button, Form, FormGroup, FormControl, Spinner} from "react-bootstrap";
import "./UpdateSubscription.css";

//where the Superfluid logic takes place
async function updateSubscription(id, address, shares) {
    const sf = await Framework.create({
        networkName: "goerli",
        provider: customHttpProvider
    });

    const signer = sf.createSigner({
        privateKey:
            "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
        provider: customHttpProvider
    });

    const DAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";

    try {
        const updateSubscriptionOperation = sf.idaV1.updateSubscriptionUnits({
            indexId: 197870606,
            superToken: DAIx,
            subscriber: address,
            units: shares
            // userData?: string
        });

        console.log("Updating your Index...");

        await updateSubscriptionOperation.exec(signer);

        console.log(
            `Congrats - you've just updated an Index!
       Network: Goerli
       Super Token: DAIx
       Index ID: ${id}
       Subscriber: ${address}
       Units: ${shares} units
       
    `
        );
    } catch (error) {
        console.error(error);
    }
}


