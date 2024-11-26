import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar"; // Assuming you have this path

export const metadata: Metadata = {
  title: "Hospital Name",
  description: "Hospital website description",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar added here, it will be on top of the page */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer stays at the bottom */}
        <footer className="bg-blue-600 text-white py-6 mt-auto">
          <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-4">
            {/* Left Section: Company Information */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Hospital Name</h2>
              <p>Address: 123 Health St, City, Country</p>
            </div>
        
            {/* Center Section: Social Media Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-white hover:underline">Facebook</a>
              <a href="#" className="text-white hover:underline">Twitter</a>
              <a href="#" className="text-white hover:underline">Instagram</a>
            </div>
        
            {/* Right Section: Copyright */}
            <div className="text-sm">
              <p>&copy; 2024 Hospital Name. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
