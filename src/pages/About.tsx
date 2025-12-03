import founderAntonio from "../assets/antonio.png";
import founderMaria from "../assets/maria.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      {/* History / About Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Café Fausse</h1>
        <p className="text-lg text-gray-700">
          Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez,
          Café Fausse blends traditional Italian flavors with modern culinary
          innovation. Our mission is to provide an unforgettable dining
          experience that reflects both quality and creativity.
        </p>
      </section>

      {/* Founders Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Meet Our Founders
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Founder Antonio */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img
              src={founderAntonio}
              alt="Chef Antonio Rossi"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Chef Antonio Rossi</h3>
            <p className="text-gray-600 mt-2">
              Culinary mastermind behind our signature dishes, Antonio combines
              classic Italian flavors with modern twists, ensuring every meal is
              unforgettable.
            </p>
          </div>

          {/* Founder Maria */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img
              src={founderMaria}
              alt="Restaurateur Maria Lopez"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Maria Lopez</h3>
            <p className="text-gray-600 mt-2">
              Experienced restaurateur and co-founder, Maria ensures every guest
              enjoys exceptional service, locally sourced ingredients, and a
              warm, welcoming atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Our Commitment</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Café Fausse, we are dedicated to creating an unforgettable dining
          experience. We prioritize fresh, locally sourced ingredients,
          excellent food, and a welcoming atmosphere where every meal is a
          celebration of taste and creativity.
        </p>
      </section>
    </div>
  );
};

export default About;
