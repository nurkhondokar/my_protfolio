import React, { FC } from "react";
import Image from "next/image";
import css from "@/assets/skill_image/css.png";
import ocan from "@/assets/skill_image/digitalocean.png";
import git from "@/assets/skill_image/github1.png";
import html from "@/assets/skill_image/html.png";
import js from "@/assets/skill_image/javascript.png";
import next from "@/assets/skill_image/nextjs.png";
import react from "@/assets/skill_image/react.png";
import tailw from "@/assets/skill_image/tailwind.png";
import ps from "@/assets/skill_image/ps.png";
import lr from "@/assets/skill_image/lr.png";

const card = [
  { id: 1, image: html, name: "Html", persent: 90 },
  { id: 2, image: css, name: "Css", persent: 80 },
  { id: 3, image: ocan, name: "Digital Ocan", persent: 50 },
  { id: 4, image: git, name: "Git hub", persent: 80 },
  { id: 5, image: js, name: "JavaScript", persent: 75 },
  { id: 6, image: next, name: "Next js", persent: 60 },
  { id: 7, image: react, name: "React js", persent: 60 },
  { id: 8, image: tailw, name: "Tailwind css", persent: 85 },
  { id: 9, image: ps, name: "Photoshop", persent: 70 },
  { id: 10, image:lr, name: "Light room", persent: 80 },
];

const SkillSection: FC = () => {
  return (
    <div>
      <div id="skill" className="w-full lg:h-screen p-2 bg-[#121212]">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center font-bold">
            Skills
          </p>
          <h2 className="py-4 text-center text-slate-400">What I Can Do</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            {card.map((item) => (
              <div
                key={item.id}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={item.image} width={64} height={64} alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{item.name}</h3>
                  </div>
                </div>

                <div className="m-2">
                  <div className="w-full bg-gray-900 rounded-full">
                    <div
                      className="text-xs font-medium text-center p-0.5 leading-none rounded-full bg-amber-800 hover:from-red-500 hover:to-pink-600 "
                      style={{ width: `${item.persent}%` }}
                    >
                      {item.persent}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
