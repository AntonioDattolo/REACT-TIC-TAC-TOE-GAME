import { Fragment, useState } from "react"
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name="player 1"
            symbol="X"
          />
          <Player
            name="player 2"
            symbol="O"
          />
        </ol>
        <section>
          <GameBoard />
        </section>
      </div>
      LOG
    </main>
  )
}

export default App
