"use client"

import { useState } from "react";
import GameCard from "./game-card";

export default function GameList() {

    const [gameList, setGameList] = useState([]);

    async function getAllGames() {
        try {
            const response = await fetch(`/api/games`);

            if (!response.ok) {
                console.log(response.status);
            }
            else {
                const data = await response.json();

                setGameList(data);
            };
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <section className="flex">
            <button className="text-white" onClick={getAllGames}>Get games</button>
            { gameList &&
                gameList.results.map((game) => (
                    <GameCard key={game.id} gameData={game} />
                ))
            }

        </section>
    );
};