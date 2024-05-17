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
