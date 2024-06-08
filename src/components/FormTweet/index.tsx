/* eslint-disable @typescript-eslint/no-misused-promises */
import { Avatar, Button } from "@nextui-org/react";
import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

interface FormTweetProps {
  avatarUrl: string;
}

const FormTweet = ({ avatarUrl }: FormTweetProps) => {
  const addPost = async (formData: FormData) => {
    "use server";

    const content = formData.get("content") as string | null;

    if (content === null) return;

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user === null) return;

    await supabase.from("posts").insert({ content, user_id: user.id });

    revalidatePath("/");
  };

  return (
    <>
      <Avatar src={avatarUrl} size="sm" className="mb-2 ml-5" />
      <form
        action={addPost}
        className="flex flex-col pb-4 gap-3 border-b border-white/20"
      >
        <textarea
          placeholder="¿En qué piensas?"
          name="content"
          id="content"
          className="w-full h-[100px] px-5 py-3 bg-transparent resize-none focus:outline-slate-500"
          autoComplete="off"
          spellCheck={false}
        />
        <Button
          type="submit"
          size="sm"
          className="max-w-20 self-end mr-2 hover:bg-blue-400"
        >
          Post
        </Button>
      </form>
    </>
  );
};

export default FormTweet;
