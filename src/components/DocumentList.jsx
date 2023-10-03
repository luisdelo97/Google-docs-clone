"use client";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import DocumentRow from "./DocumentRow";

const DocumentList = ({ session }) => {
  const [snapshot] = useCollectionOnce(
    query(
      collection(db, "userDocs", session.user.email, "docs"),
      orderBy("timestamp", "desc")
    )
  );

  return (
    <>
      <div className="max-w-3xl mx-auto py-8 ">
        <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
          <h2 className="font-medium flex-grow">My document</h2>
          <p className="mr-12">Date Created</p>
          <i className="fa-solid fa-folder block" />
        </div>
      </div>
      {snapshot?.docs.map((doc) => (
        <DocumentRow
          key={doc.id}
          id={doc.id}
          fileName={doc.data().fileName}
          timestamp={doc.data().timestamp}
        />
      ))}
    </>
  );
};

export default DocumentList;
