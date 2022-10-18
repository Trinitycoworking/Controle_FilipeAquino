import { useState } from 'react'
import "./styles/App.sass"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Logo'>
        <h1>Trinity</h1>
      </div>
      <div className='Frame'>
        <iframe frameBorder="0" src="https://onedrive.live.com/embed?resid=BE09E1A7AD9639C1%21804&authkey=%21ACEDawntfCLKfIU&em=2&Item='Filipe%20Agencia'!B10%3AD22"></iframe>
      </div>
    </div>
  )
}

export default App
