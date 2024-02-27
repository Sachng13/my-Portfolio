import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex mt-7">
          <Link
            href="https://movie-verse-brown.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="MovieVerse Project"
                className="rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">MovieVerse</p>
                <p className="text-gray-500 text-[10px]">
                  MovieVerse is a React-based website designed for users to
                  explore a wide array of movies, including the latest releases.
                  Each movie page provides comprehensive details on plot, cast,
                  crew, and rating, enhancing the user experience.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://sachng13.github.io/E-commerce-react-app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="BargainBazaar"
                className="rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  BargainBazaar
                </p>
                <p className="text-gray-500 text-[10px]">
                  This e-commerce app, built with React, offers users a seamless
                  shopping experience. They can browse through a wide range of
                  products, view detailed product information, make
                  modifications to their selections, add items to their cart,
                  and even contribute new products to the platform.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex  ">
          <Link
            href="https://sachng13.github.io/Tunify-Music-Player/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="Tunify Music Player"
                className="rounded-lg"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Tunify Music Player
                </p>
                <p className="text-gray-500 text-[10px]">
                  Tunify Music Player" is a sleek and intuitive music player
                  developed using HTML, CSS, and JavaScript. It comes preloaded
                  with a selection of songs that users can play and control.
                  With its user-friendly interface and smooth functionality,
                  Tunify enhances the music listening experience for users.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
