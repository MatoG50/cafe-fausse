import Lightbox from "../components/Lightbox";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <section>
        <Lightbox />
      </section>

      <section className="space-y-16 py-6">
        <div>
          <h2 className="text-4xl font-semibold mb-8 text-center">🏆 Awards</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Culinary Excellence Award", year: "2022" },
              { title: "Restaurant of the Year", year: "2023" },
              { title: "Best Fine Dining Experience", year: "2023" },
            ].map((award, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition-shadow text-center"
              >
                <div className="text-3xl mb-3">🥇</div>
                <h3 className="font-semibold text-xl">{award.title}</h3>
                <p className="text-gray-500 mt-1">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-8 text-center">
            ⭐ Customer Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-lg italic text-center">
                “Exceptional ambiance and unforgettable flavors.”
              </p>
              <p className="text-center mt-4 font-semibold text-gray-900">
                — Gourmet Review
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-lg italic text-center">
                “A must-visit restaurant for food enthusiasts.”
              </p>
              <p className="text-center mt-4 font-semibold text-gray-900">
                — The Daily Bite
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
