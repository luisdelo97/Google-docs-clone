"use client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { signOut } from "next-auth/react";
import { IconButton } from "../app/Material-Tailwind";
import { useParams, useRouter } from "next/navigation";
import { doc } from "firebase/firestore";
import { db } from "../firebase";

const HeaderDoc = ({ session }) => {
  const router = useRouter();
  const { id } = useParams();
  const userDocsRef = doc(db, "userDocs", session.user.email, "docs", id);
  const [snapshot, loading] = useDocumentOnce(userDocsRef);
  return (
    <>
      <header className="flex justify-center items-center p-3 mb-1">
        <IconButton
          color="blue"
          variant="outlined"
          className="h-20 w-20 focus:border-0 border-0 "
          onClick={() => router.push("/")}
        >
          <i className="fa-solid fa-file-lines text-4xl " />
        </IconButton>
      </header>
    </>
  );
};

export default HeaderDoc;
