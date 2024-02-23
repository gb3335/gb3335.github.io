import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Data from "./data";
const detailData = Data.projects;
const filterData = Data.project_tech_list;
const imagepData = Data.freelance_projects;
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio float-left clear-both h-auto w-full px-0 pb-[40px] pt-[100px]">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <SectionTitle
                pageName={"Projects"}
                title={"Completed Projects"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current font-montserrat inline-block font-medium text-[#767676] transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  {
                    filterData.map((item, index) => (
                      <li key={index} className="mr-[25px] inline-block">
                        <a
                          className="font-montserrat inline-block font-medium text-[#767676] transition-all duration-300 hover:text-black"
                          href="#"
                          onClick={handleFilterKeyChange(item.key)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper float-left clear-both h-auto w-full">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              {/* <li className="vimeo item__ float-left mb-[40px] w-1/3 pl-[40px]">
                <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Teresa Butler"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/337293658"
                    >
                      <img
                        className="min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li> */}
              {/* <li className="youtube item__ float-left mb-[40px] w-1/3 pl-[40px]">
                <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Ashley Flores"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    >
                      <img
                        className="min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li> */}
              {/* <li className="soundcloud item__ float-left mb-[40px] w-1/3 pl-[40px]">
                <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Derek Smith"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
                    >
                      <img
                        className="min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li> */}

              {
                detailData.map((item, index) => (
                  <li key={index} className={`${item.category} item__ float-left mb-[40px] w-1/3 pl-[40px]`}>
                    <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                      <div
                        className="entry tokyo_tm_portfolio_animation_wrap"
                        data-title={item.title}
                        data-category={item.category}
                      >
                        <a
                          className="popup_info"
                          href="#"
                          onClick={() => {
                            setPortfolioDetailsModal(item);
                            modalToggle(true);
                          }}
                        >
                          <img
                            className="min-w-full opacity-0"
                            src="assets/img/portfolio/1.png"
                            alt="image"
                          />
                          <div
                            className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                            data-img-url={item.thumbnail}
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                ))
              }
              {
                imagepData.map((item, index) => (
                  <li key={index} className={`${item.category} item__ float-left mb-[40px] w-1/3 pl-[40px]`}>
                    <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                      <div
                        className="entry tokyo_tm_portfolio_animation_wrap"
                        data-title={item.title}
                        data-category={item.category}
                      >
                        <a className="" href={item.link}>
                          <img
                            className="min-w-full opacity-0"
                            src={item.thumbnail}
                            alt="image"
                          />
                          <div
                            className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                            data-img-url={item.thumbnail}
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
