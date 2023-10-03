import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import HeaderDoc from "@/components/HeaderDoc";
import { redirect } from "next/navigation";

const Doc = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/Login");
  }
  return (
    <>
      <HeaderDoc session={session} />
    </>
  );
};

export default Doc;
