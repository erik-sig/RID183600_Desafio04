import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="m-auto max-w-screen-xl px-5">{children}</div>;
}
