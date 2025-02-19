import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-gist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <div className="w-60 h-60 border-4 border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/logo.JPG" // Update with your actual image path
          alt="Profile"
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </div> 
        <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              printf(&quot;Welcome, my name is Cam&quot;);{""}
            </code>
          </li>
          <li>Ambitious Software Developer & Learner</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/about" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              About
          </Link>
          <Link href="/experience"className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Experience
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-left justify-center">
        <a
          className="flex items-left gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/camscott16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.png"
            alt="File icon"
            width={23}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/casctt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="Window icon"
            width={22}
            height={22}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/ccamscott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/education.png"
            alt="Globe icon"
            width={22}
            height={22}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}
