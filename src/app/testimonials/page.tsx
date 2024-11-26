// src/app/testimonials/page.tsx

export default function Testimonials() {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">What Our Patients Say</h1>
        
        <p className="text-lg mb-6">
          Hear directly from some of our patients about their experiences at our hospital.
        </p>
        
        <div className="space-y-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <p className="text-lg italic mb-4">
              "The care and attention I received at this hospital was exceptional. The staff is friendly, and the doctors are knowledgeable. I felt well cared for throughout my entire stay."
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">- John Doe</p>
          </div>
  
          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <p className="text-lg italic mb-4">
              "My experience was wonderful. The nurses were so compassionate, and I felt like I was in good hands the whole time. Highly recommend this hospital to anyone in need of quality care."
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">- Jane Smith</p>
          </div>
  
          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <p className="text-lg italic mb-4">
              "From check-in to discharge, the entire process was seamless. The medical team made me feel comfortable, and the facilities are state-of-the-art."
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">- Michael Johnson</p>
          </div>
        </div>
      </div>
    );
  }
  