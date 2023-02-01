import { v4 as uuidv4 } from 'uuid';
import styles from '../Plane/Plane.module.css';

function evaluteSeatColor(seatCode) {
  const aisleSeatColor = '#6194c9';
  const windowSeatColor = '#acc46c';
  const middleSeatColor = '#cb635b';
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
