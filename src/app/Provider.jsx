"use client";
import { SessionProvider, useSession } from "next-auth/react";

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export { Provider };
