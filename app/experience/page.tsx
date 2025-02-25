import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">My Experience</h1>

      {/* Experience Section */}
      <div className="flex flex-col space-y-10 max-w-4xl w-full">
        {/* Company 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <div className="flex rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/ck.png"
              alt="Company 1 Logo"
              width={220}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-gray-700 text-lg">
            <h2 className="text-2xl font-bold text-gray-900">
              Credit Karma - Charlotte, NC
            </h2>
            <p className="mt-2">
              Built cool stuff, met even cooler people :P
            </p>
            <p className="mt-2 font-bold">
              User Management &amp; Connected Accounts
            </p>
            <p className="mt-2">
              Enhanced Full Stack development skills by optimizing User Management and Fraud Remediation Tools.
              Implemented solutions to combat Account Takeover (ATO), maintaining and improving user security and trust.
            </p>
          </div>
        </div>

        {/* Company 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <div className="flex rounded-lg overflow-hidden max-w-60">
            <Image
              src="/amz.gif"
              alt="Company 3 Logo"
              width={220}
              height={220}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <div className="text-gray-700 text-lg">
            <h2 className="text-2xl font-bold text-gray-900">
              Amazon Robotics - Boston, MA
            </h2>
            <p className="mt-2">
              Incoming Software Engineer Intern, Summer 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
