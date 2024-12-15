"use client";
import React from "react";
import { poppins } from "../ui/fonts";

const ButtonUser = () => {
  return (
    <>
      <button style={{ borderRadius: 50, letterSpacing: 2 }} className={`${poppins.className} border rounded-2xl py-3 px-4 bg-white hover:bg-fuchsia-600 hover:text-white text-black text-center font-bold hover:`}>
        Get in Touch
      </button>
      <button style={{ borderRadius: 50, letterSpacing: 2 }} className={`${poppins.className} border rounded-2xl py-3 px-4  bg-black hover:bg-white hover:text-black text-white text-center font-bold`}>
        Download CV
      </button>
    </>
  );
};

export default ButtonUser;
