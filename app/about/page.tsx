import Image from "next/image";
import PinterestBoard from "@/components/PinterestBoard/pinterestBoard";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-6 space-y-6 md:space-x-10">
      {/* Left Section - Three Images */}
      <div className="flex flex-col space-y-6">
        <div className="w-48 h-48 rounded-lg shadow-2xl overflow-hidden">
          <Image
            src="/boston.jpg" // Replace with your image path
            alt="About Image 1"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-48 h-48 rounded-lg shadow-2xl overflow-hidden">
          <Image
            src="/gallery.jpg" // Replace with your image path
            alt="About Image 2"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-48 h-48 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/yleaves.jpg" // Replace with your image path
            alt="About Image 3"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-48 h-48 rounded-lg shadow-lg overflow-hidden">
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
        <div className="bg-white shadow-2xl rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-black">
            Currently studying CS + Artificial Intelligence @ Clemson University. Whether I&apos;m creating, traveling, or working on 
            projects, I love solving complex problems and making an impact. 
          </p>
          <p className="text-black mt-4">
            In my free time, I enjoy learning about anything and everything. Also studying to get my private pilot&apos;s liscence.
          </p>
          <p className="text-black mt-4">
           Checkout the pinterest for some fit inspo :P
          </p>
        </div>

       <div className="flex flex-col md:flex-row shadow-2xl items-start md:space-x-6">
          <div className="flex-1">
            <PinterestBoard />
          </div>
        </div> 

      </div>
    </div>
  );
}
