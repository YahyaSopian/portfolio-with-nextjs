"use cliet";
import Image from "next/image";
import Link from "next/link";

const Project = ({ projects }) => {
  return (
    <div className="project flex justify-center gap-6">
      {projects.map((project) => (
        <div key={project.title} className="flex flex-col justify-center items-center flex-shrink flex-grow border rounded  bg-[#222222] text-white shadow">
          <Image src={project.imageUrl} width={300} height={250} alt={project.title} className=" mb-3" />
          <button className="rounded px-1 w-2/3 bg-white text-center text-black font-semibold">
            <Link href={project.url}>Visit</Link>
          </button>
          <p className="text-xl font-semibold my-3">{project.title}</p>
        </div>
      ))}
    </div>
  );
};
export default Project;
