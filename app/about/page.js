"use client";
export default function AboutPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 grid place-items-center text-2xl rounded-full bg-orange-100">
            🧑‍💻
          </div>
          <div>
            <h1 className="text-xl font-semibold">Alex Thompson</h1>
            <p className="text-sm text-gray-600">
              Passionate developer sharing insights about modern web
              development.
            </p>
          </div>
        </div>

        <p className="mt-6 text-gray-700">
          ModernBlog is a clean, content-first blog focused on web development,
          design, and engineering practices that stand the test of time.
        </p>

        <button
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          onClick={() => alert("This is a demo contact button.")}
        >
          Contact
        </button>
      </div>
    </section>
  );
}
