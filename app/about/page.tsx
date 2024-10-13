import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center p-8 sm:p-20 gap-16">
      <Image
        src="/pfp.png" // Replace with your image
        alt="Profile Picture"
        width={180}
        height={180}
        className="rounded-full"
      />
      <div className="text-left max-w-lg">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
        Motivated and passionate third-year Computer Science major seeking an entry-level position to build upon a strong educational foundation and apply an innovative approach to Computer Science. Strong communication skills and excellent understanding of teamwork and leadership in professional settings. Eager to maximize interpersonal skills in an engaging and challenging environment.
        </p>

      </div>
    </div>
  );
};

export default About;

