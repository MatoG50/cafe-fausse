import homeImg from "../assets/gallery-cafe-interior.webp";

const Home = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] relative">
        <img
          src={homeImg}
          alt="homeImage"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Welcome to Café Fausse
          </h1>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-lg">
            Fresh Brews · Cozy Vibes · Great Conversations
          </p>
          <button className="mt-6 px-6 py-3 bg-grey/60 hover:bg-black/80 rounded-xl backdrop-blur-sm cursor-pointer text-white">
            Explore Menu
          </button>
        </div>

        <div className="absolute bottom-0 w-full flex items-center justify-center px-6 pb-6">
          <div className="bg-white/90 backdrop-blur-md shadow-md rounded-2xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">
              Visit Us
            </h2>

            <div className="space-y-2 text-black text-sm md:text-lg">
              <p>
                <span className="font-semibold">Address:</span> 1234 Culinary
                Ave, Suite 100, Washington, DC 20002
              </p>

              <p>
                <span className="font-semibold">Phone:</span> (202) 555-4567
              </p>

              <p>
                <span className="font-semibold">Hours:</span> Monday–Saturday:
                5:00 PM – 11:00 PM
                <br />
                Sunday: 5:00 PM – 9:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-12 bg-yellow-50/50 backdrop-blur-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-gray-700 mb-6 text-center">
          Get updates on exclusive offers, events, and new menu items!
        </p>

        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-full text-gray-900 border focus:outline-none"
          />
          <button className="btn btn-warning font-semibold text-white w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
