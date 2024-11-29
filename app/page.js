"use client"

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const { user, gitHubSignIn } = useUserAuth();

  const router = useRouter();

  useEffect(() => {
    if(user) {
      router.push('/game-list')
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
          {/* Icon from
          https://www.flaticon.com/free-icon/game-controller_141416 */}
          <img className=" w-1/6 h-auto filter grayscale invert" src="/images/game-controller.png"></img>
          <h1 className="text-4xl font-bold">My Game List</h1>
        </section>
        
        {!user &&(
          <section className="flex flex-col justify-center items-center mt-32" onClick={() => handleGitHubSignIn()} >
            <h2 className="text-2xl mb-5">Login</h2>
            <section className="bg-neutral-700 w-60 flex p-4 rounded-lg hover:bg-neutral-600 focus:bg-neutral-700">
              <img className="w-10 h-auto mr-5 filter grayscale invert" src="/images/github-logo.png"></img>
              <button type="button">Log in With GitHub</button>
            </section>
          </section>
        )}
      </section>
    </main>
  );
};