import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen max-w-screen-2xl mx-auto ">
        <Navbar />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
