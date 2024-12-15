import React from "react";
import Image from "next/image";

const experiencelist = [
  {
    imgUrl: "/google-logo.png",
    title: "Lead Software Engineer at Google",
    description: `As a Senior Software Engineer at Google, I played a pivotal role in developing innovative 
          solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`,
    periode: `Nov 2019 - Present`,
  },
  {
    imgUrl: "/apple-logo.png",
    title: "Junior Software Engineer at Apple",
    description: `During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible 
          for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.`,
    periode: `Jan 2016 - Dec 2017`,
  },
  {
    imgUrl: "/meta-logo.png",
    title: "Software Engineer at Meta",
    description: `At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data 
          processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.`,
    periode: `Jan 2017 - Oct 2019`,
  },
];
const Experience = () => {
  return (
    <div id="experience" className="w-2/3">
      <h2 className="font-extrabold text-blue-500 text-3xl text-center mb-14">Experience</h2>
      <ExperienceOne />
      <br />
      <ExperienceTwo />
      <br />
      <ExperienceThree />
    </div>
  );
};

export default Experience;

export const ExperienceOne = () => {
  return (
    <div className="container-list  ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <Image src={experiencelist[0].imgUrl} height={30} width={30} alt="google-logo" />
          <h3>{experiencelist[0].title}</h3>
        </div>
        <p>{experiencelist[0].periode}</p>
      </div>
      <br />
      <div className="desc">{experiencelist[0].description}</div>
    </div>
  );
};

export const ExperienceTwo = () => {
  return (
    <div className="container-list  ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <Image src={experiencelist[1].imgUrl} height={30} width={30} alt="google-logo" />
          <h3>{experiencelist[1].title}</h3>
        </div>
        <p>{experiencelist[1].periode}</p>
      </div>
      <br />
      <div className="desc">{experiencelist[1].description}</div>
    </div>
  );
};

export const ExperienceThree = () => {
  return (
    <div className="container-list  ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <Image src={experiencelist[2].imgUrl} height={30} width={30} alt="google-logo" />
          <h3>{experiencelist[2].title}</h3>
        </div>
        <p>{experiencelist[2].periode}</p>
      </div>
      <br />
      <div className="desc">{experiencelist[2].description}</div>
    </div>
  );
};
