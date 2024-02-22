import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import EducationExperience from "./about/EducationExperience";
import Intro from "./about/Intro";
import KnowledgeInterests from "./about/KnowledgeInterests";
import Skills from "./about/Skills";
import Testimonials from "./about/Testimonials";

const About = () => {
  return (
    <SectionContainer name={"about"}>
      <div className="container">
        <div className="tokyo_tm_about float-left clear-both h-auto w-full px-0 py-[100px]">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <SectionTitle pageName={"About"} title={"About Me"} />
            </div>
          </div>
          <Intro />
        </div>
      </div>
      <Skills />
      <KnowledgeInterests />
      <EducationExperience />
      <Testimonials />
    </SectionContainer>
  );
};
export default About;
