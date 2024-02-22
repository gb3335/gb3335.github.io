import { Fragment } from "react";
import Data from "../data.json";
const Intro = () => {
  const tel_link = `tel:${Data.mobile_no}`;
  const mail_link = `mailto:${Data.email}`;
  return (
    <Fragment>
      {/* <div className="top_author_image relative float-left clear-both mb-[35px] h-auto w-full">
        <img className="min-w-full" src={Data.profile_image} alt="image" />
      </div> */}
      <div className="about_title float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[20px]">
        <h3 className="text-[22px] font-bold">
          {Data.first_name} {Data.last_name}
        </h3>
        <span>{Data.job_title}</span>
      </div>
      <div className="about_text float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
        <p className="mb-[11px]">{Data.about}</p>
        <p></p>
      </div>
      <div className="tokyo_tm_short_info float-left clear-both mb-[40px] flex h-auto w-full border-b border-solid border-[#DFDFDF] pb-[30px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info float-left clear-both h-auto w-full">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Birthday:
                </span>
                <span>{Data.dob}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Age:
                </span>
                <span>{Data.age}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Address:
                </span>
                <span>{Data.address}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href={mail_link}
                  >
                    {Data.email}
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href={tel_link}
                  >
                    {Data.mobile_no}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Nationality:
                </span>
                <span>{Data.nationality}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Study:
                </span>
                <span>{Data.study}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Degree:
                </span>
                <span>{Data.degree}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  Interest:
                </span>
                <span>{Data.hobbies}</span>
              </li>
              <li className="m-0">
                <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                  {Data.job_type}:
                </span>
                <span>{Data.availability}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href={Data.resume} download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
