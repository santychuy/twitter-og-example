import { Suspense } from "react";
import { createClient } from "./utils/supabase/server";

import Feed from "./components/Feed";
import Loading from "./components/Feed/loading";
import AuthButton from "./components/AuthButton/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthButton />
      {user !== null && <h1>Welcome {user.user_metadata.user_name}!</h1>}
      <Suspense fallback={<Loading />}>
        <Feed />
      </Suspense>
    </main>
  );
}
