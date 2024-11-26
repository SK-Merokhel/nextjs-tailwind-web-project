import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Hospital Name</h1>
          <button className="text-white md:hidden">☰</button>
          {/* md:hidden: Hides the button on medium screens (≥ 768px) and larger. */}
          <ul className="hidden md:flex space-x-4">
            {/* Use Link component for navigation */}
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>

          </ul>
        </div>
      </nav>
    );
}
