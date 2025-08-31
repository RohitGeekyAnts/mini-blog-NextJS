import Link from "next/link";
import posts from "../../data/posts";
import { User, Clock, ArrowRight } from "../../components/Icons";

export default function BlogPage() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-16 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Latest Articles</h1>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Insights, tutorials, and thoughts on modern web development and
          technology.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition "
          >
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-semibold leading-snug">
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
            </h3>

            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
              <span>{post.date}</span>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-1 font-medium hover:underline text-gray-700"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
