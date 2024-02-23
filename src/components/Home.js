import SectionContainer from "./SectionContainer";
import Data from "./data.json";
const socialIcon = [
  {
    id: 1,
    iconName: "fa-solid fa-file-alt",
    link: Data.social.resume,
  },
  {
    id: 2,
    iconName: "fa-brands fa-google",
    link: Data.social.gdev,
  },
  {
    id: 3,
    iconName: "fa-brands fa-github",
    link: Data.social.github,
  },
  {
    id: 4,
    iconName: "fa-brands fa-linkedin-in",
    link: Data.social.linkedin,
  },
  {
    id: 5,
    iconName: "fa-brands fa-instagram",
    link: Data.social.instagram,
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home relative clear-both flex min-h-[100vh] w-full items-center justify-center">
          <div className="home_content flex items-center">
            <div
              className="avatar relative min-h-[300px] min-w-[300px] rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-cover bg-center bg-no-repeat"
                data-img-url={Data.profile_image}
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name mb-[14px] text-[55px] font-extrabold uppercase">
                {Data.first_name} <span>{Data.last_name}</span>
              </h3>
              <p className="job font-montserrat mb-[25px] max-w-[450px] font-medium">
                {Data.tagline}
              </p>
              <div className="social float-left w-full">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="inline-block mr-[20px]" key={item.id}>
                      <a
                        className="text-[20px] text-black transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
