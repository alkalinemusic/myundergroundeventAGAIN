// FindEvent.js
import { DatePicker, Input, Button } from "antd";
import "../CSS/FindEvent.css";
import dayjs from "dayjs";
import RadiusPicker from "../components/RadiusPicker";
import EventType_FindEvent from "../components/EventType_FindEvent";
import { useState } from "react";

const minDate = dayjs().subtract(1, "day");
const maxEndDate = dayjs();

function disabledStartDate(current) {
  return current && current.isBefore(minDate, "day");
}

function disabledEndDate(current) {
  return current && current.isBefore(maxEndDate, "day");
}

export default function FindEvent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(0); // Assuming RadiusPicker updates this state
  const [eventType, setEventType] = useState("");

  const handleSearch = () => {
    console.log("handle search triggered");
    const searchParams = {
      startDate,
      endDate,
      location,
      radius,
      eventType,
    };
    console.log("Search params", searchParams);
  };
  return (
    <div>
      <h1 className="find-event-header">Find an event</h1>
      <div className="form-container">
        <div className="start-date-header">Start Date</div>
        <DatePicker
          popupClassName="custom-popup-class"
          className="input-field"
          disabledDate={disabledStartDate}
          placeholder="Start Date"
          size="small"
          onChange={(date) => setStartDate(dayjs(date).toISOString())}
        />
        <div className="end-date-header">End Date</div>
        <DatePicker
          popupClassName="custom-popup-class"
          className="input-field"
          disabledDate={disabledEndDate}
          placeholder="End Date"
          size="small"
          onChange={(date) => setEndDate(dayjs(date).toISOString())}
        />
        <div className="location-and-radius-container">
          <div className="location-input-header">Location</div>
          <Input
            className="input-field"
            placeholder="Zip"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <RadiusPicker setRadius={setRadius} />{" "}
          {/* Assuming RadiusPicker updates the state */}
          <EventType_FindEvent setEventType={setEventType} />{" "}
          {/* Assuming EventType_FindEvent updates the state */}
        </div>
        <div className="search-button-find-event">
          <Button
            className="find-event-search-button"
            type="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
