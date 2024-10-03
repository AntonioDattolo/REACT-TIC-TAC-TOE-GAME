export default function Log({turns,players}){
    const log = []
   

    return (
        <>
        <ol id="log">
            {turns.map((item, key)=> (<li key={key}>{players[item.player]} has select row {item.square.row + 1} and column {item.square.col + 1}</li>))}
        </ol>
        </>
    );
}