"use client"

import { useState } from "react";
import { addItem, dbDeleteItem } from "../_services/game-list-service";
import { useUserAuth } from "../_utils/auth-context";
import GameInfoScreen from "./game-info-screen";

export default function GameCard({ gameData, isUserList, reloadGameList }) {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const [showGameInfo, setShowGameInfo] = useState(false);

    const { user } = useUserAuth();
    const handleAddGameToList = async () => {
        await addItem(user.uid, gameData);
        setIsButtonDisabled(true);

        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    const handleDeleteGame = async () => {
        await dbDeleteItem(user.uid, gameData.docid);
        if (reloadGameList) reloadGameList();
    };


    return (
        <section className="m-5 relative">
            {
                showGameInfo && <GameInfoScreen reloadGameList={() => reloadGameList()}  isUserList={isUserList} gameData={gameData} closeGameInfo={() => setShowGameInfo(false)} />
            }

            {showNotification && (
                <section className="absolute top-0 left-0 bg-green-400/60 text-white p-3 rounded-b-lg z-40">
                    <p className="font-mono">Game added to your list!</p>
                </section>
            )}

            <section className="bg-slate-800 p-10 text-center rounded-lg relative">
                {!isUserList && !isButtonDisabled &&
                    <button className="bg-indigo-600 hover:bg-indigo-900 hover:border-2 w-12 h-12 rounded-lg absolute top-5 right-5" onClick={handleAddGameToList}>+</button>
                }
                {isUserList &&
                    <button className="bg-red-600 hover:bg-red-900 hover:border-2 w-12 h-12 rounded-lg absolute top-5 left-5" onClick={handleDeleteGame}>-</button>
                }
                <section className="hover:bg-gray-700 rounded-lg p-4 cursor-pointer" onClick={() => setShowGameInfo(true)}>
                    <img className="w-80 h-80 rounded-lg block mx-auto" src={gameData.image.original_url}></img>
                </section>
                <p className="text-white pt-5 font-bold font-mono">{gameData.name}</p>
            </section>
        </section>
    );
};