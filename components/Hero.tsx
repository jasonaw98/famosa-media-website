import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold">
        Maximise Your Outdoor Advertising Potential
      </h1>
      <h3 className="text-3xl">
        Reach a wider audience and make a lasting impression with our outdoor
        advertising solutions.
      </h3>
      <div>
        <Link
          href="/contact"
          className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600"
        >
          Get Started
        </Link>
        <Link
          href="/contact"
          className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 ml-4"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
