"use client"

import { useEffect, useState } from "react";
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

    useEffect(() => {
        getAllGames();
    }, []);

    return (
        <section className="flex">
            {
                gameList.results.map((game) => (
                    <GameCard key={game.id} gameData={game} />
                ))
            }

        </section>
    );
};