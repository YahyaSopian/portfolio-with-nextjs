import React from "react";
import { poppins } from "../ui/fonts";
import Image from "next/image";
import ButtonUser from "./ButtonUser";

const HeroSection = () => {
  return (
    <section className="mb-10 w-2/3 container mx-auto  p-x-40 flex flex-col justify-center items-center">
      <Image src="/avatar.png" alt="avatar" width={250} height={250} className="mt-24 mb-5" />

      <h1 className="m-5 text-5xl text-center">
        I do <span className={`${poppins.className} text-fuchsia-500 text-5xl font-bold`}>code</span> and <br />
        make content about it!
      </h1>

      <p className="text-18 text-center m-5">
        Enhance your business performance with quality websites and mobile applications. I am an experienced developer proficient in web and mobile technologies, ready to help you reach your full potential in the digital world
      </p>

      <div className="cta flex gap-4 mt-12 h-x-65">
        <ButtonUser />
      </div>
    </section>
  );
};

export default HeroSection;
