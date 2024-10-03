import { useState } from "react";

export default function Player({name, symbol, active, onChangeName}){
    const [ playerEdit , setPlayerEdit] = useState(name);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((isEditing) => !isEditing)
        // qui dove ho la variabile che attiva e disattiva l'edit, passo la funzione
        // per recuperare il dato dal figlio
        //  se si sceglie di cambiare il nome si richiama la funziona per passare i dati
        // dal componente figlio al padre
        if(isEditing){
            onChangeName(symbol,playerEdit)
        }
        
    };
    // se lo state dipende da un value precedente, è altamente raccomandato passare una funziona come argomento
    //e non --> !value,così si avrà la certezza che REACT lavorerà sempre ocn l'ultimo state disponibile
    function handleChange(event){
        setPlayerEdit(event.target.value)
    }

    let playerName = <span className="player-name">{playerEdit}</span>;

    let editButton = 'Edit';

    if(isEditing){
        playerName =  <input type="text" value={playerEdit} onChange={handleChange} required />
        // impostare defaultValue farà in modo che abbiamo un valore iniziale preimpostato che può essere modificato
        editButton = 'Save'
    };
   
    return (
        <>
        <li className={active ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{editButton}</button>
           
        </li>
        </>
    );
}