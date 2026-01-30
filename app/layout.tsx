import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joke of the Day",
  description: "Tech jokes for nerds. One random joke from the fortune database every time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen h-full"
        style={{
          fontFamily: "Courier, 'Courier New', monospace",
          backgroundColor: "#000",
          color: "#00ff41",
        }}
      >
        {children}
      </body>
    </html>
  );
}
