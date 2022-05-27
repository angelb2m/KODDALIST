const RANDOM_API = "https://randomuser.me/api/";



class Api {

    async getRandom() {
        const query = await fetch(`${RANDOM_API}?results=50`, { headers: { 'Cache-Control': 'no-cache' } })
        const randomList = await query.json();
        return (
            randomList
        )
    }
}

export default new Api();
