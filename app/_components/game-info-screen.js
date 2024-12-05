"use client"

import { useState } from "react";
import { updateRating } from "../_services/game-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function GameInfoScreen({ gameData, closeGameInfo, isUserList, reloadGameList }) {

    const { user } = useUserAuth();

    const [personalUserRating, setPersonalUserRating] = useState(gameData.personalRating ? gameData.personalRating : 0);

    const date = new Date(gameData.original_release_date);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleCloseForm = () => {
        if(isUserList) {
            reloadGameList();
        };

        closeGameInfo();
    };

    const handleRatingChange = async (event) => {
        setPersonalUserRating(event);
        await updateRating(user.uid, gameData.docid, event);
    };

    return (
        <section className="bg-black/80 fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center">
            <button className="text-white p-2 text-lg rounded-full bg-indigo-600 hover:bg-indigo-900 w-1/3 mb-5 font-mono" onClick={handleCloseForm}>Close</button>
            {isUserList && (
                <section className="bg-slate-900 w-1/2 flex flex-col items-center p-2">
                    <label className="font-mono">Your Rating</label>
                    <input value={personalUserRating} onChange={(event) => handleRatingChange(event.target.value)} type="text" className="bg-slate-800 w-40 rounded-full outline-none p-2 text-sm font-mono text-center"></input>
                </section>
            )}
            <section className="flex flex-col items-center bg-slate-900 w-1/2 h-4/5 rounded-lg">
                <section className="bg-slate-800 p-5 mt-5 rounded-lg">
                    <img className="w-80 h-80 rounded-lg block mx-auto" src={gameData.image.original_url}></img>
                </section>
                <section className="text-white my-10 mb-5 font-mono text-center overflow-y-auto">
                    <p>Released: {formattedDate}</p>
                    <p className="text-2xl font-bold my-5">{gameData.name}</p>
                    <p className="mx-5 text-lg">{gameData.deck}</p>
                </section>
            </section>
        </section>
    );
};