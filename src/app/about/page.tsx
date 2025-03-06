// eslint-disable-next-line react/no-unescaped-entities
'use client';
import {motion} from 'framer-motion';
import Link from 'next/link';
const About = () =>{
    return (
        <motion.div
    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} // Start blurred, small & hidden
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly appear, scale up & remove blur
    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth cinematic transition
    className=""
  >
        <div className="mt-12 w-full flex justify-center md:mt-28" > 
        
        <div className="max-w-[650px] flex  flex-col">
            <h1 className="md:text-5xl p-3 text-2xl font-bold text-start">About Me </h1>
            <p className="p-3 tracking-wider leading-8 text-[var(--secondary)] text-md md:text-lg">
            I’m an MBA Finance student with a strong passion for investment banking, private equity, and financial modeling. I have worked on financial analysis, valuation, and risk assessment projects, including M&A analysis, DCF modeling, and market research. Through internships and projects, I’ve gained hands-on experience in analyzing financial data and making strategic recommendations. I previously interned at Zielhoch, where I developed insights into financial strategy and business analysis. Beyond academics, I enjoy exploring fintech innovations, staying updated on market trends, and learning advanced valuation techniques. I’m always eager to take on new challenges and grow in the finance industry by applying my skills to real-world scenarios.
            </p>
            <div className="h-[1px] mt-4 md:mt-8 w-full bg-[#1e1e1e]"></div>
            <h2 className="md:mt-8 mt-3 text-xl md:text-2xl p-3">How a Chitchat Sparked My Passion for Investment Banking</h2>
            <p className="mt-3 p-3 md:text-lg tracking-wide leading-7 text-[var(--secondary)]">I was born in Malappuram, Kerala, but when I was 2 years old, my family moved to Coimbatore. College was a different kind of adventure. Instead of focusing on studies, I spent most of my time playing cricket and attending tournaments. During the last few months of my undergraduate degree, I had no idea what to do next. I received placement offers, but I rejected them because they weren’t in core finance, which was where my real interest lay. Then, I made the decision to pursue an MBA in Finance, which led me to CMS Jain. During my first semester, my mentor casually called me, and we had a chit-chat. During that conversation, she suggested me to develop financial modeling skills. Intrigued, I started learning it. As I dived deeper, I discovered the world of Investment Banking and learned about companies like Goldman Sachs and JPMorgan. Fast forward a few months—I fell in love with Investment Banking. Now, I’m on a journey to master Financial Modeling, turning what started as an unexpected challenge into a real passion. At the same time, I’m deepening my knowledge of finance and investment banking. Hopefully, this time with fewer cricket distractions!. 😆🔥</p>
        </div>
        </div>
        <div className=" md:my-8 my-4 w-full flex justify-center">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-lg font-semibold hover:opacity-80 transition-all"
        >
          Let's Connect 🚀
        </Link>
      </div>
        </motion.div>
    )
}
export default About;