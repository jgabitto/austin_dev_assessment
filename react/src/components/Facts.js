import React, { useContext, useState } from "react";
import { List, Card, Radio } from "antd";

import DataContext from "../contexts/DataContext";

const actions = [
  { label: "In ft", value: "ft" },
  { label: "In meters", value: "meters" },
  { label: "In miles", value: "mi" },
];

const Facts = () => {
  const [data] = useContext(DataContext);
  const [totalDistance, setTotalDistance] = useState("Click below");
  const [value, setValue] = useState();

  const calculateDistance = (type, distance) => {
    if (type === "mi")
      setTotalDistance(
        `${Math.ceil(distance * 0.000621371192).toLocaleString()} ${type}`
      );
    else if (type === "meters")
      setTotalDistance(`${Math.ceil(distance).toLocaleString()} ${type}`);
    else if (type === "ft")
      setTotalDistance(
        `${Math.ceil(distance * 3.2808).toLocaleString()} ${type}`
      );
    setValue({ value: type });
  };

  let facts = data
    ? [
        {
          title: "Total # of Trips",
          body: data.numTrips,
          key: 1,
        },
        {
          title: "Total Distance Traveled",
          body: totalDistance,
          key: 2,
          actions: [
            <Radio.Group
              options={actions}
              value={value}
              onChange={(e) =>
                calculateDistance(e.target.value, data.totalDistance)
              }
              optionType="button"
              buttonStyle="solid"
            />,
          ],
        },
        {
          title: "Total # of unique vehicle IDs vehicles used",
          body: data.totalUniqueVehicles.size,
          key: 3,
        },
      ]
    : null;

  return data ? (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={facts}
      size="large"
      renderItem={(item) => (
        <List.Item key={item.key}>
          <Card
            key={item.key}
            title={item.title}
            actions={item.actions && [item.actions]}
            loading={data ? false : true}
          >
            {item.body}
          </Card>
        </List.Item>
      )}
    />
  ) : null;
};

export default Facts;
