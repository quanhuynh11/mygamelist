"use client"

import { useEffect, useState } from "react";
import GameCard from "./game-card";

export default function GameList() {

    const [gameList, setGameList] = useState([]);
    const [renderGames, setRenderGames] = useState(false);
    const [date, setDate] = useState("2024-10-11");
    const [gameName, setGameName] = useState("touhou");

    async function getGamesOnDate() {
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

    async function getGamesOnName() {
        try {
            const response = await fetch(`/api/games/find-name?name=${gameName}`);

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
        getGamesOnName();
    }, []);

    return (
        <section className="flex flex-col">
            <section className="w-screen">
                <section className="flex justify-between m-5 h-28">
                    <section className="flex items-center flex-col">
                        <label className="font-mono">Enter date to search for games</label>
                        <section className="flex items-center">
                            <input className="w-full bg-neutral-500 p-3 m-5 mb-0 rounded-full font-mono" value={date} onChange={(event) => setDate(event.target.value)} type="date"></input>
                            <button className="bg-indigo-600 font-mono hover:bg-indigo-900 w-24 p-3 rounded-full mt-2" onClick={() => getGamesOnDate()} >Search</button>
                        </section>
                    </section>

                    <section className="flex items-center flex-col">
                        <label className="font-mono">Enter name to search for games</label>
                        <section className="flex">
                            <input className="w-full font-mono bg-neutral-500 p-3 m-5 mb-0 rounded-full" value={gameName} onChange={(event) => setGameName(event.target.value)} type="text"></input>
                            <button className="bg-indigo-600 font-mono hover:bg-indigo-900 w-24 p-3 rounded-full mt-2" onClick={() => getGamesOnName()}>Search</button>
                        </section>
                    </section>
                </section>
            </section>

            <section className="flex flex-wrap justify-center overflow-y-auto h-[65vh] p-5 rounded-lg">
                {renderGames &&
                    gameList.results.map((game) => (
                        <GameCard key={game.id} gameData={game} isUserList={false} />
                    ))
                }
            </section>
        </section>
    );
};