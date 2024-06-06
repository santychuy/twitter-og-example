import { createClient } from "../../utils/supabase/server";

import AuthButton from "./client";

const AuthButtonServer = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AuthButton session={session} />;
};

export default AuthButtonServer;
