import React from "react";
import { useState } from "react";
import { Select } from "antd";
import "../CSS/EventType.css";

const OPTIONS = ["Music", "Art", "Dance", "Theater", "Other"];

export default function EventType_FindEvent() {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <div>
      <div className="event-type-header">Event Type</div>
      <Select
        mode="multiple"
        placeholder="Music"
        value={selectedItems}
        onChange={setSelectedItems}
        allowClear="true"
        defaultActiveFirstOption="true"
        style={{
          width: "80%",
        }}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
    </div>
  );
}

// import React, { useState } from 'react';
// const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
// const App = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
//   return (
//     <Select
//       mode="multiple"
//       placeholder="Inserted are removed"
//       value={selectedItems}
//       onChange={setSelectedItems}
//       style={{
//         width: '100%',
//       }}
//       options={filteredOptions.map((item) => ({
//         value: item,
//         label: item,
//       }))}
//     />
//   );
// };
