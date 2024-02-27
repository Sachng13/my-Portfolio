import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Tailnode technologies /</span>{" "}
            Software developer intern
          </p>
          <p className="text-gray-300">Oct 2023 - PRESENT, Gurgaon</p>
        </div>
        <p className="text-gray-300 pt-5">
          I have been working at Tailnode technologies as a frontend developer,
          with some exposure to backend tasks. My primary focus has been on
          using React and Next.js. In addition to frontend development, I have
          also contributed to backend tasks, albeit to a lesser extent.
          <br />
          <br />
          One of the key highlights of my experience has been the learning and
          growth I have experienced. Working with cutting-edge technologies like
          React and Next.js has allowed me to expand my skill set and stay
          updated with the latest trends in frontend development.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            NextJs
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            NodeJs
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
