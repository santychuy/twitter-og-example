/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

import { createClient } from "../../utils/supabase/client";
import { GithubIcon } from "../icons";

interface AuthButtonClientProps {
  user: User | null;
}

const AuthButtonClient = ({ user }: AuthButtonClientProps) => {
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: "http://localhost:3001/auth/callback",
        },
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      router.refresh();
    } catch (error) {
      console.error("Error", error);
    }
  };

  if (user !== null) {
    return (
      <Button type="button" size="sm" radius="sm" onClick={logout}>
        Log Out
      </Button>
    );
  }

  return (
    <Button
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      onClick={handleSignIn}
    >
      <GithubIcon />
      Sign in with Github
    </Button>
  );
};

export default AuthButtonClient;
