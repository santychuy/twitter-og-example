import { Suspense } from "react";
import { redirect } from "next/navigation";

import { createClient } from "./utils/supabase/server";
import MainLayout from "./Main/layout";
import AsideLayout from "./Aside/layout";
import FormTweet from "./components/FormTweet";
import Feed from "./components/Feed";
import Loading from "./components/Feed/loading";
import AuthButton from "./components/AuthButton/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) redirect("/login");

  return (
    <div className="flex min-h-screen">
      <AsideLayout>Left</AsideLayout>
      <MainLayout>
        <FormTweet avatarUrl={user.user_metadata.avatar_url} />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
      </MainLayout>
      <AsideLayout className="flex justify-end">
        <AuthButton />
      </AsideLayout>
    </div>
  );
}
