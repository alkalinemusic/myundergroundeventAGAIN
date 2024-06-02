import React, { useEffect } from "react";
import { supabase } from "../lib/helper/supabaseClient";

const FetchEventData = () => {
  useEffect(() => {
    const fetchVenueNames = async () => {
      const { data, error } = await supabase
        .from("Events")
        .select("id, date, description, artists, venue");

      if (error) {
        console.error("Error fetching venue names:", error);
      } else {
        data.forEach((event) => {
          //   console.log(
          //     `Event ID: ${event.id}, Venue name: ${event.venue},
          //     Date: ${event.date}, Artists: ${event.artists}, Description: ${event.description}`
          //   );
        });
      }
    };

    fetchVenueNames();
  }, []);

  return <div>Check the console for the venue names of all events.</div>;
};

export default FetchEventData;
