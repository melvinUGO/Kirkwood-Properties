import { NavigationContextProvider } from "@/contexts/navigationContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/navigation/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kirkwood Properties",
  description: "Find Your Dream Home with Kirkwood Properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="google-site-verification"
          content="JCXIwytkwt9WoOk59XH07S9givw6roD0t03pwt_LiYw"
        />
      </head>
      <body className={inter.className}>
        <NavigationContextProvider>
          <Sidebar />
          {children}
        </NavigationContextProvider>
      </body>
    </html>
  );
}
