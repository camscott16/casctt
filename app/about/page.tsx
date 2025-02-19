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
        <div className="w-48 h-48 border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/ageless.PNG" // Replace with your image path
            alt="About Image 4"
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
          <p className="text-black">
            Hi! I&apos;m Cameron Scott. I&apos;m passionate about technology, Software Engineering, 
            and Finance. Whether I&apos;m creating, traveling, or working on 
            projects, I love solving complex problems and making an impact. 
          </p>
          <p className="text-black mt-4">
            In my free time, I enjoy learning about anything and everything. Also studying to get my private pilot&apos;s liscence.
          </p>
          <p className="text-black mt-4">
           Checkout the pinterest for some fit inspo :P
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
