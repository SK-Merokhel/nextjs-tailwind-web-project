export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white py-6 mt-8">
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
    );
  }
  