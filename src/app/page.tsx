import './globals.css'; // Ensure this import is present

// src/app/home/page.tsx

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      
      {/* Main Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-4 mb-6">
        Welcome to Our Hospital
      </h1>

      <p className="text-lg text-center text-gray-700 mb-8">
        We are committed to providing exceptional care and support for all of our patients. 
        Our expert medical team, state-of-the-art facilities, and compassionate staff work together to ensure 
        the best healthcare experience possible.
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Emergency Care</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our emergency department is open 24/7, providing immediate care for critical conditions.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Surgery</h2>
          <p className="text-gray-700 dark:text-gray-200">
            We offer a wide range of surgeries, from minimally invasive to complex procedures, performed by expert surgeons.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Maternity Care</h2>
          <p className="text-gray-700 dark:text-gray-200">
            Our maternity care unit provides a safe and welcoming environment for expectant mothers and their newborns.
          </p>
        </div>
      </div>
    </div>
  );
}
