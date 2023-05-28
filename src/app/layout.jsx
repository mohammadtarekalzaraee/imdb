"use client"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header />

          {/*Navbar*/}
          <Navbar />

          {/*SearchBox*/}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
