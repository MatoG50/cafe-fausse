// Sample images
import interior1 from "../assets/gallery-cafe-interior.webp";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      {/* Gallery Grid */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={interior1}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Awards & Reviews */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Awards</h2>
          <ul className="list-disc list-inside space-y-2 text-center text-lg text-gray-700">
            <li>Culinary Excellence Award – 2022</li>
            <li>Restaurant of the Year – 2023</li>
            <li>Best Fine Dining Experience – Foodie Magazine, 2023</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Customer Reviews
          </h2>
          <ul className="space-y-4 text-center text-lg text-gray-700">
            <li>
              “Exceptional ambiance and unforgettable flavors.” – Gourmet Review
            </li>
            <li>
              “A must-visit restaurant for food enthusiasts.” – The Daily Bite
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
