import { useState } from "react";
import { Select } from "antd";
import "../CSS/EventType.css";

const OPTIONS = ["Music", "Art", "Dance", "Theater", "Other"];

export default function EventType_FindEvent({ setEventType }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const handleChange = (items) => {
    setSelectedItems(items);
    setEventType(items); // Update the parent component's state
  };

  return (
    <div>
      <div className="event-type-header">Event Type</div>
      <Select
        mode="multiple"
        placeholder="Select Event Type"
        value={selectedItems}
        onChange={handleChange}
        allowClear={true}
        defaultActiveFirstOption={true}
        style={{
          width: "100%",
        }}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
    </div>
  );
}
