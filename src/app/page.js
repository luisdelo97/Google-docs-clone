import Image from "next/image";
import Header from "../components/Header";
import { IconButton } from "./Material-Tailwind";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/Login");
  }
  return (
    <>
      <div>
        <Header />
        <section className="bg-[#f8f9fa] pb-10 px-10">
          <div className="max-w-4xl mx-auto">
            <div className="py-6 flex items-center justify-between">
              <h2 className="text-gray-700 text-lg">Start a new document</h2>
              <IconButton
                color="gray"
                variant="outlined"
                className="h-20 w-20 border-0 block"
              >
                <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
              </IconButton>
            </div>
            <div>
              <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                <Image
                  src="https://links.papareact.com/pju"
                  layout="fill"
                  alt="new-doc"
                />
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
                Blank
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-10 md:px-0">
          <div className="max-w-3xl mx-auto py-8 ">
            <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
              <h2 className="font-medium flex-grow">My document</h2>
              <p className="mr-12">Date Created</p>
              <i className="fa-solid fa-folder block" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
