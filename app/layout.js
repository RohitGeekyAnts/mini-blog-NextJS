import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ModernBlog",
  description: "Insights on modern web development, design, and technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-gray-900 bg-white flex flex-col ">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 mt-14 ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
