import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { applyRules } from '@/logic/index';
import styles from '../Plane/Plane.module.css';

const SeatingMap = (props) => {
  const [finalSeatingMap, setFinalSeatingMap] = useState();
  const { passengerCount, seatingPlan } = props;

  useEffect(() => {
    console.log('New Seating Arrangment');
    setFinalSeatingMap(applyRules(seatingPlan, passengerCount));
  }, [seatingPlan, passengerCount]);

  return (
    <>
      {finalSeatingMap &&
        finalSeatingMap.map((plan) => {
          return (
            <div key={uuidv4()} className={styles.seating}>
              {plan.map((seat) => {
                return (
                  <div key={uuidv4()} className='row'>
                    {seat}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default SeatingMap;
