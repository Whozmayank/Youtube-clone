import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../lib/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className="min-h-screen bg-white text-black ">
        <title>YouTube Clone</title>
        <Header />
        <Toaster />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 overflow-hidden px-4 ">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
