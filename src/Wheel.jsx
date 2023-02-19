import './App.css';
import WheelComponent from 'react-wheel-of-prizes'
import './Wheel.css';
import { food, segmentColors } from './foodList';

function Wheel({ handleFinished }) {
  const onFinished = (weEat) => {
    handleFinished(weEat);
  }

  return (
    <>
      <WheelComponent
        segments={food}
        segColors={segmentColors}
        winningSegment={null}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        isOnlyOnce={false}
        buttonText='Spin'
        size={290}
        upDuration={100}
        downDuration={1000}
        fontFamily='Roboto'
      />
    </>
  )
}
export default Wheel
