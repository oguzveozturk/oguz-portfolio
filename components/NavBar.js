import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import logo from "../public/images/logo.webp";

function NavBar() {
  return (
    <div className="flex w-full justify-between items-center mt-12  lg:mt-4  md:py-8  max-w-screen-lg mx-auto">
      <CustomLink
        link="/"
        icon={
          <div className="relative w-8 h-8 lg:w-12 lg:h-12 -translate-x-2 lg:-translate-x-3">
            <CustomImage image={logo.src} />
          </div>
        }
      ></CustomLink>

      <div className="flex space-x-4 items-center ">
        <CustomLink
          newTab
          link="https://www.instagram.com/oguzozturk91/"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/83715/instagram-logo.svg"
              alt="instagram icon"
            />
          }
        ></CustomLink>
        <CustomLink
          newTab
          link="https://www.linkedin.com/in/oguzveozturk/"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/16193/linkedin-logo.svg"
              alt="Linkedin icon"
            />
          }
        ></CustomLink>

        <CustomLink
          newTab
          link="https://github.com/oguzveozturk"
          icon={
            <img
              width={20}
              src="https://www.svgrepo.com/show/341847/github.svg"
              alt="github icon"
            />
          }
        ></CustomLink>
      </div>
    </div>
  );
}

export default NavBar;
