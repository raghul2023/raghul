'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Publications = () => {
  const [publications, setPublications] = useState([
    {
      title: 'Financial Performance of MRF Limited',
      description: "Published in IJSART, this project analyzed MRF Ltd.'s financial health, focusing on profitability, solvency, and risk. It provided valuable insights into financial performance through data analysis and interpretation, showcasing strong analytical and presentation skills.",
      link: 'https://ijsart.com/financial-performance-of-mrf-ltd-63541',
    },
    {
      title: 'Strategic role of investment banks in mergers & acquisitions',
      description: 'Published in IJSART, this project explored the strategic influence of technology firms in M&A transactions. It assessed the accuracy of valuations and the role of tech in enhancing deal structuring and negotiation processes. Demonstrated strong analytical, research, and financial modeling skills with a focus on real-world M&A case analysis..',
      link: 'https://www.ijsart.com/strategic-role-of-investment-banks-in-mergers--acquisitions-102951',
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className=""
    >
      <div className="mt-12 w-full flex justify-center md:mt-28">
        <div className="max-w-[650px] flex flex-col">
          <h1 className="md:text-5xl p-3 text-2xl font-bold text-start">Publications</h1>
          <p className="p-3 tracking-wider leading-8 text-[var(--secondary)] text-md md:text-lg">
            Here are some of my publications.
          </p>
          <div className="h-[1px] mt-4 md:mt-8 w-full bg-[#1e1e1e]"></div>
          {publications.map((pub, index) => (
            <div key={index} className="p-3 md:mt-6 mt-3 border-b border-gray-700">
              <h2 className="text-xl md:text-2xl font-semibold">{pub.title}</h2>
              <p className="mt-2 text-[var(--secondary)] md:text-lg tracking-wide leading-7">
                {pub.description}
              </p>
              <div className="md:my-8 my-4 w-full flex justify-left">
              <Link
                href={pub.link}
                target="_blank"
                className="px-6 w-full text-center py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-lg font-semibold hover:opacity-80 transition-all "
              >
                View Publications
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="md:my-8 my-4 w-full flex justify-center">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-lg font-semibold hover:opacity-80 transition-all"
        >
          Let's Connect 🚀
        </Link>
      </div> */}
    </motion.div>
  );
};

export default Publications;
