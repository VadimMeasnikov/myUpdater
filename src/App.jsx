import { useState } from 'react'
import './style/App.scss'

function App() {

  const [count, setCount] = useState(0)

  const [flag, setFlag] = useState(true)

  let getRandomNumber = () => {
    setCount(Math.round(Math.random() * 100))
  }

  function getPopup() {
    if (flag === true) {
      return (
        <div className="popup">
          <div className="popup-conteiner">
            <h1>POPUP</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aperiam quaerat eligendi iste minima omnis possimus nesciunt amet aliquid! Exercitationem fugit dicta alias aut eum quidem, voluptate minus soluta nulla?</p>
            <button>X</button>
          </div>
        </div>
      )
    }else{
      return(
        <h1>Это рабоатет</h1>
      )
    }

  }


  return (
    <>
      <div onLoad={getPopup} className="container">

        <header>
          <div iv className="nav">
            <a href="#" className="link">Link</a>
            <a href="#" className="link">Link</a>
            <a href="#" className="link">Link</a>
            <a href="#" className="link">Link</a>
            <a href="#" className="link">Link</a>

          </div>
          <div className="box">
            <button onClick={getRandomNumber} >Click Me</button>
          </div>
        </header>

        <main>
          <h1 className='result'>{count}</h1>
        </main>
      </div>
    </>
  )
}

export default App
