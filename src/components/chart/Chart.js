import React from 'react'
import classes from "./chart.module.css"
import { MdOutlineArrowDropDown } from "react-icons/md";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


const data = [
  {
    name: "5",
    pv: 12,
  },
  {
    name: "9",
    pv: 8,
  },
  {
    name: "11",
    pv: 10,
  },
  {
    name: "13",
    pv: 12,
  },
  {
    name: "15",
    pv: 15,
  },
  {
    name: "17",
    pv: 7,
  },
  {
    name: "19",
    pv: 15,
  },
  {
    name: "21",
    pv: 12,
  },
  {
    name: "23",
    pv: 8,
  },
  {
    name: "25",
    pv: 13,
  },
  {
    name: "27",
    pv: 10,
  },
];

const Chart = () => {
  return (
    <div className={classes.chartdiv}>
      <div className={classes.selinfo}>
        <p>Activity</p>
        <p className={classes.week} >Weekly <MdOutlineArrowDropDown size={20} /></p>
      </div>
      <ResponsiveContainer className={classes.chartstl} height={"90%"} width={"105%"} >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8" radius={70} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart