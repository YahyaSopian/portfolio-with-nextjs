import Image from "next/image";

const Skills = () => {
  const images = [
    {
      url: "/css.png",
      name: "css",
      alt: "css",
      size: 50,
    },
    {
      url: "/html.png",
      name: "html",
      alt: "html",
      size: 50,
    },
    {
      url: "/nodejs.png",
      name: "nodejs",
      alt: "nodejs",
      size: 50,
    },
    {
      url: "/reactjs.png",
      name: "reactjs",
      alt: "reactjs",
      size: 50,
    },
    {
      url: "/javascript.png",
      name: "javascript",
      alt: "javascript",
      size: 50,
    },
    {
      url: "/flutter.png",
      name: "flutter",
      alt: "flutter",
      size: 50,
    },
  ];
  return (
    <div className="mt-12">
      <h2 className="mb-12 text-center font-semibold text-px-20">EXPERIENCE WITH</h2>
      <SkilsItem images={images} />
    </div>
  );
};

export default Skills;
export const SkilsItem = ({ images }) => {
  return (
    <div className="experience-container flex justify-center items-center gap-6 mb-24">
      {images.map((image) => (
        <div>
          <Image key={image.name} src={image.url} alt={image.alt} height={image.size} width={image.size} className="flex-shrink flex-grow" />
        </div>
      ))}
    </div>
  );
};
