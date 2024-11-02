import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login", redirect: true });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default SettingsPage;
