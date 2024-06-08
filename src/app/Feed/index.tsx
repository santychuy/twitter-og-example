import { createClient } from "@/utils/supabase/server";
import Post from "@/components/Post";

const Feed = async () => {
  const supabase = createClient();

  const { data: posts } = await supabase
    .from("posts")
    .select("*, users(avatar_url, username, name)")
    .order("created_at", { ascending: false });

  return (
    <section className="flex flex-col px-0.5 min-h-screen max-w-[600px] gap-3">
      {posts?.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          avatarUrl={post.users?.avatar_url}
          username={post.users?.username}
          name={post.users?.name}
        />
      ))}
    </section>
  );
};

export default Feed;
