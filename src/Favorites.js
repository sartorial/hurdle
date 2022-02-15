import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import * as Mui from "@mui/material"
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import DictionaryEntry from './DictionaryEntry';

function Favorites({ bgColor, textColor }) {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/entries")
            .then(res => res.json())
            .then(data => setEntries(data))
    }, [])

    const favoriteElements = entries.map(entry => {
        return (
            <div className="favorite-item" key={entry.word}>
                <DictionaryEntry
                    textColor={textColor}
                    word={entry.word}
                    pronunciation={entry.pronunciation}
                    english={entry.english}
                    def={entry.definition}
                    isFavorited={true}
                />
            </div>
        )
    })

    return (
        <div>
            <Mui.AppBar className="favorite-bar" style={{ backgroundColor: bgColor }}>
                <style>{`body {background-color: ${bgColor}`}</style>
                <Mui.Toolbar>
                    <Mui.Typography variant="h4" style={{ color: textColor }}>
                        Bookmarks
                    </Mui.Typography>
                    <div className='buttons'>
                        <NavLink to="/" exact>
                            <Mui.Button style={{ color: textColor }}>
                                <HouseOutlinedIcon />
                            </Mui.Button>
                        </NavLink>
                    </div>
                </Mui.Toolbar>
            </Mui.AppBar>
            <div className='favorite-container'>
                <div className="row">
                    {favoriteElements}
                </div>
            </div>
        </div>


    )
}

export default Favorites