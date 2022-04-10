import React from 'react';
import Moralis from 'moralis';


export default function FormData() {
    Moralis.initialize("zthhS1Fr2UbdNWBhw9Tbzvup82bxo1TaPdxvbqRR");
    Moralis.serverURL = "https://piwyn2lpbski.usemoralis.com:2053/server";
    const NewConnect = Moralis.Object.extend("Test");
    const connect = new NewConnect();

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (let i = 0; i < 9; i++) {
            const key = event.target[i].id;
            const value = event.target[i].value;
            connect.set(key, value);
        }
        connect.set("upVote", 0);
        connect.set("downVote", 0);
        await connect.save();
    }




    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    Name
                </label>
                <input type="text" name="name" id="name" required />
            </p>
            <p>
                <label>
                    Vision Statement
                </label>
                <input type="text" name="visionstatement" id="visionstatement" required />
            </p>
            <p>
                <label>
                    Vision Description
                </label>
                <input type="text" name="visiondesc" id="visiondesc" required />
            </p>
            <p>
                <label>
                    Scope
                </label>
                <input type="text" name="scope" id="scope" required />
            </p>
            <p>
                <label>
                    Assumptions Log
                </label>
                <input type="text" name="assumptionlog" id="assumptionlog" required />
            </p>
            <p>
                <label>
                    Estimated Time Line
                </label>
                <input type="date" name="estimatedtimeline" id="estimatedtimeline" required />
            </p>
            <p>
                <label>
                    Budget Request
                </label>
                <input type="text" name="budgetrequest" id="budgetrequest" required />
            </p>
            <p>
                <label>
                    Required Resources
                </label>
                <input type="text" name="requiredresorces" id="requiredresorces" required />
            </p>
            <p>
                <label for="communicationFre">Communication Frequency</label>

                <select id="communicationFre">
                    <option value="Daily" >Daily</option>
                    <option value="Weekly" >Weekly</option>
                    <option value="Bi-Weekly" >Bi-Weekly</option>
                    <option value="Monthly" >Monthly</option>
                </select>
            </p>
            <p>
                <input type="submit" />
            </p>


        </form>

    );


}