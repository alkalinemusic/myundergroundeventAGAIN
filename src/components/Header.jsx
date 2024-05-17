import { Link } from "react-router-dom"; // Make sure this is imported
import LoginButton from "./LoginButton";
// import "../../src/index.css";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1 className="header-page-header">My Underground Events</h1>
      </Link>
      <Link className="header-page-header" to="/eventDetails/Id">
        <h6>Details test page</h6>
      </Link>
      <Link className="header-page-header" to="/searchResults">
        <h6>Search Results test page</h6>
      </Link>
      <div>
        {/* FIXIT: these links will eventually go in the navbar */}
        <div>
          <Link className="route-links" to="/about">
            <span>About</span>
          </Link>
        </div>
        <div className="login-button">
          <LoginButton /> {/* Use the LoginButton component */}
        </div>

        {/* <div>
          <Link className="route-links" to="/findevent">
            Find an Event
          </Link>
        </div>
        <div>
          <Link className="route-links" to="/postevent">
            Post an Event
          </Link>
        </div> */}
      </div>
    </div>
  );
}
