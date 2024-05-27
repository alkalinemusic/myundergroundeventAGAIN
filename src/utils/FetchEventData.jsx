import React, { useEffect } from "react";
import { supabase } from "../lib/helper/supabaseClient";

const FetchEventData = () => {
  useEffect(() => {
    const fetchVenueName = async () => {
      const { data, error } = await supabase
        .from("Events")
        .select("venue")
        .eq("id", 3)
        .single();

      if (error) {
        console.error("Error fetching venue naem:", error);
      } else {
        console.log("Venue name", data.venue);
      }
    };
    fetchVenueName();
  }, []);
  return <div>Check the console for the venue name of event ID 3.</div>;
};

export default FetchEventData;
