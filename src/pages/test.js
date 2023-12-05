// import { Typography, Button } from "@supabase/ui";
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(`Supabasekey: ${supabaseKey}`);
// console.log(`SupabaseURL: ${supabaseUrl}`);

// const Container = (props) => {
//   const { user } = Auth.useUser();
//   if (user)
//     return (
//       <>
//         <Typography.Text>Signed in: {user.email}</Typography.Text>
//         <Button block onClick={() => props.supabaseClient.auth.signOut()}>
//           Sign out
//         </Button>
//       </>
//     );
//   return props.children;
// };

// export default function AuthBasic() {
//   return (
//     <Auth.UserContextProvider supabaseClient={supabase}>
//       <Container supabaseClient={supabase}>
//         <Auth supabaseClient={supabase} />
//       </Container>
//     </Auth.UserContextProvider>
//   );
// }
