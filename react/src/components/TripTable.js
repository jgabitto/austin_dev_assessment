import React, { useContext } from "react";
import { Table, Tag, Card, Row, Col, Spin } from "antd";
import { format } from "date-fns";

import DataContext from "../contexts/DataContext";

const columns = [
  {
    title: "Trip ID",
    dataIndex: "trip_id",
    key: "trip_id",
    fixed: "left",
    width: 200,
    align: "center",
  },
  {
    title: "Device ID",
    dataIndex: "device_id",
    key: "device_id",
    fixed: "left",
    width: 200,
    align: "center",
  },
  {
    title: "Modified Date",
    dataIndex: "modified_date",
    key: "modified_date",
    width: 150,
    align: "center",
  },
  {
    title: "Vechicle Type",
    key: "vehicle_type",
    dataIndex: "vehicle_type",
    width: 150,
    align: "center",
    render: (vehicleType) => {
      let color = { scooter: "green" };
      return (
        <Tag color={color[vehicleType]} key={vehicleType}>
          {vehicleType.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Trip Duration",
    dataIndex: "trip_duration",
    key: "trip_duration",
    width: 150,
    align: "center",
    render: (time) => {
      let formattedTime = `${(time / 60).toFixed(2)}`.split(".");
      return (
        <>
          {time &&
            `${formattedTime[0]} minutes and ${formattedTime[1]} seconds`}
        </>
      );
    },
  },
  {
    title: "Trip Start Date",
    dataIndex: "start_time",
    key: "start_time",
    width: 150,
    align: "center",
    render: (time) => <>{time && format(new Date(time), "MMMM dd, yyyy")}</>,
  },
  {
    title: "Trip End Date",
    dataIndex: "end_time",
    key: "end_time",
    width: 150,
    align: "center",
    render: (time) => <>{time && format(new Date(time), "MMMM dd, yyyy")}</>,
  },
  {
    title: "Trip Day",
    dataIndex: "start_time",
    key: "start_time",
    width: 150,
    align: "center",
    render: (time) => <>{time && format(new Date(time), "EEEE")}</>,
  },
  {
    title: "Trip Start Time",
    dataIndex: "start_time",
    key: "start_time",
    width: 150,
    align: "center",
    render: (time) => <>{time && format(new Date(time), "pp")}</>,
  },
  {
    title: "Trip End Time",
    dataIndex: "end_time",
    key: "end_time",
    width: 150,
    align: "center",
    render: (time) => <>{time && format(new Date(time), "pp")}</>,
  },
  {
    title: "Council District Start",
    dataIndex: "council_district_start",
    key: "council_district_start",
    width: 150,
    align: "center",
  },
  {
    title: "Council District End",
    dataIndex: "council_district_end",
    key: "council_district_end",
    width: 150,
    align: "center",
  },
  {
    title: "Census Geoid Start",
    dataIndex: "census_geoid_start",
    key: "census_geoid_start",
    width: 150,
    align: "center",
  },
  {
    title: "Census Geoid End",
    dataIndex: "census_geoid_end",
    key: "census_geoid_end",
    width: 150,
    align: "center",
  },
];

const TripTable = () => {
  const [data] = useContext(DataContext);

  return (
    <Row justify="center">
      <Col>
        <Card style={{ width: 1000 }} size="small">
          {data ? (
            <Table
              columns={columns}
              dataSource={data.data}
              scroll={{ x: 1000 }}
              size="small"
              pagination={{
                pageSizeOptions: ["5", "10"],
                defaultPageSize: "5",
              }}
            />
          ) : (
            <Spin />
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default TripTable;
