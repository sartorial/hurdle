// KeyItem.js

function KeyItem({ value, renderer }) { 
    return (
        <button className="key-item"
          onClick={(e) => {
            renderer(value)
          }}
        >
        {value}
        </button>
    )
}

export default KeyItem;