import { useEffect, useState } from 'react';
import styles from './Plane.module.css';
import SeatingMap from '../SeatingMap';
import SeatWithLabel from '../Seat';

const defaultSeatingPlan = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

const defautlPassengerCount = 30;

const Plane = () => {
  const [currentSeatingPlan, setCurrentSeatingPlan] =
    useState(defaultSeatingPlan);
  const [passengerCount, setPassengerCount] = useState(defautlPassengerCount);
  const [userSeatingPlan, setUserSeatingPlan] = useState('');

  const changePassengerHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!Number.isNaN(value)) {
      setPassengerCount((prev) => {
        return Number(value);
      });
      console.debug('value', value);
    }
  };

  const changeSeatingPlan = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.debug('value', value);
    setUserSeatingPlan(value);
  };

  function UpdateSeatingMap(e) {
    e.preventDefault();
    try {
      let s = JSON.parse(userSeatingPlan);
      setCurrentSeatingPlan(s);
      console.debug('userSeatingPlan', currentSeatingPlan);
    } catch {
      alert('Invalid Grid / Seating Plan');
      console.error('Invalid Grid / Seating Plan');
    }
  }

  useEffect(() => {
    console.debug('New seating map');
    console.debug(currentSeatingPlan, passengerCount);
  }, [currentSeatingPlan, passengerCount]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p>
            <strong>Default Values</strong>
          </p>
          <br />
          <p>Passenger Count : 30</p>
          <p>Seating Plan/Grid : [[3,2], [4,3], [2,3], [3,4] ]</p>
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Passenger Count </label>
          <input
            type='string'
            value={passengerCount}
            onChange={(e) => changePassengerHandler(e)}
          />
          <br />
          <br />
          <label>Seating Plan </label>
          <input
            type='string'
            placeholder='E.g [ [3, 2], [4, 3], [2, 3], [3, 4]]'
            value={userSeatingPlan}
            size='80'
            onChange={(e) => changeSeatingPlan(e)}
          />

          <button
            style={{ marginLeft: 10, paddingLeft: 15, paddingRight: 15 }}
            onClick={UpdateSeatingMap}
          >
            Submit
          </button>
        </div>

        <div className={styles.plane}>
          <div className={styles.seating}>
            <p style={{ color: 'black' }}>Seating Guidline: </p>

            <div className={styles.row}>
              <SeatWithLabel seatLabel='Window' seatCode='W' />
              <SeatWithLabel seatLabel='Middle' seatCode='M' />
              <SeatWithLabel seatLabel='Aisle' seatCode='A' />
            </div>
          </div>
          {currentSeatingPlan && (
            <SeatingMap
              seatingPlan={currentSeatingPlan}
              passengerCount={passengerCount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Plane;
