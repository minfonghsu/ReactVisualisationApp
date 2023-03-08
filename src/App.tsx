import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    CS: 4000,
    deloitte: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    CS: 3000,
    deloitte: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    CS: 255,
    deloitte: 6500,
    amt: 2290
  },
  {
    name: "Apr",
    CS: 2780,
    deloitte: 3908,
    amt: 2000
  },
  {
    name: "May",
    CS: 1890,
    deloitte: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    CS: 2390,
    deloitte: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    CS: 3490,
    deloitte: 4300,
    amt: 2100
  }
];

const getIntroOfPage = (label) => {
  if (label === "Jan") {
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`For ${label} : `}</p>
        <p1
          className="label"
          name="deloitte"
        >{`Deloitte = ${payload[0].value}`}</p1>
        <br></br>
        <p2 className="label">{`Cognizant = ${payload[1].value}`}</p2>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeWidth="3" strokeDasharray="3 3" stroke="" />
      <XAxis
        id="min"
        dataKey="name"
        fontSize="15"
        fontStyle="bold"
        fontFamily="Roboto, sans-serif"
        fontWeight="bolder"
        style={{ fontSize: "80%", fill: "black" }}
      />
      <YAxis
        label={{
          opacity: 0.6,
          fontFamily: "arial",
          fontWeight: "bold",
          fontSize: "15",
          value: "# of New Clients",
          angle: -90,
          position: "Center",
          dx: -20
        }}
        fontStyle="italic"
        fontWeight="bolder"
        style={{ fontFamily: "arial", fontSize: "80%", fill: "black" }}
        scale="auto"
      />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{
          fontFamily: "Roboto, sans-serif",
          zIndex: 15,
          opacity: 0.8
        }}
        contentStyle={{ backgroundColor: "var(--background)" }}
        labelStyle={{ color: "var(--text-on-light)" }}
      />
      <Legend
        legend
        iconType="circle"
        wrapperStyle={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bolder",
          bottom: 0,
          marginBottom: 10,
          marginLeft: 40,
          opacity: 0.8
        }}
        contentStyle={{ fontSize: "200%" }}
      />

      <Line
        opacity="2"
        name="Deloitte"
        type="monotone"
        dataKey="deloitte"
        stroke="green"
        activeDot={{ r: 5 }}
        strokeWidth="5"
      />

      <Line
        opacity=".5"
        name="Collaborative Solutions (Cognizant)"
        type="monotone"
        dataKey="CS"
        stroke="white"
      />
    </LineChart>
  );
}
