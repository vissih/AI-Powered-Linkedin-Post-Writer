import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { PostProvider } from "@/context/PostContext";
import { ChevronRight, Star } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI LinkedIn post writer Built using Next.js",
  description:
    "Write your perfect LinkedIn post with the help of AI.",
};

export default function Home() {
  return (
    <main className="relative grid  grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flx flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <Link
          href="https://github.com/vissih/AI-Powered-Linkedin-Post-Writer"
          target="_blank"
          className=""
        >
          <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star className="w-6 h-6 fill-yellow-300 text-yellow-400" />
            <hr className="mx-2 h-4 w-[1px] bg-gray-300" />
            Star on Github
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <h1 className="font-extrabold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4">
          CRAFT ENGAGING LINKEDIN POSTS IN SECONDS!
        </h1>
        <p className=" text-sm sm:text-base  md:text-lg text-accent">
          Provide a brief description, and we&apos;ll generate a LinkedIn post that highlights your message and engages your audience in seconds!
        </p>
      </div>

      <PostProvider>
        <UserInput />
        <Output />
      </PostProvider>
    </main>
  );
}
