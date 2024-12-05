"use client"

import Link from "next/link";
import TopHeader from "../_components/top-header";
import { useUserAuth } from "../_utils/auth-context";

export default function AboutPage() {

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

                <section className="text-center m-5 font-mono">
                    <p className="font-bold text-2xl">Hey, you found the easter egg! (About Page)</p>
                </section>

                <section className="text-center m-5 font-mono">
                    <p>This website uses React and Next.js as the framework</p>
                    <p>It also uses the Giant Bomb API to fetch all of the games for this site</p>
                </section>

                <section className="text-center mt-5 font-mono">
                    <p className="mb-5">This website was created by Quan Huynh for
                        the Fall 2024 Web Development class at the Southern Alberta Institute of Technology (SAIT)
                    </p>
                    <p>
                        This project was finalized on November 04, 2024
                    </p>
                    <p>
                        There may be more updates?!
                    </p>
                </section>
            </main>
        )
    );
};