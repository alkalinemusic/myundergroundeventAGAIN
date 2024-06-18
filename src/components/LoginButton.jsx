import { useEffect, useState } from "react";
import { supabase } from "./../lib/helper/supabaseClient";
import "../CSS/Loginbutton.css";

//  spacing because VS CODE is obnoxious

export default function LoginButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      setUser(session?.user);
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          switch (event) {
            case "SIGNED_IN":
              setUser(session);
              break;
            case "SIGNED_OUT":
              setUser(null);
              break;
            default:
          }
        }
      );
      if (error) {
        console.error("Error fetching session:", error);
      } else {
        console.log("Fetching succesful!");
      }

      return authListener?.unsubscribe;
    };
    const unsubscribe = fetchSession();

    return () => {
      unsubscribe?.then((unsub) => unsub && unsub());
    };
    // fetchSession();
  }, []);

  const githubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const facebookLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  };

  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Authenticated!</h3>
          <button className="loginOut-buttons" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <div>
            <button className="login-buttons" onClick={githubLogin}>
              Login with Github
            </button>
          </div>
          <div>
            <button className="login-buttons" onClick={facebookLogin}>
              Login with Facebook
            </button>
          </div>

          <div>
            <button className="login-buttons" onClick={googleLogin}>
              Login with Google
            </button>
          </div>
        </>
      )}
    </div>
  );
}
