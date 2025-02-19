import Image from "next/image";
import PinterestBoard from "@/components/PinterestBoard/pinterestBoard";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-6 space-y-6 md:space-x-10">
      {/* Left Section - Three Images */}
      <div className="flex flex-col space-y-6">
        <div className="w-48 h-48 border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/boston.jpg" // Replace with your image path
            alt="About Image 1"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-48 h-48 border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/gallery.jpg" // Replace with your image path
            alt="About Image 2"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-48 h-48 border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/yleaves.jpg" // Replace with your image path
            alt="About Image 3"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Section - Bio & Pinterest Board */}
      <div className="flex-1 space-y-6">
        {/* Bio Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600">
            Hi! I'm Cameron Scott. I'm passionate about technology, software engineering, 
            and finance. Whether I’m coding, building fintech solutions, or working on 
            personal projects, I love solving complex problems and making an impact. 
          </p>
          <p className="text-gray-600 mt-4">
            In my free time, I enjoy exploring new technologies, working on my portfolio, 
            and expanding my skill set in both finance and tech.
          </p>
        </div>

        {/* Pinterest Board */}
        <div className="hidden md:block w-200">
          <PinterestBoard />
        </div>
      </div>
    </div>
  );
}
