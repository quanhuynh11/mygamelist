"use client"

import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
import ProfileWindow from "./small-profile-window";

export default function TopHeader() {

    const { user } = useUserAuth();

    const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);


    const handleHomeRouting = () => {
        window.location.href = "/game-list";
    };

    return (
        <section>

            <section className="bg-gray-800 w-screen h-32 flex justify-between">
                <section className="p-5 cursor-pointer hover:bg-gray-700/50" onClick={handleHomeRouting}>
                    <img className="w-20 h-auto filter grayscale invert" src="/images/game-controller.png"></img>
                </section>

                <section className="flex items-center">
                    <section className="hover:bg-gray-700/50" onClick={() => window.location.href = "/my-game-list"}>
                        <img className="h-auto max-h-28 cursor-pointer" src="/images/my-game-list.png"></img>
                    </section>
                </section>

                <section className="p-5 flex flex-col items-center hover:bg-gray-700 cursor-pointer" onClick={() => setIsProfileFormOpen((prev) => !prev)}>
                    <img className="w-14 h-auto rounded-full" src={user.photoURL} alt="profile picture" ></img>
                    <p className="pt-1">{user.displayName}</p>
                </section>
            </section>

            <section className={`absolute right-0 transition-all duration-300 z-50 ${isProfileFormOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
                <ProfileWindow />
            </section>



        </section>
    );
};