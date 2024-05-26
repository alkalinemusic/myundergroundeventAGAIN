import "../CSS/EventDetails.css";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import localImageOne from "../assets/IMG_20240418_130845_818.jpg";
import localImageTwo from "../assets/IMG-20240429-WA0003.jpg";
import data from "../data/EventsDetails.json";

export default function EventDetails() {
  const { id } = useParams();
  const event = data.events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

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
              {/* // TODO: add addresses to the EventDetails.json objects. then parse out here */}
              <br />
              474 Massachusetts Ave
              <br />
              Cambridge, MA 02139
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
                <span className="row-header">{event.ageRequirements}</span>
              </div>
              <div className="row-container">
                <span className="row-header">{event.typeOfEvent}</span>
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
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {event.pictures.map((picture, index) => (
            <Image
              key={index}
              src={picture}
              alt={`Picture for event ${event.name} not found`}
              className="flyer-poster-one"
            />
          ))}
          {/* THESE ARE PLACEHOLDERS */}
          {/* <Image className="flyer-poster-one" width={250} src={localImageOne} />
          <Image className="flyer-poster-two" width={250} src={localImageTwo} /> */}
        </Image.PreviewGroup>
        <section className="social-media-links-section">
          <div className="row-container">
            <span className="row-header">
              <strong>Event Info&nbsp;&nbsp;&nbsp;</strong>
            </span>
            <ul className="social-links-ul">
              {Object.entries(event.organizerSocialMedia).map(
                ([platform, link], index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="row-container">
            <span className="row-header">Artist social links</span>
            <ul className="social-links-ul">
              {Object.entries(event.artistsLinks).map(
                ([artist, link], index) => (
                  <li key={index}>
                    <a
                      href={link}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artist}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="row-container">
            <span className="row-header">organizer@eventemail.com</span>
          </div>
        </section>
      </div>
    </div>
  );
}
