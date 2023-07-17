import { Animation, ArgumentScale, EventTracker} from "@devexpress/dx-react-chart";
import { ArgumentAxis,BarSeries,Chart,Tooltip,ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { scaleBand } from '@devexpress/dx-chart-core';
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import React from 'react'

// const data = [
//   { year: "1950", population: 2.525 },
//   { year: "1960", population: 3.018 },
//   { year: "1970", population: 3.682 },
//   { year: "1980", population: 4.44 },
//   { year: "1990", population: 5.31 },
//   { year: "2000", population: 6.127 },
//   { year: "2010", population: 6.93 },
// ];



function TransactionChart({data}) {
  
    return (
      <Paper sx={{marginTop:5}}>
        <Chart data={data}>
        <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="totalExpenses" argumentField="_id" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
}

export default TransactionChart
