import Image from 'next/image';
import React from 'react';

const experiences = [
    {
        company: 'Intuit Credit Karma',
        role: 'Software Engineer Intern',
        duration: 'May 2024 - Aug 2024',
        image: '/ck.png',
        notes: [
            'Responsible for Fullstack Development within Admin Tools using TypeScript and Scala',
            'Improved fraud tools used by agents to mitigate Account Takeover through added functionality',
            'Implemented RESTFUL and Thrift APIs to strengthen communication and integration of services',
            'Led the migration of an Account Management Service, optimizing its capacity to deauthorize up to 1,500 more devices simultaneously',
            'Updated Frontend elements of Admin Tools using React (JavaScript) to allow agents a more efficient way to remediate Account Takeovers and fraudulent account creation with precise logging',
        ],
    },
    {
        company: 'Clemson FinTech',
        role: 'Lead Software Engineer',
        duration: 'Jan 2024 - Present',
        image: '/cufintech.jpeg',
        notes: [
            'Leading a diverse team of 16 prospective developers in designing and developing Fullstack applications for Clemson University’s first student-led FinTech organization',
        ],
    },
];

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 gap-16">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center gap-8">
            <Image
              src={exp.image}
              alt={`${exp.company} Logo`}
              width={180}
              height={180}
              className="rounded-lg"
            />
            <div className="text-left max-w-lg">
              <h2 className="text-2xl font-semibold">{exp.company}</h2>
              <p className="text-lg">{exp.role} ({exp.duration})</p>
              <ul className="mt-4 text-sm list-disc list-inside">
                {exp.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
