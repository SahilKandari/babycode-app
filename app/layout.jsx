'use client'
import "./globals.css";
import { RecoilRoot } from "recoil";
import Discount from "@/components/discount/Discount";
import Sidenav from "@/components/sidenav/Sidenav";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <Discount/>
          <Navbar/>
          <Sidenav/>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
