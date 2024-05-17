import React, { useEffect, useState } from "react";
import { supabase } from "./../lib/helper/supabaseClient";

export default function LoginButton() {
  const [user, setUser] = useState(null);

  const githubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  //   useEffect(() => {
  //     const session = supabase.auth.session();
  //     console.log("Session", session);
  //   }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      setUser(session?.user);
      if (error) {
        console.error("Error fetching session:", error);
      } else {
        console.log("you did it!");
      }
    };

    fetchSession();
  }, []);

  return (
    <div>
      {user ? (
        <h3>Authenticated!</h3>
      ) : (
        <button onClick={githubLogin}>Login with Github</button>
      )}
    </div>
  );
}
