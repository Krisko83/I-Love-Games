import { useEffect, useState } from "react";
import request from "../../utils/request.js"; 
import GameCard from "../game-card/GameCard.jsx";

export default function Catalog() {

    const [games, setGames] = useState([]);
    
    useEffect(() => {
        const abortController = new AbortController();

        request('/games?order=created_at.desc', 'GET', null, { signal: abortController.signal })
            .then(setGames)
            .catch(err => console.log(err))

            return () => {
                abortController.abort('Unmounted element');
            }
    }, []);



    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            <div className="catalog-container">
                {games.length > 0
                    ? games.map(game => <GameCard key={game.id} {...game} />)
                    : <h3 className="no-articles">No Added Games Yet</h3>
                }
            </div>

        </section>
    );
}
 