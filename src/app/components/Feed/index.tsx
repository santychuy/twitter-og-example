import { createClient } from "../../utils/supabase/server";

const Feed = async () => {
  const supabase = createClient();

  const { data: posts } = await supabase.from("posts").select("*, users(*)");

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
};

export default Feed;
