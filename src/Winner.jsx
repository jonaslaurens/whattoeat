import Confetti from 'react-confetti';
import './Winner.css';

function Winner({ winner, onReset }) {
  const winningFood = winner.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return (
    <>
      <Confetti width={'1000px'} height={'1000px'} />
      <div className="winner">
        <p>We're eating</p>
        <h1>{ winningFood }</h1>
        <button role='button' tpye='button' onClick={() => onReset()}>
          Bad choice, let's try something else
        </button>
      </div>
    </>
  )
}
export default Winner
