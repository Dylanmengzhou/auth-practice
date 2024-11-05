"use client";

import { UserInfo } from "@/components/auth/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();
  console.log(JSON.stringify(user));
  return <UserInfo user={user} label="📱 Client Component" />;
};

export default ClientPage;
