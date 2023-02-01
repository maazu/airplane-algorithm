## Airplane Seating Algorithm

[![Netlify Status](https://api.netlify.com/api/v1/badges/83653ffe-03fc-48ad-bc36-8fdc00bf14bd/deploy-status)](https://airline-seating-algorithm.netlify.app/)

[View on netilfy](https://airline-seating-algorithm.netlify.app/) 

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Seating Plan

The code for the seat assignment logic can be found in `src/logic/index.js` implementation of seat assignment based on the following input and seating rules:

### Program Input 

• a 2D array that represents the rows and columns [[3,4], [4,5], [2,3], [3,4]]

• Number of passengers waiting in queue. 

### Rules for seating

• Always seat passengers starting from the front row to back, starting from the left to the right

• Fill aisle seats first followed by window seats followed by center seats (any order in center seats)


<img width="1020" alt="Airline-seating-map" src="https://user-images.githubusercontent.com/35654937/216141103-a850c9ee-9e0c-4882-b27a-4fc3466e3dc2.png">

### Program output

<img width="848" alt="image" src="https://user-images.githubusercontent.com/35654937/216142532-6f640352-5854-40eb-9bb3-7216ddb2d085.png">
