import KeyItem from "./KeyItem";

function KeyList({ keyList, handleKeyboard, rendererFunction }) {
    return <div className="key-list">
        {keyList.map(key => {
            return (
                <KeyItem key={key} handleKeyboard={handleKeyboard} value={key} renderer={rendererFunction} />
            )
        })}
    </div>
}

export default KeyList;