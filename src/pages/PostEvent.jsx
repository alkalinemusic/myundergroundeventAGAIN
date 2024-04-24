import React from "react";
import { TimePicker, DatePicker, Input, Button } from "antd";
import dayjs from "dayjs";
import "../CSS/PostEvent.css";

export default function PostEvent() {
  return (
    <div>
      <h1 className="post-event-header">Post An Event</h1>
      <div className="event-name-header">Event Name</div>
      <Input className="event-name-input" placeholder="Event Name" />
      <div className="event-location-header">Event Location</div>
      {/* MAKE THIS AN ADDRESS FORM */}
      <Input className="event-location-input" placeholder="Event Location" />
      {/* CHANGE TO REFLECT START AND END TIMES */}
      <div className="event-start-time-header">Event Time</div>
      <TimePicker.RangePicker
        className="event-start-time-input"
        placeholder="Event Start Time"
      />
      {/* <div className="event-end-time-header">Event End Time</div>
      <Input className="event-end-time-input" placeholder="Event End Time" /> */}
      <div className="performing-artist-header">Artist(s) performing</div>
      <Input
        className="performing-artist-input"
        placeholder="Artist(s) Performing"
      />
      <div className="event-socials-header">Event Social Media Links</div>
      <Input
        className="event-socials-input"
        placeholder="Event Social Media Links"
      />
      <div className="artist-socials-header">Artist Social Media Links</div>
      <Input
        className="artist-socials-input"
        placeholder="Artist Social Media Links"
      />
      <div className="entrance-fee-header">Entrance Fee</div>
      <Input className="entrance-fee-input" placeholder="$ Entrance Fee" />
      <div className="event-type-header">Event Type</div>
      <Input className="event-type-input" placeholder="Event Type" />
      <div className="age-requirements-header">Age Requirements</div>
      <Input className="age-requirements-input" placeholder="Age Reqs." />
      <div className="event-style-header">Event Style</div>
      <Input
        className="event-style-input"
        placeholder="Rock, Techno, Punk, etc."
      />
      <div className="event-flyer-header">Event Flyer/Poster</div>
      <Input className="event-flyer-input" placeholder="Flyer/Poster" />
      <div className="organizer-email-header">Organizer Email</div>
      <Input className="organizer-email-input" placeholder="Organizer Email" />
    </div>
  );
}

const format = "HH:mm";

<TimePicker defaultValue={dayjs("12:08", format)} format={format} />;
