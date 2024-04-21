import React from "react";
import { DatePicker, Radio, Space } from "antd";
import "../CSS/FindEvent.css";
import dayjs from "dayjs"; // Import dayjs. the maxDate property expects this AntD

// Using dayjs to create the date objects
const minDate = dayjs().subtract(1, "day"); // Yesterday as minDate
const maxEndDate = dayjs(); // Today as the max end date

function disabledStartDate(current) {
  // Disable all dates before the minimum date
  return current && current.isBefore(minDate, "day");
}

function disabledEndDate(current) {
  // Disable all dates after today for the end date
  return current && current.isAfter(maxEndDate, "day");
}

export default function FindEvent() {
  return (
    <div>
      <h1 className="find-event-header">Find an event</h1>
      <div className="form-container">
        <div className="start-date-header">Start Date</div>
        <DatePicker
          popupClassName="custom-popup-class"
          className="range-picker-custom"
          disabledDate={disabledStartDate}
          size={"small"}
        />
        <div className="end-date-header">End Date</div>
        <DatePicker
          popupClassName="custom-popup-class"
          className="range-picker-custom"
          maxDate={maxEndDate}
          size={"small"}
        />
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
// import { DatePicker, Radio, Space } from 'antd';
// import FindEvent from "./FindEvent";

// type SizeType = ConfigProviderProps['componentSize'];

// const { RangePicker } = DatePicker;

// const App: React.FC = () => {
//   const [size, setSize] = useState<SizeType>('middle');

//   const handleSizeChange = (e: RadioChangeEvent) => {
//     setSize(e.target.value);
//   };

//   return (
//     <Space direction="vertical" size={12}>
//       <Radio.Group value={size} onChange={handleSizeChange}>
//         <Radio.Button value="large">Large</Radio.Button>
//         <Radio.Button value="middle">middle</Radio.Button>
//         <Radio.Button value="small">Small</Radio.Button>
//       </Radio.Group>
//       <DatePicker size={size} />
//       <DatePicker size={size} picker="month" />
//       <RangePicker size={size} />
//       <DatePicker size={size} picker="week" />
//     </Space>
//   );
// };

// export default App;
