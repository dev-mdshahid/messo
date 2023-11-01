import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/next-auth/SessionProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata: Metadata = {
  title: "MessO | Messy to Organized",
  description:
    "A complete lifestyle application that will convert your messy life into an organized life by tracking diet, exercise and beauty plan in your life.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={poppins.className}>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
