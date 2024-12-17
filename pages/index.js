import Head from "next/head";
import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomImage from "../components/CustomImage";
import HeroImage from "../public/images/oguz.webp";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import processGif from "../public/images/gif.gif";
import { RoughNotation } from "react-rough-notation";
import AppStoreListing from "../components/AppstoreListing";

export default function Home({ projects }) {
  const [isActive, setIsActive] = useState(1);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const Categories = [
    { id: 1, title: "Client project" },
    { id: 2, title: "Case study" },
    //{ id: 3, title: "Web Apps" },
  ];
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className="flex flex-col max-w-[900px] mx-auto px-4 md:px-12 lg:px-0 antialiased"
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
      {/* Navbar */}
      <nav>
        <NavBar />
      </nav>
      <main className=" flex-col space-y-12 md:space-y-24 ">
        {/* Hero section */}

        <section className="mt-12 flex flex-col-reverse space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:w-2/3">
            <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold leading-loose lg:text-justify	 md:leading-normal lg:leading-normal">
              Hey There! I'm{" "}
              <RoughNotation
                type="highlight"
                show={true}
                color={"#FFAD95"}
                animationDuration={1200}
              >
                Oguz.
              </RoughNotation>
              <br />
              iOS Developer & Different thinker.
            </h1>

            <p className=" text-sm  mt-4 leading-normal 	 md:leading-loose  md:text-base text-justify	 text-gray-800 font-normal ">
              My goal is to enhance your iOS
              presence by applying high problem-solving skills and a deep
              passion for developing robust, scalable solutions. I focus on
              delivering clean, efficient code that meets user needs and
              integrates seamlessly into iOS ecosystem.
            </p>
            <div className="flex space-x-6 mt-6">
              <CustomLink title="MORE ABOUT ME" link="/aboutMe" />
              <CustomLink title="MY RESUME" link="/cv.pdf" newTab />
            </div>
          </div>

          <div className="relative w-56 h-56 lg:-translate-y-4 mb-6 lg:mb-0 self-center lg:self-auto">
            <CustomImage
              image={HeroImage.src}
              alt="Hero Image"
              className="rounded-full"
            />
          </div>
        </section>

        {/* status section */}
        <section className="flex flex-col  lg:flex-row lg:justify-start space-y-8 lg:space-y-0  ">
          <div className="lg:w-1/3 ">
            <p className="statusTitle">
              <RoughNotation
                type="box"
                show={true}
                color={"#FF7262"}
                animationDelay={1000}
              >
                CURRENTLY{" "}
              </RoughNotation>
            </p>
            <p className="text-sm ">
              Senior iOS Developer <br /> at{" "}
              <span className="font-extrabold text-orange animate-pulse">
                OBSS
              </span>
            </p>
          </div>
          <div className="lg:w-1/3 ">
            <p className="statusTitle">
              <RoughNotation
                type="box"
                show={true}
                color={"#FF7262"}
                animationDelay={1500}
              >
                ON THE PROJECT{" "}
              </RoughNotation>
            </p>
            <p className="text-sm  lg:w-2/3">
              <span className="font-extrabold text-orange animate-pulse">
                Turkish Airlines
              </span>{" "}
              iOS Application
            </p>
          </div>
          <div className="lg:w-1/3 ">
            <p className="statusTitle">
              <RoughNotation
                type="box"
                show={true}
                color={"#FF7262"}
                animationDelay={2000}
              >
                LEARINING ABOUT{" "}
              </RoughNotation>
            </p>
            <p className="text-sm  ">VisionOS</p>
          </div>
        </section>

        {/* Project Section */}
        <section className="">
          <h2 className="title">Recent Work </h2>
          <p className="text-sm  mt-6  leading-normal md:leading-loose text-justify	 sm:w-4/5 md:w-4/5 md:text-base  text-gray-800 font-normal  ">
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, and companies I've
            dedicated my time to.
          </p>
          <div className="flex space-x-6 lg:space-x-12 mt-8 ">
            {Categories.map((filter) => (
              <div key={filter.id}>
                <button
                  onClick={() => {
                    setIsActive(filter.id);
                    setIsAnimated(false);
                  }}
                  className={
                    isActive === filter.id
                      ? "filter text-black  transitions"
                      : `filter text-gray-400  transitions ${
                          isAnimated ? "animate-bounce" : null
                        }`
                  }
                >
                  {filter.title}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:my-4">
            {projects.map((project, index) => (
              <>
                {project.frontmatter.category === isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: transition,
                    }}
                  >
                    {isClient && (
                      <AppStoreListing
                        folder={project.frontmatter.imageFolder}
                        title={project.frontmatter.title}
                        subtitle={project.frontmatter.subtitle}
                        popularity={project.frontmatter.popularity}
                        description={project.frontmatter.description}
                        score={project.frontmatter.score}
                        rating={project.frontmatter.rating}
                        link={
                          project.frontmatter.soon
                            ? project.frontmatter.live
                            : `/${project.slug}`
                        }
                        role={project.frontmatter.role}
                        time={project.frontmatter.time}
                      />
                    )}
                  </motion.div>
                ) : null}
              </>
            ))}
          </div>
        </section>

        {/* Skills Section */}

        <section>
          <div>
            <h2 className="title">My Skills</h2>
            <p className="text-sm  mt-4 leading-normal md:leading-loose	 md:text-base text-justify	 text-gray-800 font-normal  md:w-4/5">
              As a developer, I am convinced that the way to be successful in
              such a crowded market is to always LEARN!
            </p>
            <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10 mt-8  font-bold text-sm md:text-base">
              <li>
                <span className="text-lightBlue text-xl">.</span> UIKit
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> SwiftUI
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> Combine
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> Core Data
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> Unit Testing
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> Firebase
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> CI/CD
                Integration
              </li>
              <li>
                <span className="text-lightBlue text-xl">.</span> Git Workflow
              </li>
            </ul>
          </div>
        </section>
      </main>
      {/* Footer */}

      <Footer />
    </motion.div>
  );
}

export async function getStaticProps() {
  //  get files from projects directory
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter from posts
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  projects.sort(
    (a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0)
  );

  return {
    props: {
      projects: projects,
    },
  };
}
