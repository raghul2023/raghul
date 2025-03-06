import { WorkType } from "@/types/types";
import Work from "./work";
import { workExperience } from "@/utils/work";
const Info = () =>{
    return (
        <>
        <div className="max-w-[650px] flex flex-col">
          <h1 className="md:text-5xl p-3 text-2xl font-bold text-start uppercase">Raghul Krishna</h1>
          <p className="p-3 tracking-wider leading-8 text-[var(--secondary)] text-md md:text-lg">
          Detail-oriented finance enthusiast with a strong background in financial analysis and research. Experienced in financial modeling and market research, helping improve decision-making and streamline processes. Looking for a role in investment banking or asset management to apply analytical skills and contribute to strategic financial initiatives.
          </p>
          <div className="h-[1px] mt-4 md:mt-8 w-full bg-[#1e1e1e]"></div>
          <h2 className="md:mt-8 mt-3 text-xl md:text-2xl p-3">Work Experience</h2>
          
          {/* Work Grid */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 p-3 grid-cols-1 gap-4 md:my-5 my-3">
            {workExperience.map((work:WorkType) => (
              <Work link={work.link} key={work.title} img={work.img} title={work.title} date={work.date} company={work.company} />
            ))}
          </div>
          <h3 className="p-3 text-xl font-semibold md:text-2xl">Details</h3>
          {/* Work Details Below the Grid */}
          <div className="mt-6 p-3 space-y-3 md:space-y-6">
            {workExperience.map((work) => (
              <div key={work.title} className="p-4 bg-[var(--work-bg)] rounded-md">
                <h3 className="text-lg md:text-xl font-bold">{work.title}</h3>
                <p className="text-sm md:text-md text-[var(--secondary)]">{work.company} | {work.date}</p>
                <p className="mt-2 text-[14px] md:text-[16px] leading-7">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}
export default Info;