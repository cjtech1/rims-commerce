import { getCurrentUser } from "@/lib/currentUser";
import { redirect } from "next/navigation";
import ListContent from "./ListContent";

interface ListPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ListPage = async ({ searchParams }: ListPageProps) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?from=/list");
  }

  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : "";
  const name =
    typeof searchParams.name === "string" ? searchParams.name : "";

  return <ListContent user={user} category={category} name={name} />;
};

export default ListPage;
