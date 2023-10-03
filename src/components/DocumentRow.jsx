"use client";
import { useRouter } from "next/navigation";
import { IconButton } from "../app/Material-Tailwind";

const DocumentRow = ({ id, fileName, timestamp }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 cursor-pointer mx-auto max-w-3xl  hover:bg-gray-100 active:bg-blue-50 text-gray-700 "
    >
      <IconButton
        className="border-0 "
        size="sm"
        color="blue"
        variant="outlined"
      >
        <i className="fa-solid fa-file-lines text-xl " />
      </IconButton>
      <p className="pl-5 pr-10 flex-grow truncate">{fileName}</p>
      <p className="pr-5 text-sm">{timestamp?.toDate().toLocaleDateString()}</p>
      <IconButton
        color="gray"
        variant="outlined"
        className="h-20 w-20 border-0 block"
      >
        <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
      </IconButton>
    </div>
  );
};

export default DocumentRow;
