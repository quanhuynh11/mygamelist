export async function GET(request) {
    const apiKey = process.env.NEXT_PUBLIC_GIANT_BOMB_API_KEY;
    // const date = "2024-10-11";

    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");


    const url = `https://www.giantbomb.com/api/games/?api_key=${apiKey}&format=json&filter=original_release_date:${date}`;


    try {
        const response = await fetch(url);

        if (!response.ok) {
            return new Response("Could not retrieve data", { status: 400 });
        }
        else {
            const data = await response.json();

            return new Response(JSON.stringify(data), { status: 200 });
        };
    }
    catch (error) {
        return new Response(error.message, { status: 500 });
    };
};