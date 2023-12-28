"use client";
import "./globals.css";
import { Abel } from "next/font/google";
import MainHeader from "../../components/header/main-header";
import { ParallaxProvider } from "react-scroll-parallax";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

const metadata = {
  title: "Ivan | Personal Portfolio",
  description: "Ivan is a full stack developer with 2 years experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${abel.className} bg-gray-50 text-gray-950 h-max flex items-center w-full flex-col`}
      >
        <MainHeader />
        <ParallaxProvider scrollAxis="vertical">{children}</ParallaxProvider>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>
              &copy; Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
