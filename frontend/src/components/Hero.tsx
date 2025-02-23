import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4">
      <h1 className="text-5xl font-bold mt-12 lg:mt-20 mb-6 text-black">Digital Tools</h1>
      <p className="text-gray-500 mt-2">
        Access our comprehensive collection of digital tools designed to enhance your productivity
      </p>
      {/* Search Bar */}
      <div className="mt-10 relative w-full max-w-md">
        <FaSearch className="absolute left-4 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </section>
  );
};

export default Hero;
