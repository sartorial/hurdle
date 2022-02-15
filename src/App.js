// App.js

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";
import Keyboard from "./Keyboard";
import SixLetters from "./SixLetter"
import SevenLetters from "./SevenLetters";
import EightLetters from "./EightLetter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isFavorited, setIsFavorited] = useState(false)
  const [unfilteredWord, setUnfilteredWord] = useState([])
  const [keyboard, setKeyboard] = useState([])
  const [gameState, setGameState] = useState(false)
  const [shouldFetch, setShouldFetch] = useState(true)
  const [counter, setCounter] = useState(1)
  const [letterLength, setLetterLength] = useState(5)
  const [word, setWord] = useState("")
  const [pronunciation, setPronunciation] = useState("")
  const [english, setEnglish] = useState("")
  const [def, setDef] = useState("")
  const bgColor = isDarkMode ? "black" : "white"
  const textColor = isDarkMode ? "white" : "black"
  const checked = isDarkMode ? true : false

  // First dictionary API that returns random 5-letter word
  useEffect(() => {
    if (!shouldFetch) return
    fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=${letterLength}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "740a56d697mshdb542b570403ccdp16a52fjsn58c65cad5f5e"
        }
      }
    )
      .then(res => res.json())
      .then(data => setUnfilteredWord(data.word))
  }, [letterLength, word])

  // Second dictionary API, slightly more accurate information
  useEffect(() => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${unfilteredWord}?key=c7d47a35-1538-4a8c-a6a6-5d47170ded58`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (data[0].hwi !== undefined) {
          setShouldFetch(false)
          setWord(unfilteredWord)
          {data[0].hwi.prs ? setPronunciation(data[0].hwi.prs[0].mw) : setPronunciation("")}
          setEnglish(data[0].fl)
          setDef(data[0].shortdef[0])
        } else {
          setWord(unfilteredWord)
        }
      })
      
  }, [unfilteredWord])

  const rendererFunction = (func, val) => {
    func(val)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            bgColor={bgColor}
            textColor={textColor}
            checked={checked}
          />
          <br></br>
          <LetterContainer
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            rendererFunction={rendererFunction}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            bgColor={bgColor}
            textColor={textColor}
          />
        </Route>
        <Route exact path="/six">
          <SixLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            keyboard={keyboard}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
          />
        </Route>
        <Route exact path="/seven">
          <SevenLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            keyboard={keyboard}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
          />
        </Route>
        <Route exact path="/eight">
          <EightLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            keyboard={keyboard}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;