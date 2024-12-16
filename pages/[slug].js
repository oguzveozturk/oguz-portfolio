import CustomLink from "../components/CustomLink";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Project from "../components/Project";
import { motion } from "framer-motion";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CustomImage from "../components/CustomImage";
import { RoughNotation } from "react-rough-notation";
import HorizontalViewer from "../components/HorizontalViewer";
import AppStoreListing from "../components/AppstoreListing";
import { useEffect, useState } from "react";
import AppStoreDownload from "../components/AppstoreDownload";

function page({
  projects,
  frontmatter: { title, preview, paragraph, role, live, imageFolder, imageCount, repo, category },
  slug,
  content,
}) {
  const transition = { duration: 0.7, ease: [0.4, 0.13, 0.23, 0.9] };
  const otherPosts = projects.filter(
    article =>
      article.frontmatter?.title != title &&
      article.frontmatter?.category === category
  );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transition }}
      exit={{ opacity: 0 }}
      className='flex flex-col h-screen  max-w-[900px] mx-auto px-4 md:px-12 lg:px-0 antialiased'>
      <Head>
        <title> {title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="anonymous" />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700;800&display=swap'
        />
      </Head>
      <NavBar />

      <main className='flex-col space-y-8 md:space-y-8 '>
        {/* Project Hero */}

        <section>
  <div className='mt-12 lg:mt-0'>
    <CustomLink link='/' title='← Go Back' />
  </div>
  <div className='flex justify-between items-end'>
  <h2 className='mt-8 text-xl md:text-2xl lg:text-3xl font-bold'>
    <RoughNotation
      type='highlight'
      show={true}
      color={"#FFAD95"}
      animationDuration={1200}
    >
      {title}
    </RoughNotation>
  </h2>
  {live && <AppStoreDownload href={live} />}
</div>
  <p className='text text-justify '>{paragraph}</p>
          <div className='flex flex-col lg:space-y-0 lg:flex-row  lg:justify-between mt-6 '>
            <div className='flex flex-col space-y-0 lg:flex-row lg:space-y-0 lg:space-x-12  lg:items-center'>
              
              {repo ? (
                <div>
                  <p className='statusTitle'>CODE</p>
                  <CustomLink link={repo} title='Git Repo' newTab />
                </div>
              ) : null}

              <div>
                <div className='flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6  lg:items-center'>
                <p className='text-sm lg:pt-1 font-semibold '>• CI/CD</p>                
                <p className='text-sm lg:pt-1 font-semibold '>• SEALSDK</p>
                <p className='text-sm lg:pt-1 font-semibold '>• Cocoapods</p> 
                <p className='text-sm lg:pt-1 font-semibold '>• Charts</p>                               
                <p className='text-sm lg:pt-1 font-semibold '>�� MVC</p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className='markdown'
          dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

<div className='relative w-full h-[400px] md:h-[500px]'>

<HorizontalViewer folderName={imageFolder} imageCount={imageCount} />

</div>

        {isClient && otherPosts.length > 0 ? (
          <div>
            <h2 className='title'>Other Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-16 lg:my-20'>
              {otherPosts.slice(0, 2).map((project) => (
                <div key={project.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: transition,
                    }}>
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
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>

      {/* Footer */}

      <Footer />
    </motion.div>
  );
}

export default page;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("projects", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  //  get files from projects directory
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter from posts
  const projects = files.map(filename => {
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

  // Order projects by the 'order' property
  projects.sort((a, b) => (a.frontmatter.order || 0) - (b.frontmatter.order || 0));

  return {
    props: {
      frontmatter,
      slug,
      content,
      projects,
    },
  };
}
