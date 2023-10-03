"use client";
import { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
} from "../app/Material-Tailwind";
import Image from "next/image";
import { db } from "../firebase";
import {
  collection,
  setDoc,
  serverTimestamp,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { useCollectionOnce } from "react-firebase-hooks/firestore";

const Modal = ({ session }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  // const [snapshot, loading, error] = useCollectionOnce(
  //   query(
  //     collection(db, "userDocs", session.user.email, "docs"),
  //     orderBy("timestamp", "desc")
  //   )
  // );
  // console.log(snapshot?.docs.map((doc) => doc.data()));
  const handleOpen = () => setOpen(!open);

  const createDocument = async () => {
    if (!inputRef.current?.value) return;
    const userDocsRef = doc(
      db,
      "userDocs",
      session.user.email,
      "docs",
      inputRef.current.value
    );
    const data = {
      fileName: inputRef.current.value,
      timestamp: serverTimestamp(),
    };
    try {
      await setDoc(userDocsRef, data);

      inputRef.current.value = "";
      handleOpen();
    } catch (error) {
      console.log(error.message);
    }
    // console.log(session);
  };

  return (
    <>
      <Card
        className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
        onClick={handleOpen}
      >
        <Image
          src="https://links.papareact.com/pju"
          fill={true}
          alt="new-doc"
        />
      </Card>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader>New Document.</DialogHeader>
        <DialogBody divider>
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Enter name of new document"
            ref={inputRef}
            onKeyDown={(e) => e.key === "Enter" && createDocument()}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={createDocument}>
            <span>Create</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default Modal;
