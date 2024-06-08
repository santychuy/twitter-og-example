import { Avatar, Button } from "@nextui-org/react";

interface FormTweetProps {
  avatarUrl: string;
}

const FormTweet = ({ avatarUrl }: FormTweetProps) => {
  return (
    <>
      <Avatar src={avatarUrl} size="sm" className="mb-2 ml-5" />
      <form className="flex flex-col pb-4 gap-3 border-b border-white/20">
        <textarea
          placeholder="¿En qué piensas?"
          name="content"
          id="content"
          className="w-full h-[100px] px-5 py-3 bg-transparent resize-none focus:outline-slate-500"
          autoComplete="off"
          spellCheck={false}
        />
        <Button size="sm" className="max-w-20 self-end mr-2 hover:bg-blue-400">
          Post
        </Button>
      </form>
    </>
  );
};

export default FormTweet;
