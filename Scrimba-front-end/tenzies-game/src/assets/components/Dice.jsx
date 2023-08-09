export default function Dice(props) {
    const style = {
        backgroundColor: "#59E391"
    } 
    
    return(
        <div 
            onClick={() => props.hold(props.id)}
            style={props.isHeld ? style : null} 
            className="dice"
            >
            <h1>{props.number}</h1>
        </div>
    )
}