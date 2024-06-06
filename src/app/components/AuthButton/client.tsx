/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { type Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import { createClient } from "../../utils/supabase/client";
import { GithubIcon } from "../icons";

interface AuthButtonClientProps {
  session: Session | null;
}

const AuthButtonClient = ({ session }: AuthButtonClientProps) => {
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

  if (session !== null) {
    return (
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={logout}
      >
        Log Out
      </button>
    );
  }

  return (
    <button
      type="button"
      className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      onClick={handleSignIn}
    >
      <GithubIcon />
      Sign in with Github
    </button>
  );
};

export default AuthButtonClient;
