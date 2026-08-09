export default function About() {
  return (
    <section
      id="about"
      className="dark:bg-neutral-950 px-8 py-20 max-w-3xl mx-auto"
    >
      <div className="space-y-4">
        <span className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase text-sm">
          About Me
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
          Hi, I am Rupali Akter
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a 3rd year CSE student on my way to becoming a Full-Stack
          Developer. Right now, my strongest skill is Frontend Development
          — I work confidently with React, Next.js, and Tailwind CSS to
          build clean, responsive interfaces. Alongside that, I am also
          building my Backend skills with Node.js, Express.js, MongoDB,
          and SQL.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          My journey started with C/C++, and I have solved quite a few
          problems on Codeforces and LeetCode along the way — it sharpened
          my logic and problem-solving, skills I still carry into every
          project I build.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Outside of coding, I enjoy reading and exploring new things. I
          believe in staying consistent and always learning, and I try to
          bring that mindset into everything I do.
        </p>
      </div>
    </section>
  );
}