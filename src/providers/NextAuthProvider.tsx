"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function NextAuthProvider({ children }: Props): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
