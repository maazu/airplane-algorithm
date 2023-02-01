import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SeatWithNumber from '../Seat';
import styles from '../Plane/Plane.module.css';

const generateGrid = (grid) => {
  let result = [];
  for (var i = 0; i < grid.length; i++) {
    let rows = grid[i][1];
    let cols = grid[i][0];
    let gridArray = [];
    for (let j = 0; j < rows; j++) {
      let rowArray = [];
      for (let k = 0; k < cols; k++) {
        // Tackling Window seats
        if ((k == 0 && i == 0) || (k == cols - 1 && i == grid.length - 1)) {
          rowArray.push('W');
        }
        // Tackling Aisele seats
        else if ((k == 0 && i > 0) || k == cols - 1) {
          rowArray.push('A');
        }
        // Tackling Middle seats
        else if (k > 0 && k <= cols - 1) {
          rowArray.push('M');
        } else {
          rowArray.push(0);
        }
      }
      gridArray.push(rowArray);
    }
    result.push(gridArray);
  }
  return result;
};

const asignSeatNumber = (
  maxRow,
  grids,
  seatStartCount,
  seatCode,
  totalPassenger
) => {
  for (let row = 0; row < maxRow; row++) {
    for (let i = 0; i < grids.length; i++) {
      let currentRow = grids[i][row];
      if (currentRow) {
        for (let seat = 0; seat < currentRow.length; seat++) {
          // Assign Seat numbere if seat code matches
          if (
            currentRow[seat] === seatCode &&
            seatStartCount < totalPassenger
          ) {
            seatStartCount = seatStartCount + 1;
            currentRow[seat] = (
              <SeatWithNumber
                key={uuidv4()}
                seatCode={seatCode}
                seatLabel={seatStartCount}
              />
            );
          } else if (
            currentRow[seat] === seatCode &&
            seatStartCount >= totalPassenger
          ) {
            seatStartCount = seatStartCount + 1;
            currentRow[seat] = (
              <SeatWithNumber
                key={uuidv4()}
                seatCode={seatCode}
                seatLabel='&nbsp;'
              />
            );
          }
        }
      }
    }
  }
  return [grids, seatStartCount];
};

function applyRules(PlanSeatingGrid, totalPassengerCount) {
  const finalSeatingMap = generateGrid(PlanSeatingGrid);
  let totalPassenger = totalPassengerCount;

  let maxRow = 0;
  for (let i = 0; i < PlanSeatingGrid.length; i++) {
    let row = PlanSeatingGrid[i][1];
    if (row > maxRow) {
      maxRow = row;
    }
  }

  let [assignGridA, seatCountA] = asignSeatNumber(
    maxRow,
    finalSeatingMap,
    0,
    'A',
    totalPassenger
  );

  let [assignGridW, seatCountW] = asignSeatNumber(
    maxRow,
    assignGridA,
    seatCountA,
    'W',
    totalPassenger
  );
  let [assignGridM, seatCountM] = asignSeatNumber(
    maxRow,
    assignGridW,
    seatCountW,
    'M',
    totalPassenger
  );

  return assignGridM;
}

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
