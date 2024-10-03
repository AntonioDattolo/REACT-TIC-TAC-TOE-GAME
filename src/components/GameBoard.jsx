// import { useState } from "react";

export default function GameBoard({onSelectSquare, board}){
    //creazione tabellone da state trasmesso da componente App, con le scelte fatte dai player
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=> {
    //         //è fortemente raccomandato non modificare gli array di base
    //         // ma crearne copie e modificare quelli , in quanto state è un array
    //         //e deve aveve un valore di riferimento
    //         const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
    //         updateBoard[rowIndex][colIndex] = symbol;
    //         return updateBoard;
    //     })

    //     onSelectSquare();
    // }
//******************************************************************************************* */

    return (
        <ol id="game-board">
           {board.map((row,rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => 

                <li key={colIndex}>
                    <button 
                    onClick={() => onSelectSquare(rowIndex, colIndex)} 
                    disabled={playerSymbol !== null ? true : false}>
                        {playerSymbol}
                    </button>
                </li>)}
                
            </ol>
           </li>))}
        </ol>
    );
}