import { useEffect, useState } from "react";

const techIcons = [
    { src: '/icons/mongodb.svg', alt: 'MongoDB' },
    { src: '/icons/express.svg', alt: 'Express' },
    { src: '/icons/react.svg', alt: 'React' },
    { src: '/icons/nodedotjs.svg', alt: 'Node.js' },
    { src: '/icons/docker.svg', alt: 'Docker'},
    { src: '/icons/postgresql.svg', alt: 'PostgreSQL' },
    { src: '/icons/prisma.svg', alt: 'Prisma'},
    { src: '/icons/tailwindcss.svg', alt: 'TailwindCSS'},
  ];
  

export function TechIntroAnimation() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerPage) % techIcons.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  const visibleIcons = techIcons
    .concat(techIcons)
    .slice(startIndex, startIndex + itemsPerPage);
 
  return (
    <div className="relative w-full flex bg-amber-300">
      {visibleIcons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-10 h-10 md:w-15 md:h-15 pl-4"
        />
      ))}
    </div>
  );
}
