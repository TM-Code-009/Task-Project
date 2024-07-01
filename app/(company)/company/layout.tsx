import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { NextFont } from "next/dist/compiled/@next/font";
import { dbConfig } from "../../utils/dbConfig";
import Sider from "./sider";
import CreateProject from "./createproject";
import Header from "./Header";

const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Owner Screen",
  description: "Manage all your Project in One Place",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConfig();
  return (
    <html lang="en">
      <body>
        <div className={`${poppins.className} flex gap-2`}>
          <Sider />

          <div className="w-[calc(100vw-250px)] pr-2">
            <div className="w-full">
              <Header />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}