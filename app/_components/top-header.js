"use client"

import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

export default function TopHeader() {

    const { user } = useUserAuth();

    const router = useRouter();

    const handleHomeRouting = () => {
        router.push('/game-list')
    };

    return (
        <section className="bg-gray-800 w-screen h-28 flex justify-between ">

            <section className="p-5 cursor-pointer" onClick={handleHomeRouting}>
                <img  className="w-20 h-auto filter grayscale invert" src="/images/game-controller.png"></img>
            </section>

            <section className="flex items-center">
                <section>
                    <img className="h-auto max-h-36" src="/images/my_game_list.png"></img>
                </section>
            </section>

            <section className="p-5 flex flex-col items-center">
                {console.log(user)}
                <img className="w-14 h-auto rounded-full" src={user.photoURL} ></img>
                <p className="pt-1">{user.displayName}</p>
            </section>

        </section>
    );
};