import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
