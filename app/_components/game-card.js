export default function GameCard({ gameData }) {
    return (
        <section className="m-5">
            {
                console.log(gameData)
            }
            <section className="bg-black p-10 text-center rounded-lg">
                <p className="text-white">{gameData.name}</p>
                <img className="w-80 h-80 rounded-lg" src={gameData.image.original_url}></img>
            </section>
        </section>
    );
};