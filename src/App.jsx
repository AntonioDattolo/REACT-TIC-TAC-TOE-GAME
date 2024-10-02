import { Fragment, useState } from "react"
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  //qui definiamo il tuo del giocatore , in uno state che poi 
  //passeremo ai componenti figli(Player/GameBoard)
  const[activePlayer , setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentActPlayer) => currentActPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="player 1"
            symbol="X"
            active={activePlayer === 'X'}
          />
          <Player
            name="player 2"
            symbol="O"
            active={activePlayer === 'O'}
          />
        </ol>
        <section>
          <GameBoard 
            onSelectSquare={handleSelectSquare}
            symbol={activePlayer}
          />
        </section>
      </div>
      LOG
    </main>
  )
}

export default App
