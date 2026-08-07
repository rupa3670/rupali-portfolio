import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className=" dark:bg-neutral-950 flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-20 max-w-5xl mx-auto"
    >
     
      <div className="flex-1 space-y-4">
        <span className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase text-sm">
          About Me
        </span>
        <h2 className="text-xl md:text-xl font-bold text-gray-800 dark:text-gray-100">
          Hi, I am Rupali Akter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a 3rd year CSE student, currently learning both Frontend and
          Backend Development. I enjoy working with React and Next.js, and
          I am steadily moving toward becoming a Full-Stack Developer.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I love learning new technologies and building small real-world
          projects with them. I may still be new when it comes to
          experience, but I bring a strong eagerness to learn and the
          persistence to keep going.
        </p>
      </div>
     
      <div className="flex-1 flex justify-center">
        <div className="relative w-70 h-90 md:w-85 md:h-100 overflow-hidden ">
         <Image
  src="/assest/rupali.png"
  alt="Rupali"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
        </div>
      </div>
    </section>
  );
}