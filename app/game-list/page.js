"use client"

import TopHeader from "../_components/top-header";
import { useUserAuth } from "../_utils/auth-context";
import GameList from "../_components/game-list";
import Link from "next/link";

export default function GameListPage() {

    const { user } = useUserAuth();

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
                    <GameList />
                </section>
            </main>
        )
    );
};