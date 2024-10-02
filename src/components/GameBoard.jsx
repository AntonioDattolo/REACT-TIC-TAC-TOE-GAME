import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({onSelectSquare, symbol}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=> {
            //è fortemente raccomandato non modificare gli array di base
            // ma crearne copie e modificare quelli , in quanto state è un array
            //e deve aveve un valore di riferimento
            const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updateBoard[rowIndex][colIndex] = symbol;
            return updateBoard;
        })

        onSelectSquare();
    }
    return (
        <ol id="game-board">
           {gameBoard.map((row,rowIndex) => (<li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => 

                <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                        {playerSymbol}
                    </button>
                </li>)}
                
            </ol>
           </li>))}
        </ol>
    );
}