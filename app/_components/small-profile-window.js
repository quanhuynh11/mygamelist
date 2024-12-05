"use client"

import { useUserAuth } from "../_utils/auth-context";

export default function ProfileWindow() {

    const { user, firebaseSignOut } = useUserAuth();

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error);
        };
    };

    const navigateAbout = () => {
        window.location.href = "/about";
    };

    return (
        <section className="bg-gray-700 w-60 h-full rounded-lg p-5 font-mono relative">
            <section className="mb-20 flex flex-col items-center justify-center">
                <img className="w-1/2 h-auto rounded-lg mb-2" src={user.photoURL}></img>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <p className="text-xs">{user.uid}</p>
            </section>
            
            {/* Image is a touhou reference to cirno */}
            <img className="w-8 h-8 absolute bottom-7 hover:bg-neutral-800 p-1 rounded-lg cursor-pointer" src="/images/easter-egg.svg" onClick={navigateAbout}></img>

            <section className="flex justify-end">
                <button className="bg-red-700 hover:bg-red-900 focus:bg-red-700 p-4 rounded-lg" onClick={handleSignOut}>Sign Out</button>
            </section>
        </section>
    );
};