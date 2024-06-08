/* eslint-disable @typescript-eslint/no-confusing-void-expression */
"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  CardFooter,
} from "@nextui-org/react";
import { IconMessage2, IconHeart, IconRepeat } from "@tabler/icons-react";

interface PostProps {
  content: string;
  avatarUrl?: string;
  username?: string;
  name?: string;
}

const Post = ({ avatarUrl, content, username, name }: PostProps) => {
  return (
    <Card className="min-w-[340px] bg-transparent shadow-none border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between gap-2">
        <div className="flex gap-3">
          <Avatar radius="full" size="md" src={avatarUrl} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{username}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 text-medium">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="flex items-center justify-around">
        <IconMessage2 className="h-4 cursor-pointer" />
        <IconHeart className="h-4 cursor-pointer" />
        <IconRepeat className="h-4 cursor-pointer" />
      </CardFooter>
    </Card>
  );
};

export default Post;
