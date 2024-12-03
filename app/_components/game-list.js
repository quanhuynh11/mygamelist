"use client"

import { useEffect, useState } from "react";
import GameCard from "./game-card";

export default function GameList() {

    const [gameList, setGameList] = useState([]);

    const [renderGames, setRenderGames] = useState(false);

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
        setRenderGames(true);
    }, []);

    return (
        <section className="flex">
            { renderGames &&
                gameList.results.map((game) => (
                    <GameCard key={game.id} gameData={game} />
                ))
            }

        </section>
    );
};