"use client";

import { useRef } from "react";
import SectionHeading from "@/components/section-heading";
import { projectsDataDetail } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleLeft } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectDetailPage = ({ params }) => {
  const data = projectsDataDetail.filter((item) => item.slug === params.slug);

  // const ref = useRef < HTMLDivElement > null;
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"],
  // });
  // const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
              PROJECT
            </p>
            <p className="text-2xl font-bold">{data[0]?.title}</p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
              YEAR
            </p>
            <p className="text-2xl font-bold">{data[0]?.date}</p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
              GITHUB
            </p>
            <p className="text-2xl font-bold">{data[0]?.github}</p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
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
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
              DESCRIPTION
            </p>
            <p className="text-2xl font-bold text-start">
              {data[0]?.description}
            </p>
          </div>
          <div className="mb-6 md:md-14">
            <p className="text-base text-start text-gray-500 dark:text-white/70 font-medium">
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
        <p className="text-base">OVERVIEW</p>
        <p className="text-6xl font-bold text-start">
          Take a tour around projects
        </p>
        <div className="mt-28 relative">
          {data[0]?.listImage.map((item, index) => (
            // <motion.div
            //   key={index}
            //   ref={ref}
            //   style={{
            //     scale: scaleProgess,
            //     opacity: opacityProgess,
            //   }}
            //   className="group mb-3 sm:mb-8 last:mb-0"
            // >
            <Image
              key={index}
              src={item}
              alt={item}
              width={1000}
              height={600}
              layout="responsive"
              loading="lazy"
              className="object-cover shadow-md border mb-10"
            />
            // </motion.div>
          ))}
        </div>
      </section>

      {/* Get Back Section*/}
      <section className="my-28 py-28 w-full text-center sm:mb-0 mt-14">
        <p className="text-lg text-center text-gray-500 dark:text-gray-200 mb-6">
          DOESN'T SEE ANY THING LEFT
        </p>
        <SectionHeading>
          <Link
            href="/"
            className="flex justify-center align-middle gap-3 underline"
          >
            <FaChevronCircleLeft size={"3rem"} />{" "}
            <span className="text-6xl">Comeback</span>
          </Link>
        </SectionHeading>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
