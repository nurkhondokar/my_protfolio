"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import nur from "@/assets/nurAbout.jpg";

const AboutSection: FC = () => {
 
  const [activeTab, setActiveTab] = useState(""); 

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="bg-[#121212] p-8 md:p-16 lg:p-16 flex flex-wrap gap-2 min-h-screen ">
        <div className="w-full md:w-[40vw] ">
          <Image
            height={300}
            width={300}
            priority
            src={nur}
            alt="About Image"
            className="w-full h-auto md:h-[90vh] rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <p className="text-lg font-semibold text-slate-200">
              I am a frontend web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, next js, Node.js, HTML, CSS, django and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set.
            </p>
          </div>


          <div>
            <button
              className={`${
                activeTab === "skill" ? "bg-blue-500 text-white" : "bg-gray-300"
              } px-4 py-2 rounded-l-lg`}
              onClick={() => handleTabClick("skill")}
            >
              skill
            </button>
            <button
              className={`${
                activeTab === "eduaction"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 `}
              onClick={() => handleTabClick("eduaction")}
            >
              eduaction
            </button>

            <button
              className={`${
                activeTab === "certificate"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded-r-lg`}
              onClick={() => handleTabClick("certificate")}
            >
              certificate
            </button>
          </div>

          <div>
            {activeTab === "skill" && (
              <div>
                <h3 className="text-xl font-bold mt-6 text-white">skill</h3>
                <ul className="text-gray-300 pl-4 list-disc">
                  <li>Html</li>
                  <li>css</li>
                  <li>tailwind css</li>
                  <li>botstarp</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Git</li>
                  <li>Django</li>
                  <li>Digital ocean</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Lightroom</li>
                </ul>
              </div>
            )}
            {activeTab === "eduaction" && (
              <div>
                <h3 className="text-xl font-bold mt-6 text-white">education</h3>
                <ul className="text-gray-300 pl-4 list-disc">
                  <li>Bsc in Computer Science Engineering (ongoing)</li>
                  <li>Diploma in Computer Engineering</li>
                  <li>Secondary School Certificate</li>
                </ul>
              </div>
            )}

            {activeTab === "certificate" && (
              <div>
                <h3 className="text-xl font-bold mt-6 text-white ">certificate</h3>
                <ul className="text-gray-300 pl-4 list-disc">
                  <li>Responsive Web design</li>
                
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
