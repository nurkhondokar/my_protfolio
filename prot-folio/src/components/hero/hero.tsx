"use client";
import React, { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import nur from "@/assets/nur.jpeg";

const Hero: FC = () => {
  return (
    <>
      <section className="flex min-h-screen flex-col bg-[#121212] ">
        <div className="container mx-auto py-4 px-10 grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left sm:justify-self-start">
            <h1 className="text-white mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 via-orange-400 to-pink-600">
                {" "}
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-sky-800 to-emerald-500"
                sequence={[
                  "Nur",
                  2000,
                  "web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "React Developer",
                  1000,
                  "Next.js Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 text-base">
              Dhaka, Bangladesh
            </p>
            <div>
              <Link href="/contact">
                <button className="px-6 py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 hover:bg-slate-200 text-white">
                  Contact Me
                </button>
              </Link>
              <Link href="/">
                <button className="px-6 py-2 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                  Download cv
                </button>
              </Link>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] relative ">
              <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full "
                src={nur}
                alt="hero img"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
