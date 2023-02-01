import { v4 as uuidv4 } from 'uuid';
import styles from '../Plane/Plane.module.css';
import { aisleSeatColor, windowSeatColor, middleSeatColor } from '@/constant';

function evaluteSeatColor(seatCode) {
  let seatColor = '';
  if (seatCode == 'A') {
    seatColor = aisleSeatColor;
  }
  if (seatCode == 'W') {
    seatColor = windowSeatColor;
  }
  if (seatCode == 'M') {
    seatColor = middleSeatColor;
  }
  return seatColor;
}

const SeatWithLabel = (props) => {
  const { seatCode, seatLabel } = props;

  return (
    <span
      key={uuidv4()}
      className={styles.seat}
      style={{ backgroundColor: evaluteSeatColor(seatCode) }}
    >
      {seatLabel}
    </span>
  );
};

export default SeatWithLabel;
