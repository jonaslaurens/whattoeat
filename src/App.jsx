import './App.css';
import { useState } from 'react';
import Wheel from './Wheel';
import Winner from './Winner';

function App() {
  const [winner, setWinner] = useState(null);
  const handleFinished = (weEat) => {
    setWinner(weEat);
  }

  const onReset = () => {
    setWinner(null);
  }

  return (
    <div className="app">
      <div className={winner ? 'hidden' : ''}>
        <Wheel handleFinished={ handleFinished } />
      </div>
      {winner && <Winner winner={ winner } onReset={onReset} />}
    </div>
  )
}
export default App
