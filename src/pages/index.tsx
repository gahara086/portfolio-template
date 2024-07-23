import type { NextPage } from "next";
import HomePage from "../components/HomePage";
import AboutMe from "../components/AboutMe";
import ProfessionalSkills from "../components/ProfessionalSkills";
import WorkExperience from "../components/WorkExperience";
import Qualification from "../components/Qualification";
import Education from "../components/Education";
import StudyGuide from "../components/StudyGuide";
import Hobbies from "../components/Hobbies";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <ProfessionalSkills />
      <WorkExperience />
      <Education />
      <Qualification />
      <StudyGuide />
      <Hobbies />
    </div>
  );
};

export default Home;
