import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";
import { Image } from "antd";
import "../CSS/EventDetails.css";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const { data, error } = await supabase
        .from("Events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching event:", error);
      } else {
        setEvent(data);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Event not found</div>;
  }

  // Split the pictures, organizerSocialMedia, and artistSocials strings into arrays
  const pictures = event.pictures ? event.pictures.split(",") : [];
  const organizerSocialMedia = event.orgSocials
    ? event.orgSocials.split(",")
    : [];
  const artistSocials = event.artistSocials
    ? event.artistSocials.split(",")
    : [];

  return (
    <div className="event-details-main">
      <h3 className="search-results-h3">{event.title}</h3>
      <div className="artist-name-header">
        <span className="artist-header row-header"></span>
        <span className="with-abbr">w/&nbsp;&nbsp;</span>
        {event.artists}
      </div>
      <div className="search-results-section">
        <section className="section-one-container">
          <div className="where-header">Where</div>
          <hr className="style-four-a" />
          <div className="venue-name-container">
            <span className="row-header-venue">
              <span className="venue">{event.venue}</span>
              <br />
              {event.address ? (
                <>
                  {event.address}
                  <br />
                  {/* Cambridge, MA 02139 */}
                </>
              ) : (
                <div>No Address given</div>
              )}
            </span>
          </div>
          <div className="when-header">When</div>
          <hr className="style-four-a" />
          <div className="venue-when-container">
            <span className="row-header-when">
              <span className="when">{event.date}</span>
            </span>
          </div>
        </section>
        <section className="section-two-plus-descripton">
          <section className="section-two-container row">
            <section className="section-two-left column">
              <div className="row-container">
                <span className="row-header">{event.cost}</span>
              </div>
              <div className="row-container">
                <span className="row-header">{event.ageReq}</span>
              </div>
              <div className="row-container">
                <span className="row-header">{event.eventType}</span>
              </div>
              <div className="row-container">
                <span className="row-header">{event.style}</span>
              </div>
            </section>
            <section className="section-two-left column"></section>
          </section>
          <div className="event-description-container">
            <div className="event-description">{event.description}</div>
          </div>
        </section>

        <Image.PreviewGroup
        // preview={{
        //   onChange: (current, prev) =>
        //     console.log(`current index: ${current}, prev index: ${prev}`),
        // }}
        >
          {pictures.length > 0 ? (
            pictures.map((picture, index) => (
              <Image
                key={index}
                src={picture}
                alt={`Picture for event ${event.name} not found`}
                className="flyer-poster-one"
              />
            ))
          ) : (
            <div>No pictures available</div>
          )}
        </Image.PreviewGroup>

        <section className="social-media-links-section">
          <div className="row-container">
            <span className="row-header">
              <strong>Event Info&nbsp;&nbsp;&nbsp;</strong>
            </span>
            <ul className="social-links-ul">
              {organizerSocialMedia.map((link, index) => (
                <li key={index}>
                  <a
                    href={link}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="row-container">
            <span className="row-header">Artist social links</span>
            <ul className="social-links-ul">
              {artistSocials.map((link, index) => (
                <li key={index}>
                  <a
                    href={link}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="row-container">
            <span className="row-header">{event.orgEmail}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
