"use client"

import TopHeader from "../_components/top-header";
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
            <main className="bg-slate-900 w-full h-screen">

                <section>
                    <TopHeader />
                </section>

                {/* <p>Hello! {user.displayName} </p> */}


                <button className="bg-blue-500" onClick={handleSignOut}>Sign Out</button>

                
            </main>
        )
    );
};