import KeyList from "./KeyList"

function Keyboard({ handleKeyboard }) {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', "BACKSPACE"]
    ]
    return (
        <div className="keyboard">
            {keys.map(keyList => {
                return <KeyList key={keyList} keyList={keyList} handleKeyboard={handleKeyboard} />
            })}
        </div>
    )
}

export default Keyboard;