import Link from "next/link";
import posts from "../../../data/posts";

export default async function BlogDetailPage({ params }) {
  const { id } = await params;

  const post = posts.find((p) => String(p.id) === id);

  if (!post) return <p className="p-10 text-center">Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-6">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author} · {post.date} · {post.readTime}
      </p>
      <p className="text-lg leading-relaxed mb-10 whitespace-pre-line">
        {post.content}
      </p>

      <div className="border-t pt-6 mt-10">
        <p className="font-semibold">{post.author}</p>
        <p className="text-sm text-gray-600">
          Passionate developer sharing insights about modern web development.
        </p>
      </div>
    </article>
  );
}
