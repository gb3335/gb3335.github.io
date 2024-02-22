import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
import Data from "../data.json";
const testimonialData = Data.recommendation;
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials float-left clear-both h-auto w-full px-0 py-[100px]">
      <div className="container">
        <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
          <h3 className="text-[20px] font-bold">Recommendations</h3>
        </div>
        <div className="list float-left clear-both h-auto w-full overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 cursor-e-resize list-none"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner relative float-left clear-both h-auto w-full">
                  <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                    <p>{item.text}</p>
                  </div>
                  <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                    <div className="image relative h-[60px] w-[60px]">
                      <div
                        className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="mb-[2px] text-[16px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
