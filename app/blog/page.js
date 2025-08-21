import Link from "next/link";
import posts from "../../data/posts";

export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Latest Articles</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="p-6 rounded-2xl shadow hover:shadow-lg">
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.description}</p>
            <p className="text-xs text-gray-500 mb-2">
              {post.author} · {post.readTime}
            </p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
