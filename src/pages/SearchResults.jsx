import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";
import "../CSS/SearchResultsStyle.css";

export default function SearchResults() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("Events").select("*");

      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const loopArrayObject = () => {
    return events.map((event) => (
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="search-results-container">
      <div>{loopArrayObject()}</div>
    </section>
  );
}
