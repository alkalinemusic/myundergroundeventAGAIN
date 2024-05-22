import "../CSS/SearchResultsStyle.css";
import EventDetails from "./EventDetails";
import { Link } from "react-router-dom"; // Make sure this is imported

const events = [
  {
    id: 1,
    date: "May 12th",
    title: "A Night of Techno",
    artists: "NXOR, NoizCode, Switch Angel",
    venue: "Faro Cafe",
  },
  {
    id: 2,
    date: "June 6th",
    title: "A Night of Techno",
    artists: "NXOR, NoizCode, Switch Angel",
    venue: "Faro Cafe",
  },
  {
    id: 3,
    date: "July 12th",
    title: "Summer Beats",
    artists: "DJ Echo, BassHound, Lyra",
    venue: "Sunset Lounge",
  },
  {
    id: 4,
    date: "August 15th",
    title: "Electro Nights",
    artists: "Electra, Pulse, Neon Dreams",
    venue: "The Electric Room",
  },
  {
    id: 5,
    date: "September 20th",
    title: "Rave Revival",
    artists: "Beat Crusher, Sonic Boom, Vibe Tribe",
    venue: "The Warehouse",
  },
  {
    id: 6,
    date: "October 31st",
    title: "Halloween Howl",
    artists: "Ghostly Grooves, Spooky Sounds, Cryptic DJ",
    venue: "Mystery Mansion",
  },
];

export default function SearchResults() {
  const loopArrayObject = () => {
    return events.map((event) => (
      // this will need updating to accept the actual event ID
      // to={`/event/${event.id}`}
      <Link key={event.id} to="/eventDetails/Id">
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
