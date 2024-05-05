import "../CSS/EventDetails.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import localImageOne from "../assets/IMG_20240418_130845_818.jpg";
import localImageTwo from "../assets/IMG-20240429-WA0003.jpg";

export default function EventDetails() {
  return (
    <div>
      <h3 className="search-results-h3">Faro Cafe: A Night of Techno</h3>
      <div className="search-results-section">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image className="flyer-poster-one" width={250} src={localImageOne} />
          <Image className="flyer-poster-two" width={250} src={localImageTwo} />
        </Image.PreviewGroup>
        <div className="row-container artist-name-header">
          <span className="row-header ">{/* Who */}</span>
          NXOR, NoizCode, Switch Angel
        </div>
        <div className="row-container">
          <span className="row-header">{/* When */}</span>
          June 25th 8pm
        </div>
        <div className="row-container">
          <span className="row-header">{/* Where */}</span>
          Zuzu Middle East&nbsp;&nbsp;{" "}
          <span>474 Massachusetts Ave, Cambridge, MA 02139</span>
        </div>

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
      </div>
    </div>
  );
}
