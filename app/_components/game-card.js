export default function GameCard({ gameData }) {
    return (
        <section className="m-5">
            {
                console.log(gameData)
            }
            <section className="bg-slate-800 p-10 text-center rounded-lg">
                <img className="w-80 h-80 rounded-lg block mx-auto" src={gameData.image.original_url}></img>
                <p className="text-white pt-5 font-bold font-mono">{gameData.name}</p>
            </section>
        </section>
    );
};