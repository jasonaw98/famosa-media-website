import Link from "next/link";

const CalltoButton = () => {
  return (
    <div className="w-full flex p-24 relative group">
      <div className="w-[90%] bg-purple-600 hidden lg:flex justify-between p-28 items-center group-hover:rotate-3 ease-in-out duration-300 rotate-2 absolute -z-10" />
      <div className="w-full bg-purple-300 flex flex-col md:flex-row justify-between p-24 items-center group-hover:-rotate-2 ease-in-out duration-300 hover:scale-105">
        <div className="flex flex-col gap-6 max-w-5xl">
          <h1 className="text-5xl font-bold text-center lg:text-start">
            Boost Your Brand with Outdoor Advertising
          </h1>
          <p className="text-xl">
            Reach a wider audience and make a lasting impression with our
            outdoor advertising solutions.
          </p>
        </div>
        <Link
          href="#contact"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 text-nowrap"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CalltoButton;
