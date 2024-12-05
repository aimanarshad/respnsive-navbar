"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-black text-white">
        <div
          className="container mx-auto flex items-center justify-between px-4"
          style={{ height: "100px" }}
        >
          <div className="text-4xl text-yellow-200 font-bold">GIAC</div>

          <button
            className="lg:hidden text-white mx-auto flex"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            Menu
          </button>

          <ul
            className={`lg:flex lg:items-center lg:space-x-6 ${
              menuOpen ? "block" : "hidden"
            } lg:block absolute lg:static bg-black text-white w-full lg:w-auto justify-evenly text-lg left-0 top-16 lg:top-auto py-2 lg:py-0`}
          >
            <li>Portfolio</li>
            <li>home</li>
            <li>About</li>
            <li>Contact US</li>
            <li>Services</li>
          </ul>
        </div>
      </nav>
      <div className="container max-w-full flex flex-wrap lg:flex-row md:flex-col ">
        <div className="food  bg-yellow-200 text-red-800 flex-1 md:flex-row max-w-full">
          <h2 className="font-bold text-3xl text-yellow-800">Food</h2>
          <p>
            <br />
            Explore delicious cuisines and recipes that satisfy your taste buds.
            From local delights to global flavors, indulge in a world of
            culinary experiences.
          </p>
        </div>
        <div className="travel  bg-green-300  text-red-800 flex-1 w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl text-green-950">Travel</h2>
          <p>
            <br />
            Embark on adventures and explore breathtaking destinations around
            the globe. Find tips and stories to inspire your next journey.
          </p>
        </div>
        <div className="lifestyle  bg-blue-300  text-blue-950 flex-1 w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl text-black">Lifestyle</h2>
          <p>
            <br />
            Discover tips for improving your daily life, embracing hobbies, and
            achieving a balanced and fulfilling lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
