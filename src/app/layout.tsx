import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniOS Agent · keyless agent surface",
  description:
    "Named affordances over local disposable browser tabs. No API key. Contract at /api/agent.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
