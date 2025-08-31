import Link from "next/link";
import { ArrowRight, Book, Users, Sparkles } from "../components/Icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-700/70 ">
        <div className="px-16 py-20 text-center max-w-screen-2xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Welcome to ModernBlog
          </h1>
          <p className="mt-4 text-gray-100/95 text-lg font-semibold sm:text-xl max-w-3xl mx-auto">
            Discover insights, tutorials, and stories about modern web
            development, design, and technology that shapes our digital world.
          </p>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-8 rounded-lg bg-gray-700/50 border border-gray-100/30 border-solid text-gray-100 px-5 py-3 font-bold hover:bg-gray-600 shadow-sm hover:shadow-md shadow-gray-400 hover:shadow-gray-500 transition"
          >
            Explore Articles
            <ArrowRight className="h-4 w-4 text-gray-100" />
          </Link>
        </div>
      </section>

      {/* Why Read Our Blog*/}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center">Why Read Our Blog?</h2>
        <p className="mt-3 text-center text-gray-600 max-w-lg mx-auto">
          We're passionate about sharing knowledge and helping developers grow
          their skills.
        </p>

        <div className="mt-12 grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] text-center justify-items-center">
          <div className=" justify-items-center  rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 mb-4">
              <Book className="h-8 w-8 text-indigo-600" />
            </span>
            <h3 className="font-semibold">In-Depth Articles</h3>
            <p className="mt-4 text-md text-gray-600">
              Comprehensive guides and tutorials that go beyond the surface
              level.
            </p>
          </div>

          <div className=" justify-items-center  rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </span>
            <h3 className="font-semibold">Expert Authors</h3>
            <p className="mt-4 text-md text-gray-600">
              Content written by experienced developers and industry
              professionals.
            </p>
          </div>

          <div className=" justify-items-center  rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 mb-4">
              <Sparkles className="h-8 w-8 text-indigo-600" />
            </span>
            <h3 className="font-semibold">Latest Trends</h3>
            <p className="mt-4 text-md text-gray-600">
              Stay up-to-date with the newest technologies and best practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
