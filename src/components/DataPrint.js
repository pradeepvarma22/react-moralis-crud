import React, { useEffect } from 'react';
import Moralis from 'moralis';


export default function DataPrint() {

    const getData = async () => {
        Moralis.initialize("zthhS1Fr2UbdNWBhw9Tbzvup82bxo1TaPdxvbqRR");
        Moralis.serverURL = "https://piwyn2lpbski.usemoralis.com:2053/server";
        const NewConnect = Moralis.Object.extend("Test");
        const allData = new Moralis.Query("Test");
        const query = new Moralis.Query(NewConnect);

        const testDataId = await allData.find({ useMasterKey: true });
        let length = testDataId.length;
        // console.log(length);
        // for (let i = 0; i < length; i++) {
        //     console.log(testDataId[i].attributes);
        // }

    }

    const setData = async () => {
        Moralis.initialize("zthhS1Fr2UbdNWBhw9Tbzvup82bxo1TaPdxvbqRR");
        Moralis.serverURL = "https://piwyn2lpbski.usemoralis.com:2053/server";
        const NewConnect = Moralis.Object.extend("Test");
        const query = new Moralis.Query(NewConnect);

        const chekMe = await query.get("w38PFM37FrQ7AXPnVN21ErZ0");

        console.log(chekMe);
        chekMe.set("upVote", 222);
        chekMe.set("downVote", 2222);
        await chekMe.save();
        console.log('ssaved');







    }

    useEffect(() => {
        getData();
        setData();
    }, []);




    return (
        <div>
            <br />
            <br />
            <br />
            <br />

            Hello Brave
            { }

        </div>
    );


}