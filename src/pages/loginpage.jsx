import React from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(`Supabasekey: ${supabaseKey}`);
console.log(`SupabaseURL: ${supabaseUrl}`);

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    console.log("auth");
    if (event === "SIGNED_IN") {
      //forward to success URL
      navigate("/success");
    }
  });
  return (
    <div className="login">
    <div className="App">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord","google"]}
      />
    </div>
    </div>
  );
};

export default Login;
