import { useContext } from "react";
import { TokyoContext } from "../Context";
import Data from "../components/data.json";

const Sidebar = () => {
  const { navChange, nav, menus } = useContext(TokyoContext);
  return (
    <div className="leftpart fixed z-[12] flex h-[100vh] w-[450px] items-center bg-white px-[100px] py-[0px]">
      <div className="leftpart_inner h-auto w-full">
        <div className="logo" data-type="text">
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <a href="#">
            <img
              className="max-w-[150px]"
              src="assets/img/logo/dark.png"
              alt="image"
            />
            <h3 className="font-poppins text-[31px] font-black tracking-[5px]">
              {Data.logo_title}
            </h3>
          </a>
        </div>
        <div className="menu float-left w-full px-[0px] py-[50px]">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu) => (
              <li
                className={`float-left m-0 w-full ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="font-montserrat inline-block font-medium capitalize text-[#767676] transition-all duration-300 hover:text-black"
                  href={`#${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright float-left w-full">
          {/* <p className="font-montserrat text-[15px] leading-[25px] text-[#999]">
            © {new Date().getFullYear()} Tokyo
            <br />
            Created by{" "}
            <a
              className="font-medium text-[#787878] transition-all duration-300 hover:text-black"
              href="https://softhub.co.in/"
              target="_blank"
            >
              Codeefly
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
