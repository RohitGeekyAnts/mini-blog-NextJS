import Link from "next/link";
import posts from "../../../data/posts";
import { ArrowLeft, User, Clock } from "../../../components/Icons";

export async function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <p className="p-10 text-center">Post not found. Go back to the blog.</p>
    );
  }

  return (
    <article className="max-w-screen-xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        <p className="font-semibold">Back to Blog</p>
      </Link>

      <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
        <span className="inline-flex items-center gap-2">
          <span className="h-8 w-8 grid place-items-center text-lg rounded-full bg-orange-100">
            {post.avatar}
          </span>
          <span className="text-gray-700">{post.author}</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-4 w-4" /> {post.readTime}
        </span>
        <span>{post.date}</span>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-8">
        {post.sections ? (
          <>
            <section>
              <h2 className="text-xl font-semibold">Introduction</h2>
              <p className="mt-3 text-gray-700">{post.sections.introduction}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Key Trends</h2>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
                {post.sections.trends.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">The Road Ahead</h2>
              <p className="mt-3 text-gray-700">{post.sections.roadAhead}</p>
            </section>
          </>
        ) : (
          <p className="text-lg leading-relaxed whitespace-pre-line text-gray-800">
            {post.content}
          </p>
        )}
      </div>

      {/* Author card */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 grid place-items-center text-xl rounded-full bg-orange-100">
            {post.avatar}
          </div>
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-gray-600">
              Passionate developer sharing insights about modern web
              development.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
