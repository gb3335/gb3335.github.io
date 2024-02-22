import Data from "../data.json";
const experiencesData = Data.experience;
const educationData = Data.education;

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox float-left clear-both h-auto w-full bg-white px-0 py-[93px]">
      <div className="container">
        <div className="in float-left clear-both flex h-auto w-full">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Education</h3>
            </div>
            <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
              <ul className="relative m-0 inline-block list-none pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`relative float-left m-0 w-full pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] px-[25px] py-[5px] text-[14px]">
                          {edu.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="mb-[2px] text-[16px] font-semibold">
                          {edu.institute}
                        </h3>
                        <span className="text-[14px]">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Experience</h3>
            </div>
            <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
              <ul className="relative m-0 inline-block list-none pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`relative float-left m-0 w-full pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] px-[25px] py-[5px] text-[14px]">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="mb-[2px] text-[16px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
