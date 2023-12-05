import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SuccessPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        //value..data.user
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        } //if value.data user is undefined, dont perform .user method
      });
    }

    getUserData(); //initialize the function
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  console.log(user);

  return (
    <div className="App" id="success">
      <header className="App-header">
        {Object.keys(user).length !== 0 ? (
          <>
            <h1>Success</h1>
            <button onClick={() => signOutUser()}>signOut</button>
          </>
        ) : (
          <>
            <h1>User Not Logged in</h1>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          </>
        )}
      </header>
    </div>
  );
};

export default SuccessPage;
