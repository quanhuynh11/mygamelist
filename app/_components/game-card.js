import { addItem } from "../_services/game-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function GameCard({ gameData }) {

    const { user } = useUserAuth();
    const handleAddGameToList = () => addItem(user.uid, gameData);
    
    return (
        <section className="m-5">
            {
                console.log(gameData)
            }
            <section className="bg-slate-800 p-10 text-center rounded-lg relative">
                <button className="bg-indigo-600 hover:bg-indigo-900 hover:border-2 w-12 h-12 rounded-lg absolute top-5 right-5" onClick={handleAddGameToList}>+</button>
                <img className="w-80 h-80 rounded-lg block mx-auto" src={gameData.image.original_url}></img>
                <p className="text-white pt-5 font-bold font-mono">{gameData.name}</p>
            </section>
        </section>
    );
};