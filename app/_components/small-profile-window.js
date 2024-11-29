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

    return (
        <section className="bg-gray-800/55 w-60 h-full rounded-lg p-5 ">
            <section className="mb-20 flex flex-col items-center justify-center">
                <img className="w-1/2 h-auto rounded-lg mb-2" src={user.photoURL}></img>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <p className="text-xs">{user.uid}</p>
            </section>

            <section className="flex justify-end">
                <button className="bg-red-700 p-4 rounded-lg" onClick={handleSignOut} >Sign Out</button>
            </section>
        </section>
    );
};