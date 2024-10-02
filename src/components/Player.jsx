import { useState } from "react";

export default function Player({name, symbol, active}){
    const [ playerEdit , setPlayerEdit] = useState(name);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((isEditing) => !isEditing)
        
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