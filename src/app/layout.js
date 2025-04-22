import { Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Transnamic",
  description: "Transnamic Group",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${oswald.className} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
