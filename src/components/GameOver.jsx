export default function GameOver({winner}){
    return (
        <section>
            <div id="game-over">
                <h2>GameOver!</h2>
                {winner && <p>{winner} Won!</p>}
                {!winner && <p>It's a DRAW!</p>}
                <p><button>Rematch!</button></p>
            </div>
        </section>
    );
}