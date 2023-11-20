import AboutSection from "@/components/aboutSection/aboutSection";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import SkillSection from "@/components/skillSection/skillSection";


export default function Home() {
  return (
    <>
    <div className="">

   
      <Navbar />
      <Hero/>
      <AboutSection/>
      <SkillSection/>
      </div>
   
    </>
  );
}
