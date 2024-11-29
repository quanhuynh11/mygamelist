"use client"

import { useUserAuth } from "../_utils/auth-context";

export default function GameListPage() {

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
        user && (
            <main>
                <p>Hello! {user.displayName} </p>

                <button className="bg-blue-500" onClick={handleSignOut}>Sign Out</button>

                {
                    console.log(user)
                }
            </main>
        )
    );
};