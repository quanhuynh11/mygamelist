"use client"

import { useRouter } from "next/navigation";
import TopHeader from "../_components/top-header";
import { useUserAuth } from "../_utils/auth-context";

export default function GameListPage() {

    const { user } = useUserAuth();

    const router = useRouter();

    if (!user) {
        return (
            <main className="p-5">
                <p>You must be signed in!</p>
                <button className="bg-neutral-700 p-5 rounded-lg mt-5" onClick={() => router.push('/')}>Go to Login Screen</button>
            </main>
        );
    };

    return (
        user && (
            <main className="bg-slate-900 w-full h-screen">
                <section>
                    <TopHeader />
                </section>

                <section>

                </section>
            </main>
        )
    );
};