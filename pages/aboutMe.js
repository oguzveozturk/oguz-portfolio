import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { motion } from "framer-motion";
import CustomLink from "../components/CustomLink";
import { RoughNotation } from "react-rough-notation";
import CustomImage from "../components/CustomImage";
import HeroImage from "../public/images/aboutMe.webp";
import Instagram from "../public/images/instagram.webp";
import Timeline from "../components/Timeline";

function aboutMe() {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className="flex flex-col max-w-[900px] mx-auto px-4 md:px-12 lg:px-0 antialiased text-justify	"
    >
      <Head>
        <title>Oguz Ozturk - Senior iOS Developer </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap" />
      </Head>
      <NavBar />
      <main className="flex-col space-y-12 md:space-y-24 ">
        <div>
          <div className="mt-12 lg:mt-0">
            <CustomLink link="/" title="← Go Back" />
          </div>
          <h2 className=" my-8 text-xl md:text-2xl lg:text-3xl font-bold">
            {" "}
            <RoughNotation
              type="highlight"
              show={true}
              color={"#FFAD95"}
              animationDuration={1200}
            >
              About Me
            </RoughNotation>
          </h2>
          <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row-reverse lg:justify-between lg:items-center ">
            <div className="relative w-[300px] lg:w-1/3   h-[410px]  ">
              <CustomImage
                image={HeroImage.src}
                alt="Hero Image"
                className="object-contain "
              />
            </div>
            <div className="lg:w-2/3 lg:mr-12">
              <p className=" text-sm  mt-4 leading-normal md:leading-loose  md:text-base  text-gray-700 font-normal  ">
                Hello again! Did I mention my name is Oguz? : ) I graduated from
                Sakarya University with a degree in Civil Engineering in 2015.
                After a 4-year career in civil engineering, I made a leap into
                the world of software in 2019. In 2021, I tied the knot and
                embarked on a new adventure called marriage. Currently, I'm
                living in the vibrant city of Istanbul. I'm a movie buff and a
                gaming enthusiast, especially when it comes to soulslike games.
                Oh, and I'm a die-hard Fenerbahçe fan, which means I'm used to a
                rollercoaster of emotions. When I'm not coding or cheering for
                my team, you can find me enjoying a good laugh and a cup of
                coffee! If you ever need someone to discuss the latest movie
                plot twists or the best strategies for beating a tough game
                boss, I'm your guy. And if you see me with a puzzled look, I'm
                probably debugging code or wondering if cinema has really died.
                So, let's keep the code clean and the coffee strong!
              </p>
            </div>
          </div>
        </div>
        {/* Timeline Section */}
        <section className="py-12">
          <Timeline />
        </section>
        {/* Instagram Section */}
        <section className="flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:spacex-12 lg:items-center lg:justify-between">
          <div>
            <h2 className="title">
              I’m a lot cooler on{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                Instagram
              </span>
            </h2>
            <CustomLink
              title="FOLLOW ME"
              link="https://www.instagram.com/oguzozturk91/"
              newTab
            />
          </div>
          <div className="h-60 w-full md:w-1/2">
            <div className="relative w-full  h-60">
              <CustomImage
                image={Instagram.src}
                alt="Instagram image"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default aboutMe;
