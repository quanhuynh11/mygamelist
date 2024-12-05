"use client"

import Link from "next/link";
import TopHeader from "../_components/top-header";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import { getItems } from "../_services/game-list-service";
import GameCard from "../_components/game-card";

export default function MyGameList() {

    const { user } = useUserAuth();

    const [gameList, setGameList] = useState([]);
    const [renderGames, setRenderGames] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);
    

    const getAllUserGames = async () => {
        if(user) {
            await getItems(user.uid, setGameList);
            setRenderGames(true);
        };
    };

    useEffect(() => {
        getAllUserGames();
    }, [user, reloadKey])

    if (!user) {
        return (
            <main className="p-5">
                <p className="mb-10" >You must be signed in!</p>
                <Link className="bg-neutral-700 p-5 rounded-lg mt-5" href="/">Go to Login Screen</Link>
            </main>
        );
    };

    return (
        user && (
            <main className="bg-slate-900 w-full h-screen">
                <section>
                    <TopHeader />
                </section>

                <section className="flex flex-col items-center justify-center p-5">
                    <h1 className="font-mono text-5xl m-10 mt-5 border-b-4">My Game List</h1>
                    <section className="flex flex-wrap justify-center overflow-y-auto h-[65vh] p-5 rounded-lg">
                        {renderGames &&
                            gameList.map((game, index) => (
                                <GameCard key={index} gameData={game} isUserList={true} reloadGameList={() => setReloadKey(prevKey => prevKey + 1)} />
                            ))
                        }
                    </section>
                </section>
            </main>
        )
    );
};