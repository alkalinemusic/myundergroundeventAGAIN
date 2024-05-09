import "../CSS/EventDetails.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import localImageOne from "../assets/IMG_20240418_130845_818.jpg";
import localImageTwo from "../assets/IMG-20240429-WA0003.jpg";

export default function EventDetails() {
  return (
    <div className="event-details-main">
      <h3 className="search-results-h3">Faro Cafe: A Night of Techno</h3>
      <div className="artist-name-header">
        <span className="artist-header row-header ">{/* Who */}</span>
        <span className="with-abbr">w/&nbsp;&nbsp;</span>NXOR, NoizCode, Switch
        Angel
      </div>
      <div className="search-results-section">
        <div className="where-header">Where</div>
        <hr className="style-four-a" />

        <div className="venue-name-container">
          <span className="row-header-venue ">
            <span className="venue">Zuzu Middle East</span>
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
            <span className="when">June 25th 8pm</span>
          </span>
        </div>
        {/*  THIS HR IS TEMPORARY */}
        <hr />
        <div className="row-container">
          <span className="row-header">$12 at door/ $8 RSVP</span>
        </div>
        <div className="row-container">
          <span className="row-header">Music Event</span>
        </div>
        <div className="row-container">
          <span className="row-header">21+</span>
        </div>
        <div className="row-container">
          <span className="row-header">Techno</span>
        </div>
        {/* <div className="row-container">
          <span className="row-header">
            Flyer
          </span>
        </div> */}

        <div className="row-container">
          <span className="row-header">
            {/* <stron>Event social links&nbsp;&nbsp;&nbsp;</stron g> */}
          </span>
          <Link
            className="social-link"
            to="https://www.facebook.com/photo?fbid=1143031680445301&set=a.1143031697111966"
          >
            Event Info
          </Link>
        </div>
        <div className="row-container">
          <span className="row-header">{/* Artist social links */}</span>
          <Link
            className="social-link"
            to="https://www.instagram.com/noizcode/"
          >
            Artist Info
          </Link>
        </div>
        <div className="row-container">
          <span className="row-header">organizer@eventemail.com</span>
        </div>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image className="flyer-poster-one" width={250} src={localImageOne} />
          <Image className="flyer-poster-two" width={250} src={localImageTwo} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
