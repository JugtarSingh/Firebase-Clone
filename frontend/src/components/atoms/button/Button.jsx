export default function Button({ onClick , text , styleClass}){
    return (
        <button
            onClick={onClick}
            className={styleClass}
            >{text}</button>
    )
}