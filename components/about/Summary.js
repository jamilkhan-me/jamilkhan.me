import Image from "next/image";
function Summary() {
  return (
    <div className="flex flex-row justify-between border-y-4 ">
      <div className="flex flex-row w-1/3 my-5">
        <div className="w-20 h-60 flex justify-start bg-slate-500">
          <p className="text-white tracking-wide px-24 uppercase transform -rotate-90 text-2xl">
            Resume
          </p>
        </div>
        <div className="w-50 h-60">
          <Image
            src="/static/profile1.png"
            alt="profile image"
            className="w-60 h-60 flex border-4 justify-center"
            width={130}
            height={55}
          />
        </div>
      </div>
      <div className="w-2/3 border-l-4 my-5 px-10">
        <h1 className="text-5xl uppercase font-bold tracking-widest">
          Jamil Khan
        </h1>
        <p className="text-xl font-semibold uppercase my-2">
          Freelancer & Software engineer
        </p>
        <p className="text-justify">
          Results-driven and highly skilled Software Engineer with over 5 years
          of experience in full-stack development, software architecture, and
          agile methodologies. Proficient in multiple programming languages
          including Python, Java, and C++. Adept at collaborating with
          cross-functional teams to achieve project goals, troubleshoot complex
          issues, and deliver scalable solutions. Committed to producing
          high-quality code and staying current with industry trends and
          technologies.
        </p>
      </div>
    </div>
  );
}

export default Summary;
