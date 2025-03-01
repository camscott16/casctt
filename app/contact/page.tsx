import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6">
        Button opens your default email client. Feel free to ask me anything :)
      </p>
      <a
        href="mailto:camscott2003@outlook.com?subject=Contact%20from%20My%20Website"
        className="rounded-md border-2 border-black transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 dark:bg-black dark:text-white dark:border-white dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8"
      >
        Email Me
      </a>
    </div>
  );
}
