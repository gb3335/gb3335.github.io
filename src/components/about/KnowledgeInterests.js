import Data from "../data.json";
const knowledge = Data.skills.knowledge;
const interests = Data.skills.interests;

const KnowledgeInterests = () => {
  return (
    <div className="tokyo_tm_skillbox float-left clear-both h-auto w-full pb-[90px] pl-[0px] pr-[0px] pt-[90px]">
      <div className="container">
        <div className="in float-left clear-both flex h-auto w-full">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Knowledge</h3>
            </div>
            <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
              <ul className="m-0 list-none">
                {knowledge.map((item) => (
                  <li className="relative m-0 pl-[25px]" key={item.id}>
                    <span>
                      <img
                        className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">Interests</h3>
            </div>
            <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
              <ul className="m-0 list-none">
                {interests.map((item) => (
                  <li className="relative m-0 pl-[25px]" key={item.id}>
                    <span>
                      <img
                        className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
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
export default KnowledgeInterests;
