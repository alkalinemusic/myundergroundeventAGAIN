import "../CSS/SearchResultsStyle.css";
import EventDetails from "./EventDetails";
import { Link } from "react-router-dom"; // Make sure this is imported
import data from "../data/EventsDetails.json";

export default function SearchResults() {
  const loopArrayObject = () => {
    return data.events.map((event) => (
      // this will need updating to accept the actual event ID
      // to={`/event/${event.id}`}
      <Link key={event.id} to={`/eventDetails/${event.id}`}>
        <div key={event.id} className="result-detail-container">
          <div className="border-top-line"></div>
          <div className="detail-date">{event.date}</div>
          <div className="detail-title">{event.title}</div>
          <div className="detail-artists">{event.artists}</div>
          <div className="detail-venue">{event.venue}</div>
        </div>
      </Link>
    ));
  };

  return (
    <section className="search-results-container">
      <div>{loopArrayObject()}</div>
    </section>
  );
}
