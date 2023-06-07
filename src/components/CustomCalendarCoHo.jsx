import { useState } from "react";
import { Table } from "antd";
import { dataSource } from "src/app/data/CoHoPeople";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDates = () => {
    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const currentDate = new Date(selectedDate);
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 7);

    const dates = [];
    for (let i = 0; i < 15; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push({ date: date.toDateString(), columnName: `${weekDays[date.getDay()]} ${date.getDate()}` });
    }

    console.log(dates);
    return dates;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Free days",
      dataIndex: "freeDays",
      key: "freeDays",
    },
    ...getDates().map((date, index) => ({
      title: (
        <>
          <div>{date.columnName.split(" ")[0]}</div>
          <div style={index === 7 ? { color: "red" } : {}}>{date.columnName.split(" ")[1]}</div>
        </>
      ),
      dataIndex: `entries.${date.date}`,
      key: date.date,
      render: (_, record) => {
        const entry = record.entries.find((entry) => entry[date.date]);
        return entry ? entry[date.date] : "";
      },
      align: "center",
    })),
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Calendar;
