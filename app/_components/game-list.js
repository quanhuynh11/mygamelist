"use client"

import { useEffect, useState } from "react";
import GameCard from "./game-card";

export default function GameList() {

    const [gameList, setGameList] = useState([]);

    const [renderGames, setRenderGames] = useState(false);

    const [date, setDate] = useState("2024-10-11")

    async function getAllGames() {
        try {
            const response = await fetch(`/api/games?date=${date}`);

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

        setRenderGames(true);
    };

    useEffect(() => {
        getAllGames();
    }, [date]);

    return (
        <section>
            <section className="flex justify-center flex-col items-center m-5">
                <p>Enter date to search for games</p>
                <input className="w-1/2 bg-neutral-500 p-3 m-5 mb-0 rounded-full" value={date} onChange={(event) => setDate(event.target.value) } type="date"></input>
            </section>

            <section className="flex flex-wrap justify-center overflow-y-auto h-[65vh] p-5 rounded-lg">
                {renderGames &&
                    gameList.results.map((game) => (
                        <GameCard key={game.id} gameData={game} />
                    ))
                }

            </section>
        </section>
    );
};