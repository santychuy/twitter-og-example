import { createClient } from "../../utils/supabase/server";
import Post from "../Post";

const Feed = async () => {
  const supabase = createClient();

  const { data: posts } = await supabase.from("posts").select("*, users(*)");

  return (
    <section className="flex flex-col px-0.5 min-h-screen max-w-[600px] border-l border-r border-white/30 gap-3">
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
