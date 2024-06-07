import { Suspense } from "react";
import { redirect } from "next/navigation";

import { createClient } from "./utils/supabase/server";
import Feed from "./components/Feed";
import Loading from "./components/Feed/loading";
import AuthButton from "./components/AuthButton/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) redirect("/login");

  return (
    <main className="flex min-h-screen flex-col items-center">
      <AuthButton />

      <Suspense fallback={<Loading />}>
        <Feed />
      </Suspense>
    </main>
  );
}
