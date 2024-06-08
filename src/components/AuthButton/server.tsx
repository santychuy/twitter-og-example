import { createClient } from "@/utils/supabase/server";

import AuthButton from "./client";

const AuthButtonServer = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AuthButton user={user} />;
};

export default AuthButtonServer;
