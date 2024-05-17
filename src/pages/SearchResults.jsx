import "../CSS/SearchResultsStyle.css";
import EventDetails from "./EventDetails";

export default function SearchResults() {
  return (
    <section className="search-results-container">
      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">{}</div>
        <div className="detail-title">A Night of Techno</div>
        <div className="detail-artists">NXOR, NoizCode, Switch Angel</div>
        <div className="detail-venue">Faro Cafe</div>
      </div>
      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">June 6th</div>
        <div className="detail-title">A Night of Techno</div>
        <div className="detail-artists">NXOR, NoizCode, Switch Angel</div>
        <div className="detail-venue">Faro Cafe</div>
      </div>

      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">July 12th</div>
        <div className="detail-title">Summer Beats</div>
        <div className="detail-artists">DJ Echo, BassHound, Lyra</div>
        <div className="detail-venue">Sunset Lounge</div>
      </div>

      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">August 15th</div>
        <div className="detail-title">Electro Nights</div>
        <div className="detail-artists">Electra, Pulse, Neon Dreams</div>
        <div className="detail-venue">The Electric Room</div>
      </div>

      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">September 20th</div>
        <div className="detail-title">Rave Revival</div>
        <div className="detail-artists">
          Beat Crusher, Sonic Boom, Vibe Tribe
        </div>
        <div className="detail-venue">The Warehouse</div>
      </div>

      <div className="result-detail-container">
        <div className="border-top-line"></div>
        <div className="detail-date">October 31st</div>
        <div className="detail-title">Halloween Howl</div>
        <div className="detail-artists">
          Ghostly Grooves, Spooky Sounds, Cryptic DJ
        </div>
        <div className="detail-venue">Mystery Mansion</div>
      </div>
    </section>
  );
}
