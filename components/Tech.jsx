"use client";
import { BallCanvas } from "@/canvas";
import { technologies } from "@/constant/index";

const Tech = () => {
  return (
    <>
      <section id="skills">
        <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
          Skills
        </h1>
        <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
          EXPLORE NOW
        </p>

        <div className="flex flex-wrap justify-center gap-6 container mx-auto 2xl">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tech;
