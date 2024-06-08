import { Suspense } from "react";
import { redirect } from "next/navigation";

import Feed from "@/app/Feed";
import Loading from "@/app/Feed/loading";
import FormTweet from "@/components/FormTweet";
import AuthButton from "@/components/AuthButton/server";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user === null) redirect("/login");

  return (
    <div className="flex min-h-screen">
      <aside className="min-w-32 max-w-52 basis-[208px] shrink-[999999] p-3">
        Left
      </aside>
      <main className="flex flex-col pt-5 grow min-w-64 basis-[400px] border-l border-r border-white/30">
        <FormTweet avatarUrl={user.user_metadata.avatar_url} />
        <Suspense fallback={<Loading />}>
          <Feed />
        </Suspense>
      </main>
      <aside className="min-w-32 max-w-52 basis-[208px] shrink-[999999] p-3 flex justify-end">
        <AuthButton />
      </aside>
    </div>
  );
}
