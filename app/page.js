import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to ModernBlog</h1>
        <p className="text-lg mb-6 text-gray-600">
          Discover insights, tutorials, and stories about modern web
          development.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Explore Articles →
        </Link>
      </section>

      {/* Why Read Section */}
      <section className="max-w-5xl mx-auto text-center py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Why Read Our Blog?</h2>
        <p className="text-gray-600 mb-10">
          We're passionate about sharing knowledge and helping developers grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">In-Depth Articles</h3>
            <p className="text-sm text-gray-600">
              Guides and tutorials that go beyond the surface level.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Expert Authors</h3>
            <p className="text-sm text-gray-600">
              Written by experienced developers and professionals.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">Latest Trends</h3>
            <p className="text-sm text-gray-600">
              Stay updated with new technologies and best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
