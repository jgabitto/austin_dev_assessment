import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

let ridesPerMonth = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};
let distancePerMonth = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

export const DataStore = ({ children }) => {
  const [data, setData] = useState();

  useEffect(() => {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    const getData = () => {
      axios
        .get("https://data.austintexas.gov/resource/7d8e-dm7r.json")
        .then((res) => {
          let totalUniqueVehicles = new Set();
          let totalDistance = res.data.reduce((acc, curr, index) => {
            curr.key = index;
            totalUniqueVehicles.add(curr.device_id);
            ridesPerMonth[curr.month] += 1;
            distancePerMonth[curr.month] += Math.ceil(
              curr.trip_distance * 0.000621371192
            );
            return (acc += Number(curr.trip_distance));
          }, 0);

          setData({
            data: res.data,
            numTrips: res.data.length,
            totalDistance,
            totalUniqueVehicles,
            ridesPerMonth,
            distancePerMonth,
          });
        });
    };
    getData();
  }, []);

  return <Context.Provider value={[data]}>{children}</Context.Provider>;
};

export default Context;
