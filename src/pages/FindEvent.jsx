// FindEvent.js
import React from "react";
import { DatePicker, Input, Button } from "antd";
import "../CSS/FindEvent.css";
import dayjs from "dayjs";
import RadiusPicker from "../components/RadiusPicker";
import EventType_FindEvent from "../components/EventType_FindEvent";
import SearchResults from "./../components/SearchResults";

const minDate = dayjs().subtract(1, "day");
const maxEndDate = dayjs();

function disabledStartDate(current) {
  return current && current.isBefore(minDate, "day");
}

function disabledEndDate(current) {
  return current && current.isBefore(maxEndDate, "day");
}

export default function FindEvent() {
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
        />
        <div className="end-date-header">End Date</div>
        <DatePicker
          popupClassName="custom-popup-class"
          className="input-field"
          disabledDate={disabledEndDate}
          placeholder="End Date"
          size="small"
        />
        <div className="location-and-radius-container">
          <div className="location-input-header">Location</div>
          <Input className="input-field" placeholder="Zip" />
          <RadiusPicker />
          <EventType_FindEvent />
        </div>
        <div className="search-button-find-event">
          <Button className="find-event-search-button" type="primary">
            Search
          </Button>
        </div>
        <SearchResults />
      </div>
    </div>
  );
}
