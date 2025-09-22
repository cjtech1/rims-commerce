import { getCurrentUser } from "@/lib/currentUser";
import { redirect } from "next/navigation";
import HomeContent from "./HomeContent";

const HomePage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <HomeContent user={user} />;
};

export default HomePage;
