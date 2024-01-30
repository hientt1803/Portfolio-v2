"use client";

import SectionHeading from "@/components/section-heading";
import { projectsDataDetail } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleLeft } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ProjectDetailPage = ({ params }) => {
  const data = projectsDataDetail.filter((item) => item.slug === params.slug);

  return (
    <div className="container mx-auto px-auto ">
      <SectionHeading>
        <Link
          href="/"
          className="flex justify-center align-middle gap-2 underline"
        >
          <FaChevronCircleLeft /> Comeback
        </Link>
      </SectionHeading>

      {/* Project feature */}
      <section className="mb-28 w-full flex-col md:flex-row text-center sm:mb-0 mt-14 flex justify-center">
        <div className="flex flex-1 flex-col items-start gap-3">
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              PROJECT
            </p>
            <p className="text-2xl font-bold">{data[0]?.title}</p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              YEAR
            </p>
            <p className="text-2xl font-bold">{data[0]?.date}</p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              GITHUB
            </p>
            <p>
              <Link
                href={data[0]?.github}
                className="dark:text-white text-2xl font-bold underline"
              >
                {data[0]?.github}
              </Link>
            </p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              TECHNOLOGY
            </p>
            <p className="text-2xl font-bold text-start">
              {data[0]?.tags.map((item, index) =>
                index === data[0].tags.length - 1 ? (
                  <span key={index}>{item}.</span>
                ) : (
                  <span key={index}>{item},</span>
                )
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-3">
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              DESCRIPTION
            </p>
            <p className="text-2xl font-bold text-start">
              {data[0]?.description}
            </p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-400 dark:text-white/70 font-semibold">
              FEATURE
            </p>
            <ul className="text-2xl font-bold text-start">
              {data[0]?.feature.map((item, index) => (
                <li key={index}> - {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image Preview */}
      <section className="mb-28 w-full text-start sm:mb-0 mt-14">
        <p className="text-base mb-5">OVERVIEW</p>
        <p className="text-6xl font-bold text-start">
          Take a tour around projects
        </p>
        <div className="mt-28 relative">
          {data[0]?.listImage.length === 0 ? (
            <>
              <div className="my-28 py-28">
                <p className="text-base text-center">
                  IMAGE WILL BE UPDATE SOON AS POSIBLE
                </p>
                <p className="text-6xl font-bold text-center">
                  Sorry for the inconvenience.
                </p>
              </div>
            </>
          ) : (
            <>
              {data[0]?.listImage.map((item, index) => (
                <motion.div
                  className="bg-white borderBlack rounded-xl dark:bg-white/10 dark:text-white/80 mb-32"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <Image
                    key={index}
                    src={item}
                    alt={item}
                    width={1000}
                    height={500}
                    quality={75}
                    layout="responsive"
                    loading="lazy"
                    className="object-cover shadow-md border"
                  />
                </motion.div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Get Back Section*/}
      <section className="my-28 py-28 w-full text-center sm:mb-0 mt-14">
        <p className="text-lg text-center font-semibold text-gray-500 dark:text-gray-200 mb-6">
          DOESN'T SEE ANY THING LEFT
        </p>
        <SectionHeading>
          <Link href="/" className="flex justify-center align-middle gap-3">
            <FaChevronCircleLeft size={"3rem"} />{" "}
            <span className="text-6xl">Comeback</span>
          </Link>
        </SectionHeading>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
