import './EditorButton.css'
export default function EditorButton({ isActive }){

    function handleClick(){
        //TODO: Implemnt click handler
    }
    return (
        <button className='editor-button '
        style={{
            color: isActive ? 'white' : '#8991a8ff',
            backgroundColor: isActive ? '#0f100cff' : '#ffffffff',
            borderTop: isActive ? '2px solid #3d74cc' : 'none'
            }}
        onClick={handleClick}
        >
            file.js
        </button>
    )
}