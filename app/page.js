"use client"

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {

    const { user, gitHubSignIn } = useUserAuth();

    useEffect(() => {
        if (user) {
            window.location.href = "/game-list";
        };
    }, [user]);

    const handleGitHubSignIn = async () => {
        try {
            await gitHubSignIn();
        }
        catch (error) {
            console.log(error);
        };
    };

    return (
        <main className="bg-slate-900 w-full h-screen flex justify-center items-center">
            <section className=" bg-gray-800 w-1/3 h-3/4 rounded-lg">
                <section className="m-10 flex flex-col items-center">
                    {/* Icon from https://www.flaticon.com/free-icon/game-controller_141416 */}
                    <img className=" w-1/6 h-auto filter grayscale invert" src="/images/game-controller.png"></img>
                    <img className="w-full border-b border-white" src="/images/my-game-list.png"></img>
                </section>

                {!user && (
                    <section className="flex flex-col justify-center items-center" onClick={() => handleGitHubSignIn()} >
                        <h2 className="text-2xl mb-5">Login</h2>
                        <section className="bg-neutral-700 w-3/5 flex p-4 justify-center rounded-lg hover:bg-neutral-600 focus:bg-neutral-700">
                            <img className="w-10 h-auto mr-5 filter grayscale invert" src="/images/github-logo.png"></img>
                            <button type="button">Log in With GitHub</button>
                        </section>
                    </section>
                )}
            </section>
        </main>
    );
};