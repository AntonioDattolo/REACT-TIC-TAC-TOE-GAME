import { Fragment, useState } from "react"
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./store/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns){
  //creare una costante di default per il primo turno(player1)
  let currentPlayer = 'X';
  //impostare una condizione per sapere sec'è stato almeno un turno
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    //nel caso ci sia stato, il turno va al giocatore successivo 
    currentPlayer = 'O';
  }

  return currentPlayer
}


function App() {
  //qui definiamo il tuo del giocatore , in uno state che poi 
  //passeremo ai componenti figli(Player/GameBoard)
  // const[activePlayer , setActivePlayer] = useState('X');


  //Creo uno state->array con i player di default.Che andrò a 
  //collegare ad una funzione -> handleNameChanged
  const [players, setPlayers] = useState({ 'X' : 'Player 1', 'O' : 'Player 2'})

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array =>[...array])];
  // se invece usiamo gameBoard = initialGameBoard, l'array iniziale, verrò sovrascritto e
  // perso durante la partita,impendendo il restart
  
  let winner;

  for(const turn of gameTurns){
      //scorriamo i Turni come dei giri, se turn è un array vuoto non verrai eseguito il ciclo(js concept)
      //e in questo ciclo vogliamo estrarre le informazioni dei turni che stiamo memorizzando in updateTurns in App
      const {
          square ,
          player 
      } = turn

      const {row, col} = square
      gameBoard[row][col] = player
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSymbolSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSymbolSquare = gameBoard[combination[1].row][combination[1].column]
    const thirdSymbolSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSymbolSquare &&
      firstSymbolSquare === secondSymbolSquare &&
      firstSymbolSquare === thirdSymbolSquare)
      {
        winner = players[firstSymbolSquare]
      }
  }

  const draw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex){
    // se il player è x allora diventa o dopo l'aggiornamento di state
    //setActivePlayer((currentActPlayer) => currentActPlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns =>{
      //creare una costante di default per il primo turno(player1), come fatto in precedenza
     
      const activePlayer = deriveActivePlayer(prevTurns);

      const updateTurns =[
        {
          square : {row : rowIndex, col : colIndex},
          player : activePlayer},
          ...prevTurns
        ]
      return updateTurns
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }


  // con questa funzione, imposterò il symbol 'X' ||'O' presi dal componente figlio
  // e corrispondono alle mie properties di players[*]--> state
  // a cui sovrascriverò il nome con newName, passando la funzione al componente
  function handlePlayerNameChanged(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="player 1"
            symbol="X"
            active={activePlayer === 'X'}
            onChangeName={handlePlayerNameChanged}
          />
          <Player
            name="player 2"
            symbol="O"
            active={activePlayer === 'O'}
            onChangeName={handlePlayerNameChanged}
            //passando questa funzione recupero il nuovo nome editato, per averlo nell'App principale
          />
        </ol>
        <section>
          {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard 
            onSelectSquare={handleSelectSquare}
            turns={gameTurns}
            board={gameBoard}
            // symbol={activePlayer}
          />
        </section>
      </div>
      <Log 
        turns={gameTurns}
      />
    </main>
  )
}

export default App
