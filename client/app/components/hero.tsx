import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6 py-32 md:py-48 lg:py-52 bg-gray-50">
      <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl">
          UseCase.AI
        </h1>
        <p className="max-w-[42rem] leading-normal text-gray-600 sm:text-xl sm:leading-8">
        UseCase.AI is an AI-powered tool that generates use cases tailored to your company. It searches the web and analyzes industry competitors to suggest relevant resources.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-black text-white text-lg font-medium rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
