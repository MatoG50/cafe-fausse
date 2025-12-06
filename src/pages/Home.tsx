import { useNavigate } from "react-router-dom";
import homeImg from "../assets/gallery-cafe-interior.webp";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen">
        <img
          src={homeImg}
          alt="homeImage"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Café Fausse
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mt-3 md:mt-4 drop-shadow-lg max-w-md text-center">
            Fresh Brews · Cozy Vibes · Great Conversations
          </p>

          <button
            className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-black/60 hover:bg-black/80 rounded-xl backdrop-blur-sm text-white text-sm sm:text-base cursor-pointer"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>
        </div>

        {/* VISIT US CARD */}
        <div className="absolute bottom-4 md:bottom-6 w-full flex justify-center px-4">
          <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-5 sm:p-6 w-full max-w-md md:max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-black text-center md:text-left">
              Visit Us
            </h2>

            <div className="space-y-2 text-black text-sm sm:text-base">
              <p>
                <span className="font-semibold">Address:</span> 1234 Culinary
                Ave, Suite 100, Washington, DC 20002
              </p>

              <p>
                <span className="font-semibold">Phone:</span> (202) 555-4567
              </p>

              <p>
                <span className="font-semibold">Hours:</span> <br />
                Monday–Saturday: 5:00 PM – 11:00 PM
                <br />
                Sunday: 5:00 PM – 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-yellow-50">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-center">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-gray-700 mb-6 text-center max-w-md text-sm sm:text-base">
          Get updates on exclusive offers, events, and new menu items!
        </p>

        <Newsletter />
      </div>
    </>
  );
};

export default Home;
