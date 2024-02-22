import Data from "../data.json";
const programming = Data.skills.programming;
const tools = Data.skills.tools;
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox float-left clear-both h-auto w-full bg-white pb-[100px] pl-[0px] pr-[0px] pt-[93px]">
      <div className="container">
        <div className="in float-left clear-both flex h-auto w-full">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Technical</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Tools</h3>
            </div>
            <div className="tokyo_progress">
              {tools.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
